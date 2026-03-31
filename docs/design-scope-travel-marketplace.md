# Design Scope: Travel Marketplace

## Overview

This doc defines the design scope for the Travel Marketplace expansion — adding travel products to the existing marketplace and tailoring the experience based on where a guest is in their cruise journey (pre, in, or post). It also covers the existing UC flows that need to be accounted for as the homepage and marketplace get updated.

---

## What's changing

- New travel products added to the marketplace (pre-cruise and post-cruise)
- Homepage refreshed with high-quality imagery
- Marketplace content is personalized based on journey state (pre, in, post)
- Homepage surfaces eligible entitlements (compact book, calendar) when applicable
- New email entry points: pre-cruise and post-cruise touch points driving to the marketplace

---

## Use Cases in Scope

### Currently live — design must not break

| UC | Description | Entry Point | Key Screens |
|----|-------------|-------------|-------------|
| UC1 | Standard — guest purchases a code | carnivalmemories.com | Splash → Account Reg → Book Build → Checkout |
| UC2 | Free compact book — gifted via photo package | Code/package | Splash → Homepage → Product Selection → Book Build → Checkout |
| UC3 | Free calendar — gifted via photo package | Code/package | Splash → Homepage → Calendar Build (modal) → Checkout |
| UC4 | Pixel — pro photos auto-ingested *(not yet launched)* | Camera ingest | Splash → Homepage → Repository → Checkout |

### New flows — primary design focus for this project

| UC | Description | Journey State | Key Screens |
|----|-------------|---------------|-------------|
| UC7 | Pre-cruise — guest focus on MP goods, not books | Pre-cruise | Splash → Account Reg → Homepage → Marketplace → Checkout |
| UC8 | In-cruise — in-cruise services + MP goods (no pre/post MP) | In-cruise | Splash → Account Reg → Homepage → Marketplace → Checkout |
| UC9 | Post-cruise — post-cruise services + MP goods + photobook | Post-cruise | Splash → Account Reg → Homepage → Marketplace → Checkout |

### Future / not in scope for this release

| UC | Description | Status |
|----|-------------|--------|
| UC5 | Upgrade flows | Future |
| UC6 | Dream Studio | Future |
| UC10 | Entitlement (auto pre-purchased book) | Future |
| UC11 | Auto-generated spreads | Future |
| UC12 | Multiple books / My Projects | Future |
| UC13 | Collage (video auto-created) | Code complete, never released |

---

## Marketplace Products by Journey State

### Pre-Cruise
| Product | Vendor | Retail Price |
|---------|--------|--------------|
| Leather luggage tag | Teelaunch | TBD |
| Leather passport holder | Teelaunch | TBD |
| Engraved toiletry bag | Teelaunch | TBD |
| Soft leather journal | Teelaunch | TBD |
| Softstyle t-shirt | DPI | $24.99 |

### Post-Cruise
All pre-cruise items, plus:
| Product | Vendor | Retail Price |
|---------|--------|--------------|
| Wall calendar | DPI | $14.99 |
| Desk calendar | TBD | TBD |
| Wall tiles | DPI | $11.99 |
| Canvas print | DPI | $34.99 |
| Photo prints | DPI | Starting at $4.99 |
| Fleece blanket | DPI | $49.99 |
| Woven blanket | DPI | TBD |
| Personalized mug | DPI | $11.99 |
| Travel tumbler | Teelaunch | TBD |
| 30oz insulated tumbler | DPI | TBD |

---

## Screens to Design

### Homepage
- Default state (no entitlements)
- With compact book entitlement surfaced
- With calendar entitlement surfaced
- Pre-cruise state (travel products promoted)
- Post-cruise state (keepsakes + photobook promoted)

### Marketplace
- Pre-cruise product grid
- In-cruise product grid
- Post-cruise product grid
- Product detail / PDP (if applicable)

### Splash
- Review for consistency across UC entry points (email vs. direct)

### Product Editing Flows *(new — full design needed)*

These flows cover three distinct editing contexts. Each product may have a different editing surface depending on what can be personalized (text, photo, size, etc.).

#### 1. Product personalization (pre-purchase)
Guest customizes a product before adding to cart. Applies to all personalizable items.

| Product | Personalization type |
|---------|----------------------|
| Leather luggage tag | Name / monogram |
| Leather passport holder | Name / monogram |
| Engraved toiletry bag | Name / monogram |
| Soft leather journal | Name / monogram |
| Softstyle t-shirt | Graphic / text |
| Canvas print | Photo selection + crop |
| Wall tiles | Photo selection |
| Personalized mug | Photo / text |
| Travel tumbler | Photo / text |
| 30oz insulated tumbler | Photo / text |
| Fleece / woven blanket | Photo selection |
| Photo prints | Photo selection + size |
| Wall / desk calendar | Photo selection + layout |

Screens needed per product:
- PDP with personalization entry point
- Personalization editor (text input, photo upload/select, preview)
- Confirmation / add to cart state

#### 2. Edit product in cart (pre-checkout)
Guest returns to edit a personalized item already added to cart.

Screens needed:
- Cart view with edit affordance per item
- Re-entry into personalization editor with saved state
- Updated cart confirmation

#### 3. Edit previously ordered / saved product
Guest returns after ordering or saving to modify a product.

Screens needed:
- Order history or saved items view (if this surface exists — confirm with ENG)
- Re-entry into personalization editor
- Reorder / update confirmation state

---

### Existing screens (audit only — flag if changes needed)
- Account Reg
- Product Selection
- Book Build
- Calendar Build modal
- Checkout

---

## Out of Scope (explicitly)
- UC5–UC13 feature design
- Email template design (marketing strategy only, not UI)
- Reporting dashboard
- Yearbook / peak flow

---

## Open Questions
- [ ] What are the retail prices for TBD items (desk calendar, woven blanket, tumblers)?
- [ ] What imagery assets are available for the homepage refresh?
- [ ] Is there a spec for the desk calendar product?
- [ ] Does in-cruise (UC8) show any pre-cruise items or only in-cruise items?
- [ ] What's the drop-dead date for final designs to ENG?
- [ ] Does an order history / saved items view currently exist, or does that need to be designed from scratch?
- [ ] Which products are text-only personalization vs. photo-based vs. both?
- [ ] Is the personalization editor a shared component across products or product-specific?
- [ ] Can guests edit an order after it's been submitted, or is that locked post-checkout?

---

## Notes
- Entitlement display on homepage should be conditional — only show if guest is eligible
- Marketplace items shown must be filtered by journey state — a pre-cruise guest should not see post-cruise keepsakes
- Kim's potential flows (6 scenarios) are largely covered by UC1–UC4 and UC7–UC9, but flow #6 (post-cruise Pixel email → personalized MP + photobook) may need a dedicated design pass
