# Abhinandan H S — Portfolio

A dark/light "civic blueprint" themed portfolio site — navy & brass on a
drafting-paper grid, with projects laid out like engineering title-block
sheets. Built as static HTML/CSS/JS, no build step, no dependencies to
install.

## Run it locally

Just open `index.html` in a browser — or, for the theme toggle and fonts
to behave exactly like production, serve it over a local server:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Folder structure

```
portfolio/
├── index.html                          Main page
├── assets/
│   ├── css/style.css                   All styling + both themes
│   ├── js/main.js                      Theme toggle, mobile nav, scroll reveal
│   ├── img/profile.png                 Your photo (optimized for web)
│   └── docs/Abhinandan_HS_Resume.pdf   Downloadable résumé (from your PDF)
```

## Deploy it (free options)

- **GitHub Pages**: push this folder to a repo, then in Settings → Pages,
  set the source to the `main` branch root. Your site will be live at
  `https://<username>.github.io/<repo>/`.
- **Netlify / Vercel**: drag-and-drop the `portfolio` folder onto
  netlify.com/drop, or run `vercel` inside this folder — both are free
  and give you a custom URL in under a minute.

## Things worth double-checking before you publish

1. **GitHub / LinkedIn links** — your resume listed `abhi-nandan-in` and
   `Abhiii-work` without saying which platform each belongs to. I linked
   them as `github.com/abhi-nandan-in` and `linkedin.com/in/Abhiii-work`
   as the most likely reading — open `index.html`, search for
   `contact-item`, and fix the two `href` values if that's wrong.
2. **Phone/email** are wired as `tel:` / `mailto:` links — check they're correct.
3. Swap `assets/img/profile.png` for a different photo any time — same filename, any time you like.

## Customizing

- **Colors & fonts** live at the top of `assets/css/style.css` as CSS
  variables (`--gold`, `--steel`, `--ink`, `--font-display`, etc.) — change
  them once and they cascade everywhere, in both themes.
- **Default theme**: the site opens in dark mode and remembers a visitor's
  choice after they toggle. To default to light instead, open
  `assets/js/main.js` and change `saved === "light" ? "light" : "dark"`
  to default to `"light"`.
- **Content**: everything is plain text inside `index.html` — search for
  the section you want (e.g. `id="projects"`) and edit directly.
