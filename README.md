# Bloomie — Landing Page

Marketing website for **Bloomie**, an AI-powered skin analysis platform. It scans a user's face with computer vision, detects acne, spots, and texture, and generates a personalized skincare routine.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Internationalization](#internationalization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Multi-page static site: home, how it works, features, pricing, about, results, contact, privacy, and terms.
- English / Spanish internationalization via `js/i18n.js` and the dictionaries in `i18n/`.
- Responsive layout with an accessible mobile navigation menu.
- SEO metadata and Open Graph / Twitter Card tags on every page.

## Tech Stack

- HTML5
- CSS3 (no preprocessor)
- Vanilla JavaScript (no build tools or frameworks)

## Project Structure

```
.
├── index.html          # Home page
├── about.html           # About the team / product
├── contact.html         # Contact page
├── features.html        # Product features
├── how-it-works.html    # How it works
├── pricing.html         # Plans and pricing
├── privacy.html         # Privacy policy
├── results.html         # Results / case studies
├── terms.html           # Terms and conditions
├── assets/              # Images (team photos, scanner graphic, etc.)
├── css/
│   └── styles.css       # Global styles
├── js/
│   └── i18n.js          # Mobile menu + i18n logic
└── i18n/
    ├── en.json          # English translations
    └── es.json          # Spanish translations
```

## Getting Started

This is a static site with no build step. Since translations are loaded via `fetch`, it must be served over `http://` rather than opened directly as a `file://` URL.

```bash
# Clone the repository
git clone <repo-url>
cd bloomie-website

# Serve locally, e.g. with Python
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

Alternatively, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.

## Internationalization

Text content is translated by tagging elements with `data-i18n` (or `data-i18n-placeholder`) attributes and adding matching keys to `i18n/en.json` and `i18n/es.json`. `js/i18n.js` swaps content at runtime and persists the selected language in `localStorage`.

## Contributing

1. Create a feature branch from `main`.
2. Follow the existing HTML/CSS structure and naming conventions.
3. If adding user-facing text, add the corresponding keys to **both** `i18n/en.json` and `i18n/es.json`.
4. Open a pull request describing your change.

## License

All rights reserved © Bloomie.
