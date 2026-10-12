# Shree Paramane | Portfolio

Static site (HTML, CSS, JavaScript). No build step.

## Files
- `index.html`, `style.css`, `script.js`
- `assets/Shree_Paramane_Resume.pdf` (resume, used by the view and download buttons)

## Edit
- Projects live in the `projects` array at the top of `script.js`. To show a screenshot, put the image in `assets/` and add `image: "assets/name.png"` to that project, and remove `ph:true`.
- Contact links are in the `#contact` section of `index.html`.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Put these files at the repository root and commit to `main`.
2. Repository **Settings > Pages > Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait about a minute. The site appears at https://shreeparamane-10.github.io/REPO-NAME/
