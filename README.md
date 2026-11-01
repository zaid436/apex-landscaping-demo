# Heartistry — immersive Valentine storefront

A fully custom, responsive Valentine's gifting experience built for **Webflow Cloud** and designed to use **Shopify** for live catalog and checkout.

## Architecture
- Frontend: static HTML/CSS/vanilla JavaScript on Webflow Cloud; no heavyweight animation dependency.
- 3D: CSS perspective gift box with pointer-driven rotation and an opening lid, with keyboard and reduced-motion support.
- Commerce: Shopify Storefront GraphQL API for products and cart checkout redirect.
- No sensitive admin token is needed or ever embedded in the browser. Only a public Storefront API token is used client-side.

## Connect Shopify
1. Create and publish your actual Valentine products in Shopify. The connected store is currently empty, so all concept products shown are deliberately demo-only.
2. Create a **public Storefront API access token** using Shopify's headless storefront setup.
3. Set the storefront credentials in `app.js` at `SHOP_CONFIG` (domain and public Storefront token) or use a Webflow-hosted non-secret config script. Never put Admin API or private access tokens in frontend code.
4. Verify products are published to the appropriate sales channel. When the API returns live products, the storefront automatically switches from examples to real catalog data and unlocks Shopify cart/checkout.
5. Test sample orders on Shopify's test payment gateway before accepting real orders.

## Status
Design/demo browsing, gift finder, gift composer, cart and 3D interactions are functional. Checkout is intentionally disabled until live products and a Storefront API token are connected. Product imagery and names are illustrative only, not sourcing or availability claims. Do not advertise delivery deadlines or prices until verified.

## Deployment
Use Webflow Cloud as a standalone GitHub-backed app mounted at /, linking to this branch. No Webflow Designer site/theme is required.

## Accessibility
Keyboard-controlled gift reveal, dialog escape, focus trap, semantic controls, accessible contrast, reduced motion fallback, mobile layouts.

© Heartistry prototype — 2026.
