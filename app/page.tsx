import { LeadForm } from '../components/LeadForm';

const services = [
  {
    name: 'Interlock installation',
    description: 'Custom stonework for refined, durable outdoor surfaces that elevate curb appeal.',
  },
  {
    name: 'Interlock repair',
    description: 'Fix uneven, damaged, or aging pavers and restore a clean, level finish.',
  },
  {
    name: 'Backyard patios',
    description: 'Build welcoming outdoor living spaces with premium materials and crisp layout.',
  },
  {
    name: 'Driveways',
    description: 'Create a polished first impression with strong, functional driveway designs.',
  },
  {
    name: 'Walkways',
    description: 'Guide movement across your property with practical paths and elegant lines.',
  },
  {
    name: 'Retaining walls',
    description: 'Add structure, visual depth, and support with carefully built retaining walls.',
  },
  {
    name: 'Sod installation',
    description: 'Finish the landscape with healthy, clean, and vibrant lawn coverage.',
  },
  {
    name: 'Landscape design',
    description: 'Plan a cohesive outdoor transformation shaped around your property goals.',
  },
];

const gallery = [
  {
    title: 'Patio transformation',
    tag: 'Backyard patio • Mississauga',
    tone: 'from-stone-200 via-warmWhite to-emerald-100',
  },
  {
    title: 'Driveway upgrade',
    tag: 'Interlock driveway • Oakville',
    tone: 'from-slate-200 via-white to-sand/50',
  },
  {
    title: 'Walkway refresh',
    tag: 'Front walkway • Brampton',
    tone: 'from-emerald-100 via-white to-stone-200',
  },
  {
    title: 'Retaining wall detail',
    tag: 'Hardscaping • Toronto',
    tone: 'from-slate-200 via-warmWhite to-stone-100',
  },
];

const whyChoose = [
  'Local expertise across Mississauga and surrounding GTA communities',
  'Premium workmanship with attention to detail',
  'Experience in both installation and repair',
  'Full-service capability for hardscaping and landscaping projects',
  'Personalized recommendations based on your property and project goals',
  'A smooth, organized estimate and planning process',
];

const process = [
  {
    step: '01',
    title: 'Request an estimate',
    text: 'Share a few details about your project using the form or by phone.',
  },
  {
    step: '02',
    title: 'Site review and consultation',
    text: 'We assess your property, discuss your goals, and review the best options.',
  },
  {
    step: '03',
    title: 'Customized recommendation',
    text: 'You receive a clear recommendation tailored to materials, access, and scope.',
  },
  {
    step: '04',
    title: 'Professional installation',
    text: 'Our team completes the work with care, efficiency, and respect for your property.',
  },
  {
    step: '05',
    title: 'Final walkthrough',
    text: 'We review the finished project with you to ensure everything meets the standard.',
  },
];

const serviceAreas = ['Mississauga', 'Oakville', 'Brampton', 'Etobicoke', 'Toronto'];

const faqs = [
  {
    q: 'How do estimates work?',
    a: 'Estimates are based on project size, material choice, site conditions, access, and timeline. We provide recommendations after reviewing the details of your project.',
  },
  {
    q: 'Do you work on both new installations and repairs?',
    a: 'Yes. We handle new interlock and landscaping projects as well as repair work for damaged, uneven, or aging surfaces.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Mississauga, Oakville, Brampton, Etobicoke, and Toronto.',
  },
  {
    q: 'Can you help with both design and installation?',
    a: 'Yes. We offer landscape design support along with installation services so your outdoor space feels cohesive and well planned.',
  },
  {
    q: 'How long does a project take?',
    a: 'Project timelines vary depending on scope, materials, site conditions, and weather. We review expectations during the consultation stage.',
  },
  {
    q: 'What types of projects do you take on?',
    a: 'We handle patios, driveways, walkways, retaining walls, sod installation, interlock repair, and complete landscape improvements.',
  },
];

