# Rohit — Cybersecurity Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript —
no frameworks. Styled as a black-and-white "case file" / dossier: a
sidebar of file tabs, a redacted-name reveal on load, a scanning radar
graphic, and each section framed as a numbered exhibit.

## Live sections

- Hero — name, role, and a radar-style scan graphic
- Subject Profile (About)
- Skill Matrix
- Credentials (Education)
- Activity Log (currently learning / practicing)
- Case Files (projects)
- Transmit (contact form)

## Tech

- HTML5
- CSS3 (custom properties, Grid, Flexbox, `writing-mode`, CSS animation)
- Vanilla JavaScript (no libraries)
- Fonts: Bebas Neue + Courier Prime, via Google Fonts

## Project structure

```
portfolio/
├── index.html
├── README.md
├── favicon.ico
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/ (profile, projects, icons, backgrounds)
│   ├── fonts/
│   └── files/ (resume.pdf goes here)
├── designs/
│   ├── wireframes/
│   ├── mockups/
│   ├── ui-kit/
│   ├── figma-exports/
│   ├── references/
│   └── branding/ (logo, colors, typography)
└── data/
    ├── projects.json
    ├── skills.json
    └── experience.json
```

## Running locally

No build step needed — just open `index.html` in a browser, or serve the
folder with any static server (e.g. the VS Code "Live Server" extension,
or `python3 -m http.server`).

## To do

- Replace placeholder text: university name, dates, email, LinkedIn,
  GitHub links
- Add real project links/screenshots
- Add a resume PDF to `assets/files/`
