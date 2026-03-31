# Product Requirements: Travel Marketplace


## Problem & Objective

### Problem
The carnivalmemories.com marketplace is leaving revenue on the table in two ways:

1. **Missing product categories** — the marketplace doesn't include travel-related physical goods (luggage tags, passport holders, keepsakes, etc.) that are a natural fit for cruise guests
2. **Missing touch points** — pre-cruise and post-cruise emails are not being used to drive guests to the marketplace, despite those being the moments when guests are most likely to purchase

### Objective
Launch a curated, branded marketplace of personalized travel products and activate pre-cruise and post-cruise email campaigns to drive purchases at the right moment in the guest journey. The result is a new ancillary revenue stream with low inventory risk and high emotional value.

---

## Background

The carnivalmemories.com platform currently supports photo book creation, calendar creation, and a basic marketplace. Guests enter the product through several distinct use cases (see UC Reference) depending on what they've purchased and where they are in their cruise journey.

This project expands the marketplace with travel products and keepsakes, personalizes what guests see based on their journey state (pre, in, or post-cruise), and introduces email-driven entry points to reach guests at peak purchase intent.

---

## User Stories

### Pre-cruise guest
- As a pre-cruise guest, I want to browse and purchase travel accessories personalized with my name or cruise details so I can feel prepared and excited for my trip
- As a pre-cruise guest, I want to receive an email before my cruise that surfaces relevant products so I don't have to seek them out on my own
- As a pre-cruise guest, I only want to see products relevant to travel prep — I don't want to be shown post-cruise keepsakes before I've even sailed

### Post-cruise guest
- As a post-cruise guest, I want to browse and purchase personalized keepsakes and memory products so I can relive and share my trip
- As a post-cruise guest, I want to receive an email after my cruise that surfaces relevant products while my memories are fresh
- As a post-cruise guest, I want to see both memory products (canvas, blankets, prints) and travel accessories I may want for my next trip

### Guest with entitlement
- As a guest who received a free compact book or calendar with my package, I want to see that entitlement clearly surfaced on the homepage so I know to use it
- As an entitled guest, I still want to be able to browse and purchase marketplace items alongside my entitled product

### Any guest
- As a guest, I want to personalize marketplace products with my name, photos, or cruise details before purchasing
- As a guest, I want to be able to edit a personalized product in my cart before checking out
- As a guest, I want to be able to return to and edit a previously saved or ordered product

---

## Functional Requirements

### 1. Journey state detection
- The app must determine a guest's journey state: pre-cruise, in-cruise, or post-cruise
- Journey state must drive which marketplace products are displayed
- A guest cannot see post-cruise products in a pre-cruise state and vice versa
- In-cruise state shows only in-cruise services and MP goods (no pre or post items)

### 2. Homepage
- Homepage must surface applicable entitlements (compact book, calendar) when a guest is eligible
- Homepage must adapt its featured products and imagery based on journey state
- If a guest has no entitlements and no journey state, a default state must be designed
- Homepage must support combined states (e.g. pre-cruise + compact book entitlement)

### 3. Marketplace — product catalog
- Pre-cruise catalog must include: leather luggage tag, leather passport holder, engraved toiletry bag, soft leather journal, softstyle t-shirt
- Post-cruise catalog must include all pre-cruise items plus: wall calendar, desk calendar, wall tiles, canvas print, photo prints, fleece blanket, woven blanket, personalized mug, travel tumbler, 30oz insulated tumbler
- In-cruise catalog: TBD — confirm scope with team
- Each product must display: product image, name, retail price, personalization entry point
- Empty state must be designed for cases where no products are available

### 4. Product personalization (pre-purchase)
- Text/monogram products (luggage tag, passport holder, toiletry bag, journal): guest must be able to input name or monogram and preview before adding to cart
- Graphic/text products (t-shirt): guest must be able to customize graphic or text
- Photo-based products (canvas print, wall tiles, blankets): guest must be able to select and crop a photo
- Photo + text products (mug, tumblers): guest must be able to combine photo and text
- Photo + layout products (calendar, photo prints): guest must be able to select photos and choose layout
- All personalization flows must include: entry from PDP → editor → preview → add to cart confirmation

