# AJ Lee — Portfolio Website

Built for Aroo (AJ) Lee · University of Oregon · Journalism '27

---

## File Structure

```
/
├── index.html     — All page content lives here
├── style.css      — All styles and responsive rules
├── script.js      — Navigation behavior and scroll animations
├── assets/
│   ├── resume.pdf — Drop your resume PDF here (required for download button)
│   └── [images]   — Add headshot or project images here
└── README.md      — This file
```

---

## How to Deploy to GitHub Pages

1. Upload this entire folder to a new GitHub repository (e.g., `aj-lee-portfolio`)
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch → main → / (root)**
4. Click **Save** — your site will be live at `https://[yourusername].github.io/aj-lee-portfolio/`

---

## How to Make Edits

**Update your bio or copy**
Open `index.html` and find the relevant `<section>` tag. All copy is plain HTML.

**Change colors**
Open `style.css`. The color palette is at the very top under `:root { }` — edit the values there and every color on the site updates automatically.

**Add your resume**
Rename your resume file to `resume.pdf` and drop it into the `/assets/` folder.

**Add broadcasting content (Section 03)**
In `index.html`, find the comment that says `<!-- AJ: This is your space. -->` inside `#broadcasting`.
Replace the `<p class="placeholder-cta">` line with your actual content — a YouTube embed, a link to your reel, or a paragraph describing your work.

**Add scouting/analytics content (Section 04)**
Same process — find the comment inside `#scouting` and replace the placeholder.

**Add a headshot**
Save your photo to `/assets/headshot.jpg`, then add this inside `.hero-inner` in `index.html`:
```html
<img src="/assets/headshot.jpg" alt="AJ Lee" class="hero-photo">
```
Then style `.hero-photo` in `style.css` to fit the layout.

---

## Things Still To Add

- [ ] Upload `resume.pdf` to `/assets/`
- [ ] Add broadcasting reel or on-air content in Section 03
- [ ] Add scouting/analytics content in Section 04
- [ ] Optional: headshot photo
