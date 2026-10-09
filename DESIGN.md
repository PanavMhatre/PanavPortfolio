# Design System: Panav Portfolio

## Product Context

- **What this is:** A one-page technical resume with direct, recruiter-verifiable project evidence.
- **Who it is for:** Engineering and design-conscious recruiting teams across infrastructure, product, research, and creative technology companies.
- **Memorable idea:** A rigorous systems builder with a personal eye for the natural world.

## Aesthetic Direction

- **Direction:** Clean modern resume with one personal interactive moment.
- **Mood:** Precise, calm, capable, and human.
- **Layout:** Preserve the simple linear resume structure. The hero may widen to place a compact photo rail beside the introduction.
- **Decoration:** Minimal. Use typography, spacing, one cool accent, and personal photography instead of ornamental graphics.

## Typography

- **Primary:** Manrope for all headings, body copy, and interface text.
- **Labels:** IBM Plex Mono for small metadata, dates, and section cues.
- **Rule:** No editorial serif type. Recruiter scan speed takes priority over display styling.

## Color

- **Canvas:** `#0A0B0D`
- **Surface:** `#111419`
- **Primary text:** neutral 100
- **Secondary text:** neutral 400 to 600
- **Accent:** sky `#8BD5FF`
- **Supporting accent:** mint `#9BE7C4`, used sparingly for status details.
- **Rule:** Accent color should stay below roughly 6 percent of any screen.

## Layout and Spacing

- **Resume width:** 768px maximum for experience, projects, skills, and contact.
- **Hero width:** 1024px maximum, split into introduction and a 340px photo rail on desktop.
- **Mobile:** Single-column flow with the photo rail below the introduction.
- **Borders:** Thin and low contrast. Rounded corners are limited to images, controls, tags, and fields.

## Photography

- Use personal nature photographs only.
- Present them directly below the hero intro as a centered row of fixed-width cards (not a full-width stretched grid): w-40 on mobile, sm:w-64, md:w-72, aspect-[9/10], always rounded (rounded-xl, sm:rounded-2xl), alternating ±2° rotation per card for a scattered-photo feel, gap-5 sm:gap-8, no captions or overlays.
- Row is horizontally scrollable (overflow-x-auto, snap-x) on narrow viewports where the fixed-width cards don't all fit; on wider viewports it just sits centered with no scrolling needed.
- Keep crops consistent and preserve natural color.

## Motion

- Use one short page entrance and small hover or carousel movement.
- Respect reduced-motion settings.
- Motion must clarify interaction, never delay access to content.

## Decisions Log

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-10-08 | Restored the original resume-first layout | Keeps recruiter evidence primary and removes the over-styled editorial direction. |
| 2026-10-08 | Added a compact horizontal nature-photo rail | Adds personality and interaction without turning the portfolio into a design showcase. |
| 2026-10-08 | Standardized on Manrope and a cool sky accent | Feels modern and creative while staying restrained and highly readable. |
| 2026-10-09 | Framed the name block with thin rule lines and a bracketed eyebrow label, added geo-coordinates near location | Echoes an editorial/magazine cover treatment in a restrained way; coordinates tie the nature theme to a specific, personal place rather than a generic icon. |
| 2026-10-09 | Extended motion from "one entrance" to a per-section scroll reveal (fade + 18px rise, once per section) via framer-motion's whileInView | Directly answers the "feels static" feedback without adding ornament; respects reduced-motion globally. |
| 2026-10-09 | Added a Konami-code easter egg (console message + a brief firefly/particle rise, nature-themed) | Zero visual footprint until triggered, so it doesn't compromise the clean/restrained look, while giving curious recruiters something memorable. |
| 2026-10-09 | Removed the aurora glow behind the hero entirely | User feedback: didn't want a gradient there at all, on top of liking the existing sky accent as-is. |
| 2026-10-09 | Added viewfinder-style corner brackets and a one-time "develop" filter transition to each photo in the rail | Personality in the one photo-rail "side section" that reinforces it's personal photography (a camera frame, an instant-film-style reveal) without adding any new color or layout. |
| 2026-10-09 | Added a "Live Policy Search" canvas widget between Experience and Projects: a real cart-pole hill-climbing controller training live in the browser | Requested "unique functionality," explicitly not a terminal clone (too common). Chose something no generic portfolio would have and that demonstrates the RobIn Lab reward-shaping work interactively instead of just describing it. Paused by default and on scroll-out via IntersectionObserver to respect "motion must never delay access to content." |
| 2026-10-09 | Borrowed select style cues from b-r.io: a floating rounded-pill nav with a filled active state (replacing the full-width underline bar) and slightly larger border-radius on the photo cards / chat panel | Explicit ask to bring in "some of what makes sense" from that site's style without touching any copy, layout order, or content — kept to container shape/roundedness only. |
| 2026-10-09 | Reverted the hero social links from bordered pill buttons to plain icon-only links (icon + aria-label, no visible border/background/text) | User feedback: didn't like the pill/circle buttons; wanted them to match b-r.io's plain icon row exactly. |
| 2026-10-09 | Added a circular headshot photo above the eyebrow label in the hero | User supplied a real headshot; echoes b-r.io's avatar-above-heading pattern. First actual photo of Panav on the site (the rail below it stays nature-only per Photography guidance). |
| 2026-10-09 | Removed the "Live Policy Search" cart-pole widget entirely | User decided it wasn't needed. |
| 2026-10-09 | Matched the hero more closely to b-r.io: dropped the bracketed eyebrow label and its two framing rule lines, went straight from avatar into a bigger/bolder name (text-5xl/6xl font-bold, normal tracking instead of tight) | Explicit request to bring the hero in line with that site's style "from the top." Location line (Austin, Texas + day/night icon + time + coordinates) and the icon row were kept as-is per the user's instruction. |
| 2026-10-09 | Moved the photo rail out of the hero's side-column position to below the full-width hero text; first pass used a full-width flush equal-column grid | Explicit request to line the photos up "exactly" like b-r.io's bottom image grid, but this was a guess from screenshots and didn't actually match. |
| 2026-10-09 | Corrected the photo row after inspecting b-r.io's actual DOM/CSS: fixed-width cards (not a stretched grid), centered, always rounded, alternating ±2° rotation, no captions/overlays, horizontally scrollable only where the fixed widths don't fit | Measuring the real site (getBoundingClientRect / computed styles) showed the earlier square-corners-stretched-grid guess was wrong on several points at once — this is the actual mechanism, not an approximation of it. Dropped the viewfinder corners and captions here since b-r.io's cards have neither. |
