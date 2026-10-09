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
- Present them in a horizontal scroll-snap rail with visible previous and next controls.
- Show a partial next image so the interaction is discoverable without instructions.
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