### 5. Cart editing
- Guest must be able to edit any personalized item already in their cart
- Editor must re-open with the guest's previously saved state (not blank)
- Cart must update and confirm changes after editing

### 6. Order / saved product editing
- Guest must be able to return to a previously saved or ordered product and edit it
- Requires an order history or saved items view — confirm with ENG whether this exists or needs to be built
- Editor must re-open with previously saved state
- Guest must be able to reorder or update after editing

### 7. Splash screen
- Splash must be consistent across all UC entry points (direct URL, email link, code redemption)
- Copy and messaging must be tailored to entry point where relevant (e.g. pre-cruise email vs. post-cruise email)
- Existing splash screens (UC1–UC4) must not break

### 8. Email entry points
- Pre-cruise email must link to the marketplace with journey state set to pre-cruise
- Post-cruise email must link to the marketplace with journey state set to post-cruise
- Email design is out of scope for this project — marketing strategy only

### 9. Existing flows (must not break)
- UC1: Standard code purchase flow
- UC2: Free compact book gifted via photo package
- UC3: Free calendar gifted via photo package
- UC4: Pixel — pro photos auto-ingested (not yet launched, but must be accounted for)

---

## Out of Scope

- UC5: Upgrade flows
- UC6: Dream Studio
- UC10: Entitlement (automated pre-purchase)
- UC11: Auto-generated spreads
- UC12: Multiple books / My Projects
- UC13: Collage (code complete, never released)
- Email template design
- Reporting / analytics dashboard
- Yearbook peak flow
- Admin / ops tooling for managing product catalog

---

## Open Questions & Risks

### Open questions
- [ ] What are the retail prices for desk calendar, woven blanket, travel tumbler, and 30oz tumbler?
- [ ] What is the in-cruise (UC8) product catalog exactly?
- [ ] Is there a spec for the desk calendar product?
- [ ] Which products support text-only personalization vs. photo-based vs. both?
- [ ] What imagery assets are available for the homepage refresh?
- [ ] What is the drop-dead date for final designs to engineering?

### Answered by live site review (March 25, 2026)
- [x] **Does an order history / saved items view currently exist?** — Yes. Order History exists at `/order-history` via Account and Settings. My Projects (`/book/[id]/my-projects`) serves as the saved items view with Edit and Make a Copy affordances.
- [x] **Is the personalization editor a shared component?** — Yes, appears to be shared across product types via `/editor/edit/marketplace/` URL pattern.
- [x] **Can guests edit a submitted order?** — No. Editing is only available via My Projects before checkout. Order History has no edit affordance.

### Risks
- **Scope creep from UC combinations** — journey states combined with entitlements create a large matrix of homepage states; needs to be bounded early
- **Personalization editor complexity** — editor is a shared component but has significant UX issues (see UX Audit) that may require engineering work beyond design: slow thumbnail loading, missing photo library connection, non-editable cover, confusing edit triggers
- **Cruise selection gate** — all routes currently redirect to `/book-setup` until a cruise is selected. Email entry points (UC7, UC9) will need to handle this gate gracefully or bypass it for marketplace-only flows
- **Shipping cost transparency** — current checkout does not show final shipping cost until after order is placed. This needs to be resolved before new products launch
- **Missing product specs** — desk calendar has no spec yet; this blocks design and vendor coordination
- **Cart editing gap** — no edit affordance exists on cart line items; this needs to be designed and built
- **No yearbook peak impact** — assumed isolated to Travel Marketplace, but should be confirmed with engineering
- **Vendor dependency** — Teelaunch and DPI have different product specs and shipping structures; any changes to product line require vendor coordination

---

## Assumptions
- This project has no impact on yearbook peak, as it is isolated to the Travel Marketplace
- Inventory risk is low given print-on-demand model (Teelaunch, DPI)
- Email campaigns are owned by marketing — this project delivers the landing experience only
