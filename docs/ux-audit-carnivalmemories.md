# UX Audit: carnivalmemories.com
**Reviewed:** March 25, 2026
**Scope:** Full calendar purchase flow — Marketplace → Config → Editor → Review → Cart → Checkout → Confirmation → Order History

---

## Bugs (fix before launch)

| # | Screen | Issue |
|---|--------|-------|
| 1 | Marketplace grid | Double Carnival logo — one in global nav, one rendered again inside the marketplace page header |
| 2 | Calendar config (PDP) | Product description text is left-aligned under the preview image while all other content lives in the right panel — broken layout |
| 3 | Editor | Month thumbnails in the bottom strip are slow to load — all appear as grey placeholders on entry |
| 12 | Review | Layout shift when switching to cover via dropdown — cover renders at a larger size than month pages, causing the container to reflow and CTAs to jump |
| 13 | Review | Two stacked titles: "Please review your item" + "Item Preview" — redundant. Title also uses wrong font treatment (body weight, not the bold/uppercase heading style used everywhere else) |
| 17 | Confirmation | Total shown is $23.48 but cart displayed $14.99 — shipping ($8.49) not revealed until after order is placed |
| 18 | Order Details | Page title is the order date ("March 25, 2026") — should be "Order Details" or "Order #[number]" |

---

## UX Enhancements (prioritized)

| # | Screen | Issue |
|---|--------|-------|
| 6 | Editor | Cover page is not editable — guests will naturally expect to personalize it with their own photo |
| 8 | Editor | Editing is triggered by clicking the calendar grid, not the photo zone above it — counterintuitive. Guests will click the photo area first |
| 9 | Editor | "Crop" label undersells the affordance — doesn't communicate move/zoom/reposition. Something like "Edit photo" would be clearer |
| 7 | Editor | Uploaded photo appears in right panel with no container, label, or selection affordance — bare thumbnail floating below upload CTA with no clear indication it's selectable |
| 4 | Editor | Upload copy says "suggest doing about 300 at a time" — wrong context for a single-photo product slot |
| 5 | Editor | No connection between Memories photo library and the editor — guests who've uploaded cruise photos elsewhere have to re-upload |
| 11 | Review | Month navigation uses a dropdown — too much effort to browse 12 months. Should be a thumbnail strip (already exists in editor) or prev/next arrows |
| 14 | Cart | No edit affordance on cart line items — "Make Some Changes" only exists on the review screen, not in the cart |
| 15 | Cart / throughout | "January Starting Month Calendar" is the auto-generated product name — not compelling or brand-consistent. Should be "Carnival Memories Wall Calendar" |
| 16 | Checkout | Shipping section copy says "Free shipping to US, Canada, and Puerto Rico for books" — needs updating for marketplace products |
| 19 | Order History | List view severely underdone — no product name, placeholder cover image (not guest's personalized version), no reorder CTA, no upsell, unclear that rows are tappable |
| 10 | Checkout | Customer first/last name not pre-filled despite being stored in account |

---

## Open Questions Answered by This Review

| Question | Answer |
|----------|--------|
| Does an order history view exist? | Yes — `/order-history`, accessible from Account and Settings |
| Does a saved items view exist? | Yes — My Projects (`/book/[id]/my-projects`) serves this function |
| Is the personalization editor shared across products? | Appears to be — same editor URL pattern (`/editor/edit/marketplace/`) |
| Can guests edit a submitted order? | No — Order History has no edit affordance. Edit is only available via My Projects before checkout |

---

## Screen Catalog

| Screen | URL | Status |
|--------|-----|--------|
| Splash | `/home` | Live |
| Sign Up | `/sign-up` | Live |
| Log In | `/sign-up` (LOG IN link) | Live |
| Cruise Selection | `/book-setup` | Live — hard gate, all routes redirect here |
| Homepage | `/book/[id]` | Live — single hero, photobook only |
| Photobook / Product Selection | `/book/[id]/builder/create/size` | Live |
| My Projects | `/book/[id]/my-projects` | Live |
| Memories / Photo Upload | `/book/[id]/photos` | Live |
| Marketplace | `/personal/marketplace` | Live — 1 product (Calendar) |
| Calendar Config / PDP | `/personal/marketplace/product-template/template/[id]/[id]` | Live |
| Editor | `/editor/edit/marketplace/[id]/[page]` | Live |
| Review | `/editor/edit/marketplace/[id]/[page]` | Live |
| Cart | `/cart` | Live |
| Checkout | `/checkout` | Live |
| Order Confirmation | Modal over `/book/[id]` | Live |
| Order Details | `/order-history/[id]` | Live |
| Order History | `/order-history` | Live |
| Account and Settings | `/account-settings` | Live |
