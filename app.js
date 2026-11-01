/**
 * Heartistry immersive storefront.
 * Design/demo mode until a Shopify public Storefront API token and real published catalog are configured.
 * Never place Admin API or private customer credentials here.
 */
(() => {
  'use strict';

  const SHOP_CONFIG = Object.freeze({
    domain: 'gsaspd-5d.myshopify.com',
    apiVersion: '2026-10',
    storefrontToken: '',
    ...((window.HEARTISTRY_SHOPIFY && typeof window.HEARTISTRY_SHOPIFY === 'object') ? window.HEARTISTRY_SHOPIFY : {})
  });
  const DEMO_PRODUCTS = [
    {id:'demo-rose',title:'The Forever Rose',category:'roses',type:'Forever florals',price:59,tag:'A LITTLE FOREVER',image:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-heart',title:'Close to My Heart',category:'jewelry',type:'Little treasures',price:89,tag:'MADE TO TREASURE',image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-candles',title:'The Golden Hour Set',category:'sets',type:'Sweet rituals',price:64,tag:'EVENING RITUAL',image:'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-notes',title:'Words for You',category:'personal',type:'Just for them',price:42,tag:'ONLY FOR YOU',image:'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-loveletter',title:'Love Letter Keepsake',category:'personal',type:'Just for them',price:48,tag:'PERSONAL TOUCH',image:'https://images.unsplash.com/photo-1503602642458-232111445657?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-roses2',title:'Blushing Bloom Bouquet',category:'roses',type:'Forever florals',price:76,tag:'A LOVE NOTE',image:'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-necklace2',title:'A Tiny Piece of Forever',category:'jewelry',type:'Little treasures',price:96,tag:'BE CLOSE',image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=780&q=82&auto=format&fit=crop'},
    {id:'demo-pamper',title:'The Slow Sunday Box',category:'sets',type:'Sweet rituals',price:69,tag:'STAY A WHILE',image:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=780&q=82&auto=format&fit=crop'}
  ];

  const state = {
    products: DEMO_PRODUCTS, live: false, filter:'all', showAll:false, cart:[],
    quizIndex:0, quizAnswers:[], lastFocused:null, dragging:false, moved:false,
    chosenWrap:'Burgundy & gold', modal:null
  };
  const el = id => document.getElementById(id);
  const format = (amount,currency='CAD') => new Intl.NumberFormat('en-CA',{style:'currency',currency}).format(Number(amount)||0);
  const escapeHTML = input => String(input??'').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const setupLive = Boolean(SHOP_CONFIG.domain && SHOP_CONFIG.storefrontToken);
  let toastTimer;

  function toast(message) {
    el('toast').textContent = message;
    el('toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>el('toast').classList.remove('show'),3300);
  }

  async function storefront(query,variables={}) {
    const domain = SHOP_CONFIG.domain.replace(/^https?:\/\//,'').replace(/\/$/,'');
    const result = await fetch('https://'+domain+'/api/'+SHOP_CONFIG.apiVersion+'/graphql.json',{
      method:'POST',
      headers:{'Content-Type':'application/json','X-Shopify-Storefront-Access-Token':SHOP_CONFIG.storefrontToken},
      body:JSON.stringify({query,variables})
    });
    if(!result.ok) throw new Error('Shopify request returned '+result.status);
    const json = await result.json();
    if(json.errors?.length) throw new Error(json.errors.map(x=>x.message).join('; '));
    return json.data;
  }

  function classifyProduct(product) {
    const hay = (product.title+' '+product.productType+' '+(product.tags||[]).join(' ')).toLowerCase();
    if(/rose|flower|floral|bouquet/.test(hay)) return 'roses';
    if(/necklace|ring|jewel|bracelet|earring|pendant|charm/.test(hay)) return 'jewelry';
    if(/custom|personal|engrave|photo|keepsake/.test(hay)) return 'personal';
    return 'sets';
  }

  async function loadCatalog() {
    if(!setupLive){renderProducts();setupBuilder();return;}
    try {
      const data=await storefront(`query HeartistryProducts {
        products(first: 24) {
          edges { node {
            id handle title productType tags availableForSale
            featuredImage { url altText }
            variants(first: 1) { edges { node { id availableForSale price { amount currencyCode } } } }
          } }
        }
      }`);
      const products=data?.products?.edges?.map(({node})=>{
        const variant=node.variants?.edges?.[0]?.node;
        return {id:node.id,title:node.title,type:node.productType||'The love edit',
          category:classifyProduct(node),price:variant?Number(variant.price.amount):0,
          currency:variant?.price?.currencyCode||'CAD',variantId:variant?.id,
          image:node.featuredImage?.url||'/favicon.svg',
          tag:'THE LOVE EDIT',available:Boolean(node.availableForSale&&variant?.availableForSale)};
      }).filter(p=>p.variantId)||[];
      if(products.length){state.products=products;state.live=true;state.cart=[];}
      else toast('Shopify is connected, but no published products were found. Showing design examples.');
    } catch(err){
      console.error('[Heartistry] Catalog unavailable:',err.message);
      toast('Live products are unavailable. Showing design examples for now.');
    }
    renderProducts();setupBuilder();renderCart();
  }

  function renderProducts(){
    const available = state.products.filter(p=>state.filter==='all'||p.category===state.filter);
    const shown=state.showAll?available:available.slice(0,4);
    const grid=el('productGrid');
    grid.innerHTML='';
    if(!shown.length){
      const empty=document.createElement('p');
      empty.textContent='There are no gifts in this collection just yet. Try another category.';
      grid.append(empty);
    }
    for(const p of shown){
      const article=document.createElement('article');
      article.className='product-card';
      article.innerHTML=`<div class="product-image">
        <img loading="lazy" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}"/>
        <span class="product-badge">${escapeHTML(state.live?p.tag:'DESIGN PREVIEW')}</span>
        <button class="product-add" data-add="${escapeHTML(p.id)}" aria-label="Add ${escapeHTML(p.title)} to bag">+</button>
      </div><div class="product-details">
        <span class="product-category">${escapeHTML(p.type)}</span>
        <h3>${escapeHTML(p.title)}</h3>
        <span class="product-price">${state.live?format(p.price,p.currency):'<small>Illustrative price</small> '+format(p.price)}</span>
      </div>`;
      grid.append(article);
    }
    const viewAll=el('viewAll');
    viewAll.hidden=available.length<=4;
    viewAll.innerHTML=state.showAll?'Show less <span>↑</span>':'See the full collection <span>↗</span>';
  }

  function setupBuilder(){
    const selector=el('builderProduct'),current=selector.value;
    selector.replaceChildren();
    state.products.forEach(p=>{
      const opt=document.createElement('option');
      opt.value=p.id;
      opt.textContent=p.title+(state.live?' — '+format(p.price,p.currency):' — preview');
      selector.append(opt);
    });
    if(state.products.some(p=>p.id===current)) selector.value=current;
  }

  function findProduct(id){return state.products.find(p=>p.id===id);}
  function addItem(productId,personalization){
    const product=findProduct(productId);
    if(!product) return;
    if(state.live && !product.available){toast('This gift is not currently available.');return;}
    const message=String(personalization?.message||'').trim().slice(0,180);
    const wrap=String(personalization?.wrap||'').slice(0,60);
    const key=productId+'|'+message+'|'+wrap;
    const entry=state.cart.find(line=>line.key===key);
    if(entry){entry.quantity=Math.min(99,entry.quantity+1);}
    else state.cart.push({key,productId,quantity:1,wrap,message});
    renderCart();
    openDrawer();
    toast(state.live?'Added to your bag.':'Added to your preview bag — checkout is not enabled.');
  }
  function changeQty(key,delta){
    const line=state.cart.find(l=>l.key===key);
    if(!line)return;
    line.quantity+=delta;
    if(line.quantity<=0)state.cart=state.cart.filter(l=>l.key!==key);
    renderCart();
  }
  function removeItem(key){state.cart=state.cart.filter(l=>l.key!==key);renderCart();}
  function renderCart(){
    el('bagCount').textContent=String(state.cart.reduce((sum,l)=>sum+l.quantity,0));
    const area=el('cartItems');area.replaceChildren();
    if(!state.cart.length){
      area.innerHTML='<div class="empty-bag"><span class="empty-heart">♡</span><h3>All the love starts here.</h3><p>Your bag is waiting for something lovely.</p></div>';
    }
    for(const line of state.cart){
      const product=findProduct(line.productId);
      if(!product)continue;
      const row=document.createElement('div');row.className='cart-line';
      row.innerHTML=`<img src="${escapeHTML(product.image)}" alt=""/>
        <div><h3>${escapeHTML(product.title)}</h3>
        ${line.wrap?'<p>'+escapeHTML(line.wrap)+'</p>':''}
        ${line.message?'<p>“'+escapeHTML(line.message)+'”</p>':''}
        <strong>${format(product.price*line.quantity,product.currency||'CAD')}</strong>
        <div class="line-qty"><button data-qty="-1" aria-label="Decrease quantity">−</button><span>${line.quantity}</span><button data-qty="1" aria-label="Increase quantity">+</button></div></div>
        <button class="remove" aria-label="Remove ${escapeHTML(product.title)}">×</button>`;
      row.querySelectorAll('[data-qty]').forEach(btn=>btn.addEventListener('click',()=>changeQty(line.key,Number(btn.dataset.qty))));
      row.querySelector('.remove').addEventListener('click',()=>removeItem(line.key));
      area.append(row);
    }
    const sum=state.cart.reduce((t,l)=>t+(findProduct(l.productId)?.price||0)*l.quantity,0);
    el('cartSubtotal').textContent=format(sum,state.products[0]?.currency||'CAD');
    const canCheckout=state.live&&state.cart.length>0&&state.cart.every(l=>findProduct(l.productId)?.variantId);
    el('checkoutButton').disabled=!canCheckout;
    el('checkoutNotice').textContent=state.live ?
      'You will be redirected to Shopify secure checkout. Shipping, taxes and final prices are confirmed there.' :
      'Design preview only. Checkout will become available after real products and Shopify storefront access are connected.';
  }

  async function checkout(){
    if(!state.live||!state.cart.length)return;
    const button=el('checkoutButton');button.disabled=true;button.textContent='Preparing your checkout…';
    try{
      const lines=state.cart.map(line=>{
        const attributes=[];
        if(line.message)attributes.push({key:'Gift message',value:line.message});
        if(line.wrap)attributes.push({key:'Preferred gift wrap (request)',value:line.wrap});
        return {merchandiseId:findProduct(line.productId).variantId,quantity:line.quantity,attributes};
      });
      const data=await storefront(`mutation HeartistryCartCreate($input: CartInput!) {
        cartCreate(input:$input) { cart { id checkoutUrl } userErrors { field message } }
      }`,{input:{lines}});
      const errors=data?.cartCreate?.userErrors||[];
      if(errors.length)throw new Error(errors.map(e=>e.message).join('; '));
      const url=data?.cartCreate?.cart?.checkoutUrl;
      if(!url||!url.startsWith('https://'))throw new Error('Shopify checkout URL missing');
      // Only redirect to Shopify's own checkout.
      const host=new URL(url).hostname;
      if(!host.endsWith('.myshopify.com')&&!host.endsWith('.shopify.com')&&host!==SHOP_CONFIG.domain.replace(/^https?:\/\//,'').replace(/\/$/,'')){
        throw new Error('Unrecognized checkout destination');
      }
      window.location.assign(url);
    }catch(err){
      console.error('[Heartistry] Checkout failed:',err.message);
      toast('Could not open checkout. Please try again.');
      button.textContent='Continue to secure checkout ↗';
      renderCart();
    }
  }

  function openOverlay(modal){
    if(state.modal)closeOverlay();
    state.lastFocused=document.activeElement;
    state.modal=modal;
    el('overlay').hidden=false;
    document.body.style.overflow='hidden';
    if(modal==='cart'){
      el('cartDrawer').classList.add('open');el('cartDrawer').setAttribute('aria-hidden','false');
      el('cartDrawer').querySelector('.close-button').focus();
    }else{
      el('quizModal').classList.add('open');el('quizModal').setAttribute('aria-hidden','false');
      el('quizModal').querySelector('.close-button').focus();
    }
  }
  function closeOverlay(){
    el('overlay').hidden=true;document.body.style.overflow='';
    el('cartDrawer').classList.remove('open');el('cartDrawer').setAttribute('aria-hidden','true');
    el('quizModal').classList.remove('open');el('quizModal').setAttribute('aria-hidden','true');
    state.modal=null;
    if(state.lastFocused?.isConnected)state.lastFocused.focus();
  }
  function openDrawer(){openOverlay('cart');}
  function openFinder(){state.quizIndex=0;state.quizAnswers=[];renderQuiz();openOverlay('quiz');}
  const questions=[
    {question:'Who are we celebrating?',choices:[['My other half','partner'],['A brand-new love','new'],['My favourite person','friend']]},
    {question:'Which feeling fits them best?',choices:[['Dreamy & romantic','roses'],['Timeless & elegant','jewelry'],['Cozy & thoughtful','sets'],['One of a kind','personal']]},
    {question:'What is your gift budget?',choices:[['Under $60','60'],['$60–$100','100'],['Anything for them','any']]}
  ];
  function renderQuiz(){
    const box=el('quizAnswers');box.replaceChildren();
    el('quizBack').hidden=state.quizIndex===0;
    if(state.quizIndex>=questions.length){
      el('quizProgress').textContent='YOUR LOVE MATCH';
      el('quizQuestion').textContent='This one feels like them. ♡';
      const category=state.quizAnswers[1]||'roses';
      const max=state.quizAnswers[2]==='any'?Infinity:Number(state.quizAnswers[2]||100);
      const p=state.products.find(p=>p.category===category&&p.price<=max)||state.products.find(p=>p.price<=max)||state.products[0];
      if(p){
        const content=document.createElement('div');content.className='quiz-result';
        content.innerHTML=`<img loading="lazy" src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}" style="width:100%;height:150px;object-fit:cover;margin-bottom:16px"/><h3 style="margin:0 0 10px;font:25px var(--serif)">${escapeHTML(p.title)}</h3><p style="font-size:12px;line-height:1.7;color:#78676a">A thoughtful place to begin. ${state.live?'Available in our collection.':'Illustrative product; real gifts are being curated.'}</p>`;
        const button=document.createElement('button');button.className='button button-dark';button.textContent='Explore this gift ↗';
        button.addEventListener('click',()=>{closeOverlay();state.filter=p.category;state.showAll=true;renderProducts();document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x.dataset.filter===state.filter);x.setAttribute('aria-selected',String(x.dataset.filter===state.filter));});el('collections').scrollIntoView({behavior:'smooth'});});
        content.append(button);box.append(content);
      }
      return;
    }
    const current=questions[state.quizIndex];
    el('quizProgress').textContent=String(state.quizIndex+1).padStart(2,'0')+' / 03';
    el('quizQuestion').textContent=current.question;
    current.choices.forEach(([title,value])=>{
      const button=document.createElement('button');button.innerHTML=escapeHTML(title)+' <span>↗</span>';
      button.addEventListener('click',()=>{state.quizAnswers[state.quizIndex]=value;state.quizIndex++;renderQuiz();});
      box.append(button);
    });
  }

  function setupGiftInteraction(){
    const stage=el('giftStage'),assembly=el('giftAssembly');
    let startX=0,startY=0,yaw=-29,pitch=-18;
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    stage.addEventListener('pointerdown',event=>{
      if(motion)return;
      if(event.button!==0 && event.pointerType!=='touch')return;
      state.dragging=true;state.moved=false;startX=event.clientX;startY=event.clientY;
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener('pointermove',event=>{
      if(!state.dragging||motion)return;
      const dx=event.clientX-startX,dy=event.clientY-startY;
      if(Math.abs(dx)+Math.abs(dy)>6)state.moved=true;
      if(!state.moved)return;
      yaw=Math.max(-80,Math.min(80,yaw+dx*.3));
      pitch=Math.max(-48,Math.min(8,pitch-dy*.2));
      startX=event.clientX;startY=event.clientY;
      assembly.style.setProperty('--tilt-x',pitch+'deg');
      assembly.style.setProperty('--tilt-y',yaw+'deg');
    });
    stage.addEventListener('pointerup',()=>{state.dragging=false;});
    stage.addEventListener('pointercancel',()=>{state.dragging=false;});
    const toggle=()=>{
      if(state.moved){state.moved=false;return;}
      const opened=stage.classList.toggle('is-open');
      stage.setAttribute('aria-pressed',String(opened));
      el('stageCaption').innerHTML=opened?'THE LITTLE REVEAL <span class="caption-divider">/</span> TAP TO CLOSE':'<span class="drag-symbol">↗</span> INTERACT WITH THE GIFT <span class="caption-divider">/</span> DRAG TO TURN · TAP TO OPEN';
    };
    stage.addEventListener('click',toggle);
    stage.addEventListener('keydown',event=>{
      if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();}
      if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
        event.preventDefault();yaw+=event.key==='ArrowRight'?12:-12;
        assembly.style.setProperty('--tilt-y',yaw+'deg');
      }
    });
  }
  function setupReveals(){
    const targets=document.querySelectorAll('.section-heading,.product-card,.story-copy,.atelier-heading,.atelier-display,.atelier-form,.closing-section');
    if(!('IntersectionObserver'in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}
    }),{threshold:.09,rootMargin:'0px 0px -30px 0px'});
    targets.forEach(target=>{target.classList.add('reveal');observer.observe(target);});
  }
  function bind(){
    el('year').textContent=new Date().getFullYear();
    document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
      state.filter=btn.dataset.filter;state.showAll=false;
      document.querySelectorAll('[data-filter]').forEach(b=>{const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));});
      renderProducts();
    }));
    el('viewAll').addEventListener('click',()=>{state.showAll=!state.showAll;renderProducts();});
    el('productGrid').addEventListener('click',event=>{const btn=event.target.closest('[data-add]');if(btn)addItem(btn.dataset.add);});
    el('openCart').addEventListener('click',openDrawer);
    ['openQuiz','heroQuiz','collectionQuiz','footerFinder','mobileGiftFinder'].forEach(id=>el(id).addEventListener('click',()=>{el('mobileMenu').hidden=true;openFinder();}));
    el('checkoutButton').addEventListener('click',checkout);
    el('overlay').addEventListener('click',closeOverlay);
    document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeOverlay));
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&state.modal){event.preventDefault();closeOverlay();}
      if(event.key==='Tab'&&state.modal){
        const active=state.modal==='cart'?el('cartDrawer'):el('quizModal');
        const focusable=[...active.querySelectorAll('button:not([disabled]),[href],select,textarea,[tabindex]:not([tabindex="-1"])')].filter(e=>e.offsetParent!==null);
        if(!focusable.length)return;
        if(event.shiftKey&&document.activeElement===focusable[0]){event.preventDefault();focusable[focusable.length-1].focus();}
        else if(!event.shiftKey&&document.activeElement===focusable[focusable.length-1]){event.preventDefault();focusable[0].focus();}
      }
    });
    el('quizBack').addEventListener('click',()=>{state.quizIndex=Math.max(0,state.quizIndex-1);renderQuiz();});
    const menu=el('mobileMenu');
    el('mobileMenuToggle').addEventListener('click',()=>{menu.hidden=!menu.hidden;el('mobileMenuToggle').setAttribute('aria-expanded',String(!menu.hidden));});
    menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.hidden=true;el('mobileMenuToggle').setAttribute('aria-expanded','false');}));
    el('giftMessage').addEventListener('input',()=>{
      const value=el('giftMessage').value;
      el('charCount').textContent=value.length+' / 180';
      el('previewNote').textContent=value.trim()||'You make every day feel like a love story.';
    });
    document.querySelectorAll('[data-wrap]').forEach(btn=>btn.addEventListener('click',()=>{
      state.chosenWrap=btn.dataset.wrap;
      document.querySelectorAll('[data-wrap]').forEach(chip=>chip.classList.toggle('chosen',chip===btn));
      el('atelierDisplay').style.background=state.chosenWrap==='Blush & cream'?'radial-gradient(circle at 55% 40%,#f8f2ef,#efb8c1 125%)':'';
    }));
    el('addCustomGift').addEventListener('click',()=>addItem(el('builderProduct').value,{
      message:el('giftMessage').value.trim(),wrap:state.chosenWrap
    }));
    setupGiftInteraction();
    loadCatalog().then(setupReveals);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
