# Bio Site Redesign Design

## Goal

Redesign the existing personal bio site into a polished static landing page for Darky using only information already present in the source files.

## Source facts

- Name: Darky.
- Short identity: Russian programmer from Kazakhstan.
- Work focus: mobile scripts for SA:MP and custom scripts.
- Main channel: Darky Mobile Scripts / LuaHelpers.
- Links: Telegram profile, BlastHack profile, LuaHelpers, Project Market, CryptoBot donate, DarkyPython'ист, DarkyDev.
- Existing dynamic feature: birthday countdown to October 2.

## Recommended approach

Use a dark, minimal bio-card layout with subtle gradients, glass-like cards, readable typography, and direct call-to-action links. This keeps the site lightweight for GitHub Pages while making the current content look intentional.

Rejected alternatives:

- Terminal-style profile: matches the programmer identity, but is less readable as a general public bio.
- Bright project landing page: useful for selling a product, but too heavy for a compact personal page.

## Page structure

1. Hero
	- Show `Darky` as the main identity.
	- Show `Russian programmer from Kazakhstan` as the subtitle.
	- Include compact topic chips: `SA:MP`, `Lua`, `Mobile scripts`, `Custom scripts`.
	- Keep the birthday countdown visible in the hero.
	- Add primary links for Telegram and BlastHack.

2. About
	- Explain in Russian that Darky runs the channel and publishes mobile scripts for SA:MP.
	- Mention that custom scripts can be ordered.
	- Keep the copy concise and factual.

3. Projects
	- Show `LuaHelpers` as the active project/channel.
	- Show `Project Market` as archived with a small `Archived` badge.

4. Channels
	- Show three cards: LuaHelpers, DarkyPython'ист, DarkyDev.
	- Keep existing descriptions from the source, cleaned up for readability.

5. Donate
	- Provide a compact CryptoBot donation link.

6. Footer
	- Keep the permissive tone of the original footer.
	- Update the year to 2026.

## Technical design

- Keep the site static: `index.html`, `style.css`, `script.js`.
- Do not add dependencies or a build step.
- Use the existing local Montserrat font file.
- Remove inline styles from HTML and move presentation into CSS.
- Remove the external allcalc widget because it is unrelated to the bio page and adds third-party runtime code.
- Keep Open Graph metadata and update it to match the redesigned page.
- Keep JavaScript limited to the birthday countdown.

## Accessibility and responsiveness

- Use semantic HTML sections and descriptive link labels.
- Keep sufficient color contrast on dark backgrounds.
- Make cards stack cleanly on mobile screens.
- Respect users who prefer reduced motion by disabling decorative transitions.

## Verification

- Manually inspect the static page in a browser if requested by the user.
- Check HTML structure for obvious invalid tags.
- Check that every link from the source content is still represented except the removed allcalc widget.
- Do not run a local build because the project has no build step and the user asked not to build locally unless explicitly requested.