export default function Page() {
  return (
    <div className="min-h-screen text-charcoal">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(247,245,240,0.88)] backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-sm font-bold text-white shadow-premium">
              A
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-accentGreen">Apex</div>
              <div className="text-sm font-medium text-slate-600">Interlock & Landscaping</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <a href="#services" className="transition hover:text-charcoal">Services</a>
            <a href="#gallery" className="transition hover:text-charcoal">Gallery</a>
            <a href="#why" className="transition hover:text-charcoal">Why us</a>
            <a href="#process" className="transition hover:text-charcoal">Process</a>
            <a href="#areas" className="transition hover:text-charcoal">Areas</a>
            <a href="#faq" className="transition hover:text-charcoal">FAQ</a>
            <a href="#contact" className="transition hover:text-charcoal">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:000-000-0000" className="text-sm font-semibold text-charcoal transition hover:text-accentGreen">
              000-000-0000
            </a>
            <a href="#contact" className="btn-primary px-5 py-2.5">Request Estimate</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-grid bg-[size:18px_18px] opacity-20" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/15 to-transparent" />
          <div className="section-shell relative grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div>
              <p className="eyebrow">Premium local contractor • Mississauga + GTA</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                Premium Interlock and Landscaping in Mississauga and the GTA
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Transform your outdoor space with custom interlock, landscaping, and hardscaping solutions designed to elevate curb appeal, improve functionality, and add lasting value to your home. Serving Mississauga, Oakville, Brampton, Etobicoke, and Toronto.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary">Request a Free Estimate</a>
                <a href="tel:000-000-0000" className="btn-secondary">Call Now</a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="stat-chip">
                  <div className="text-sm font-semibold text-charcoal">Free estimate</div>
                  <div className="mt-1 text-sm text-slate-500">Low-pressure consultation</div>
                </div>
                <div className="stat-chip">
                  <div className="text-sm font-semibold text-charcoal">Installation + repair</div>
                  <div className="mt-1 text-sm text-slate-500">Complete outdoor solutions</div>
                </div>
                <div className="stat-chip">
                  <div className="text-sm font-semibold text-charcoal">GTA service area</div>
                  <div className="mt-1 text-sm text-slate-500">Five key local markets</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-8 hidden h-28 w-28 rounded-full bg-accentGreen/10 blur-3xl lg:block" />
              <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-full bg-gold/15 blur-3xl lg:block" />
              <div className="card overflow-hidden border border-black/5 bg-white p-4 shadow-premium sm:p-5">
                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-gradient-to-br from-slateDeep via-charcoal to-accentGreen p-5 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                          Real project results
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal">Before / After</span>
                      </div>
                      <div>
                        <p className="max-w-xs text-sm leading-6 text-white/85">
                          Premium stonework, precise lines, and clean finishes that make the property feel finished and intentional.
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                            <div className="text-white/70">Most requested</div>
                            <div className="mt-1 font-semibold">Patios + driveways</div>
                          </div>
                          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
                            <div className="text-white/70">Trust focus</div>
                            <div className="mt-1 font-semibold">Quality + communication</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[28px] border border-black/5 bg-softGray p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentGreen">Service snapshot</p>
                      <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-accentGreen" />Interlock installation and repair</li>
                        <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />Backyard patios and driveways</li>
                        <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-slateDeep" />Walkways, retaining walls, and sod</li>
                      </ul>
                    </div>
                    <div className="rounded-[28px] bg-warmWhite p-5 ring-1 ring-black/5">
                      <p className="text-sm font-semibold text-charcoal">What homeowners want to know</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Estimates are tailored to your property, materials, access, and timeline — never one-size-fits-all pricing.
                      </p>
                    </div>
                    <div className="rounded-[28px] border border-black/5 bg-white p-5">
                      <p className="text-sm font-semibold text-charcoal">Service area coverage</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {serviceAreas.map((area) => (
                          <span key={area} className="rounded-full bg-softGray px-3 py-1 text-xs font-semibold text-slate-600">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-white/70 py-10">
          <div className="section-shell">
            <div className="grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
              <div>Premium workmanship with a refined finish</div>
              <div>Local contractor serving five GTA communities</div>
              <div>Installation, repair, landscaping, and hardscaping</div>
              <div>Simple estimate process with clear communication</div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 lg:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="section-heading mt-4">Outdoor solutions tailored to your property, goals, and site conditions.</h2>
              <p className="section-copy">
                Apex Interlock & Landscaping delivers premium outdoor solutions tailored to your property, your goals, and your site conditions. From new interlock installations to repair work and full landscape upgrades, we handle projects with care, precision, and a clean finish.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article key={service.name} className="card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-premium">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-softGray text-accentGreen">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 12h16M12 4v16M7 7l10 10M17 7 7 17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 card grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-8">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-charcoal">Built for durability, style, and long-term performance.</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  Whether you are planning a complete backyard transformation or need targeted improvements to refresh your front entrance or exterior hardscaping, we provide solutions built for durability, style, and long-term performance.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a href="#gallery" className="btn-secondary">View Our Work</a>
                <a href="#contact" className="btn-primary">Get a Quote</a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-softGray/70 py-20 lg:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Gallery placeholder</p>
              <h2 className="section-heading mt-4">Visual proof belongs near the top.</h2>
              <p className="section-copy">
                Real project photography should do the heavy lifting here. This section is structured as a premium gallery placeholder with before-and-after style cards, project labels, and location tags.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {gallery.map((item, index) => (
                <article key={item.title} className="card overflow-hidden p-3">
                  <div className={`flex min-h-[300px] flex-col justify-between rounded-[24px] bg-gradient-to-br ${item.tone} p-5`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                        {index % 2 === 0 ? 'Before / After' : 'Finished project'}
                      </span>
                      <span className="rounded-full border border-charcoal/10 bg-white/75 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
                        Placeholder
                      </span>
                    </div>
                    <div className="rounded-3xl border border-white/40 bg-white/75 p-4 backdrop-blur">
                      <p className="text-lg font-semibold text-charcoal">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.tag}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="py-20 lg:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="card p-8">
              <p className="eyebrow">Why choose us</p>
              <h2 className="section-heading mt-4">A professional experience from the first conversation to the final walkthrough.</h2>
              <p className="section-copy">
                Homeowners choose Apex Interlock & Landscaping for a professional experience from the first conversation to the final walkthrough. We focus on high-quality workmanship, clear communication, and results that look refined and perform well over time.
              </p>
              <div className="mt-8 rounded-3xl bg-softGray p-5">
                <p className="text-sm font-semibold text-charcoal">What sets us apart</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {whyChoose.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-accentGreen" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="card p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accentGreen">Premium presentation</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Clean spacing, strong contrast, and subtle material-inspired accents create a trustworthy brand feel.
                </p>
              </div>
              <div className="card p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accentGreen">Local relevance</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The site makes it easy for GTA homeowners to quickly confirm service areas and request an estimate.
                </p>
              </div>
              <div className="card p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accentGreen">Installation + repair</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The brand is positioned as a full-service contractor, not a one-trick service provider.
                </p>
              </div>
              <div className="card p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accentGreen">Consultative process</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Every estimate is shaped around the property instead of vague, one-size-fits-all pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-white/70 py-20 lg:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Process</p>
              <h2 className="section-heading mt-4">A straightforward estimate and project workflow.</h2>
              <p className="section-copy">
                Our estimate and project process is designed to be straightforward and stress-free.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-4">
                {process.map((item) => (
                  <article key={item.step} className="card flex gap-5 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-charcoal text-sm font-bold text-white shadow-premium">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-charcoal">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="card h-fit p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accentGreen">What to expect</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">Clear expectations, clean execution, and a final walkthrough.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Homeowners should feel informed at every stage, from the first conversation to completion. We review layout, materials, and scope before work begins so the project can move forward with confidence.
                </p>
                <div className="mt-6 rounded-3xl bg-softGray p-5">
                  <div className="text-sm font-semibold text-charcoal">Great for homeowners who want:</div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>• A polished outdoor upgrade</li>
                    <li>• A contractor who communicates clearly</li>
                    <li>• A premium result with practical durability</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="areas" className="py-20 lg:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Service areas</p>
              <h2 className="section-heading mt-4">Serving Mississauga, Oakville, Brampton, Etobicoke, and Toronto.</h2>
              <p className="section-copy">
                We work across high-intent GTA neighborhoods and keep the messaging local, clear, and easy to trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-charcoal shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="card overflow-hidden p-6 sm:p-8">
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[28px] bg-gradient-to-br from-charcoal via-slateDeep to-accentGreen p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Local coverage</p>
                  <p className="mt-4 text-2xl font-semibold tracking-tight">Outdoor projects across the GTA</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    The local footprint supports homeowners looking for premium interlock and landscaping work with a contractor that understands the area.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    'Mississauga interlock contractor',
                    'Oakville patio and driveway work',
                    'Brampton landscaping company',
                    'Etobicoke walkway and repair projects',
                    'Toronto backyard transformations',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-softGray px-4 py-3 text-sm font-medium text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-softGray/70 py-20 lg:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Reviews and reassurance</p>
              <h2 className="section-heading mt-4">Trust elements should be visible throughout the page.</h2>
              <p className="section-copy">
                The site uses premium presentation, direct contact information, service-area clarity, and a transparent estimate process to build confidence.
              </p>
              <div className="mt-8 card p-6">
                <p className="text-sm font-semibold text-charcoal">Service mix</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Installation, repair, patios, driveways, walkways, retaining walls, sod, and design support — all presented as a cohesive offering.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  name: 'Premium results',
                  quote: 'A refined finish with precise lines and clean execution.',
                },
                {
                  name: 'Clear communication',
                  quote: 'The estimate process is simple and easy to understand.',
                },
                {
                  name: 'Local credibility',
                  quote: 'Made for homeowners in Mississauga and the surrounding GTA.',
                },
                {
                  name: 'Reliable process',
                  quote: 'Consultation, recommendation, installation, walkthrough.',
                },
              ].map((item) => (
                <article key={item.name} className="card p-6">
                  <div className="flex items-center gap-2 text-gold">
                    {'★★★★★'.split('').map((star, idx) => (
                      <span key={idx}>{star}</span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-charcoal">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 lg:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="section-heading mt-4">Common questions from homeowners.</h2>
              <p className="section-copy">
                These answers help reduce friction and reinforce the estimate-first positioning.
              </p>

              <div className="mt-10 space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.q} className="card group p-6 open:shadow-premium">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold tracking-tight text-charcoal">
                      <span>{faq.q}</span>
                      <span className="rounded-full bg-softGray px-3 py-1 text-sm font-medium text-slate-600 group-open:bg-accentGreen group-open:text-white">+</span>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <aside className="card p-8">
              <p className="eyebrow">Need help fast?</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">Ask about your project, service area, or estimate process.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A floating AI receptionist can handle quick questions, then guide visitors toward the lead form or a direct call.
              </p>
              <div className="mt-6 rounded-3xl bg-softGray p-5 text-sm text-slate-600">
                This is presented as a placeholder button on the site so visitors understand the support option without distracting from the main CTA.
              </div>
            </aside>
          </div>
        </section>

        <section id="contact" className="bg-charcoal py-20 text-white lg:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow border-white/15 bg-white/10 text-white">Final CTA</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Ready to upgrade your outdoor space?</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/78">
                Contact Apex Interlock & Landscaping to request your free estimate and start planning a polished, high-quality project for your home.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/80">
                <p><span className="font-semibold text-white">Phone:</span> 000-000-0000</p>
                <p><span className="font-semibold text-white">Email:</span> info@example.com</p>
                <p><span className="font-semibold text-white">Service Areas:</span> Mississauga, Oakville, Brampton, Etobicoke, Toronto</p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">Estimate notes</p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Pricing depends on project size, material choice, site conditions, access, and timeline. The estimate process is built to be clear, simple, and professional.
                </p>
              </div>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/70 py-10">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto_auto] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-accentGreen">Apex Interlock & Landscaping</div>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              Premium interlock and landscaping contractor serving Mississauga, Oakville, Brampton, Etobicoke, and Toronto.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-charcoal">Contact</div>
            <div className="mt-2">000-000-0000</div>
            <div>info@example.com</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-charcoal">Quick links</div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        <button
          type="button"
          className="flex items-center gap-3 rounded-full border border-charcoal/10 bg-white px-4 py-3 shadow-premium transition hover:-translate-y-0.5 hover:bg-warmWhite"
          aria-label="Open AI receptionist"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-white">
            <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white" />
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M8 10h8M8 14h5M12 4a8 8 0 1 0 8 8c0-.5 0-1-.1-1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="pr-1 text-left">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accentGreen">AI receptionist</span>
            <span className="block text-sm font-semibold text-charcoal">Ask about your project</span>
          </span>
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-[rgba(247,245,240,0.92)] px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a href="tel:000-000-0000" className="btn-secondary flex-1 py-3 text-center">Call Now</a>
          <a href="#contact" className="btn-primary flex-1 py-3 text-center">Request Estimate</a>
        </div>
      </div>
    </div>
  );
}
