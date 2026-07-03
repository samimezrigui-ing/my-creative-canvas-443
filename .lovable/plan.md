Adapt the portfolio to match the reference design and add a downloadable CV plus a dark-mode toggle.

Reference: the uploaded screenshot shows a clean header with a warm beige/camel background, large bold name, subtitle, horizontal nav links (About · Experience · Projects · Skills · Contact), and two buttons: a "Dark Mode" toggle and a "Download CV" button.

Steps:

1. **CV asset**
   - Upload the existing `sami_mezrigui_cv_1.pdf` to the Lovable CDN via the assets CLI.
   - Import the asset pointer in `src/routes/index.tsx` and wire a "Download CV" button that links directly to the PDF URL with `download` semantics.

2. **Dark mode plumbing**
   - Add a small client-side theme hook (`useTheme`) that reads/writes the preference from `localStorage` under a chosen key, toggles the `dark` class on `<html>`, and falls back to system preference (`prefers-color-scheme`).
   - Add an inline script in `src/routes/__root.tsx` inside the `<head>` to apply the saved theme before first paint, preventing a flash.
   - Apply the `dark` class conditionally to `<html>` in `RootShell` based on the hook state.

3. **Header redesign**
   - Refactor the hero in `src/routes/index.tsx` to match the reference layout: centered, bold large name, subtitle, horizontal nav, then a button row with the dark-mode toggle and "Download CV".
   - Keep the existing warm sand/camel palette as the light-mode default; the existing `.dark` block already provides a dark palette, so the toggle will switch automatically.

4. **Styling touch-ups**
   - Ensure buttons have enough contrast in both light and dark modes using the existing semantic tokens (`primary`, `primary-foreground`, `background`, `foreground`, etc.).
   - Verify the radial-gradient background decoration still looks acceptable in both modes.

5. **Verification**
   - Run the production build to confirm no unresolved imports or type errors.
   - Use a quick Playwright check to confirm the dark toggle switches the page and the Download CV link works.

Technical details:
- Files modified: `src/routes/index.tsx`, `src/routes/__root.tsx`.
- New file: `src/hooks/useTheme.ts` (or equivalent inline hook if kept small).
- New asset: `src/assets/sami-mezrigui-cv.pdf.asset.json`.
- Dependencies: only `lucide-react` icons (Moon, Sun, FileDown) — already available.