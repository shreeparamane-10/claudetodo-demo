# Shree Paramane — 3D Career Portfolio

A static, responsive portfolio built with HTML, CSS, vanilla JavaScript and Three.js loaded from a CDN. No build step or paid hosting is required; it can be hosted on GitHub Pages.

## Files
- `index.html` — page structure and content
- `style.css` — dark cinematic, chrome and glass styling
- `script.js` — Three.js scene, project detail modal, contact link configuration
- `assets/Shree_Paramane_Resume.pdf` — place your resume PDF here

## Before publishing
1. In `script.js`, replace `YOUR_LINKEDIN_URL` with your full LinkedIn profile URL.
2. Replace `YOUR_EMAIL@example.com` with the email address you want recruiters to use.
3. Make sure the resume file is named exactly `Shree_Paramane_Resume.pdf` inside `assets/`.
4. Upload/replace `index.html`, `style.css`, and `script.js` in the repository root. Do not delete the existing `assets` folder or its PDF.
5. In GitHub repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.

The Three.js library loads from jsDelivr, so the 3D sculpture requires an internet connection. If WebGL is unavailable, the rest of the site remains usable.
