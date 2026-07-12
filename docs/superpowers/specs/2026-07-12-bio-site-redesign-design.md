# Bio Site Redesign Design

## Goal

Redesign the existing personal bio site into a polished static landing page for darky using only information already present in the current source files.

## Source facts

- Name: darky.
- Short identity: linux-enthusiast, designer(?), programmer.
- Interests: IT and design.
- Focus: learning Linux systems and improving QOL.
- Links: Telegram, GitHub, Discord, Steam, LuaHelpers, DarkyDev.
- Existing assets: background gif, smoke gif, social icons, OPPO Sans font, custom cursor.

## Recommended approach

Use a dark, glass-card bio layout with a focused hero, compact profile text, visual social links, and project cards. This keeps the current personal style, improves readability, and stays lightweight for GitHub Pages.

Rejected alternatives:

- Terminal-style profile: matches the Linux identity, but hides the existing visual assets.
- Bright portfolio landing page: more expressive, but less consistent with the current dark animated style.

## Page structure

1. Hero
	- Show `darky` as the main identity.
	- Show `linux-enthusiast, designer(?), programmer` as the subtitle.
	- Include the existing smoke asset as a decorative visual.
	- Add primary links for Telegram and GitHub.

2. About
	- Keep the existing source text: interest in IT and design, Linux systems, and QOL.
	- Present it as concise profile copy.

3. Focus
	- Show compact chips for Linux systems, design, programming, and QOL.

4. Links
	- Preserve Telegram, GitHub, Discord, Steam, LuaHelpers, and DarkyDev links.
	- Use the existing icon assets where available.

5. Projects
	- Show LuaHelpers and DarkyDev as project/profile cards.

6. Footer
	- Preserve the original permissive footer meaning.
	- Keep the year 2026.

## Technical design

- Keep the site static: `index.html` and `style.css`.
- Remove the unused runtime JavaScript by deleting `script.js` and removing the script tag.
- Do not add dependencies or a build step.
- Use the existing local OPPO Sans font file.
- Remove inline styles from HTML and move presentation into CSS.
- Remove the Dark Reader warning because the redesigned page will not depend on the old full-screen background image behavior.
- Keep metadata and update it to match the redesigned page.

## Accessibility and responsiveness

- Use semantic HTML sections and descriptive link labels.
- Mark decorative images as empty alt text or `aria-hidden`.
- Keep sufficient color contrast on dark backgrounds.
- Make cards stack cleanly on mobile screens.
- Respect users who prefer reduced motion by disabling decorative transitions.

## Verification

- Check HTML structure for obvious invalid tags.
- Check that every link from the current source content is still represented.
- Check that the old Dark Reader warning markup and script logic are gone.
- Check that no long dash characters were introduced.
- Do not run a local build because the project has no build step and the user asked not to build locally unless explicitly requested.
