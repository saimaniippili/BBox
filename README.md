# Brainbox Staffing - Interactive Landing Page

A premium, interactive landing page for **Brainbox Staffing**, a corporate & tech recruitment agency. This project is built using modern SaaS design aesthetics, featuring responsive glassmorphism, fluid interactive graphics, multi-language support, and clean developer-friendly code structuring.

---

##  Core Features

1. **Unified Brainbox Matcher Core**:
   - A single, centered interactive matching node (Brainbox Engine) with three concentric spinning rings rotating in opposite directions.
   - Organic talent candidate nodes that hover and drift gently around the central matcher core.
   - Responsive filter controls that allow sorting candidates by role (All, Cloud/DevOps, Software Eng, AI/Data), dynamically dimming non-matching items.
2. **Ingestion Match Animation**:
   - Triggering the "Match Talent" simulation pulls active candidate nodes into the central core (shrinking them out of view), initiates a glowing concentric pulse on the core, and then springs the nodes back to their floating home positions with a bouncy transition.
3. **Clean, Borderless Design**:
   - Visual elements float directly on the page background, avoiding bulky card containers and borders for a modern, clutter-free look.
4. **Seamless Multi-Language Support**:
   - Toggle instantly between English (EN) and Dutch (NL) translation dictionaries. Text, badges, and tooltips update automatically without page refreshes.
5. **Interactive Leaflet Map**:
   - An interactive location finder displaying office branch pins using Leaflet maps.

---

##  Technologies Used

- **HTML5**: Structured with semantic tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) to optimize SEO and accessibility.
- **CSS3 (Vanilla)**:
  - Custom properties and tokens for theme-responsive variables.
  - CSS Grid & Flexbox layouts for robust element positioning.
  - Organic floating animations using keyframe translations (`@keyframes float-node`).
  - Concentric rotating animations for the matcher rings.
  - Media queries configured with scale transformations for fluid responsiveness.
- **JavaScript (Vanilla ES6)**:
  - Translation injection and state management.
  - Ingestion animation handler using CSS transitions.
  - SVG Coordinate calculations using `getBoundingClientRect()` relative to the SVG canvas. This allows the connection lines to adapt dynamically to the nodes' centers on resize or screen layout shifts.
- **SVG & SVG Bezier Curves**: Renders connection paths dynamically and crisp at any screen density.
- **Leaflet.js API**: Renders interactive maps.
- **Google Fonts (Outfit & Inter)**: Provides typography pairing for headers and body text.

---

##  Project Structure

```text
/brainbox-staffing
├── /assets         # Profile avatars, partner logos, and blog images
├── /css            # Stylesheets folder
│   └── styles.css  # Core layout, animations, and typography styles
├── /js             # Application scripts folder
│   └── app.js      # Global state, initializers, translation dictionaries, and matching animation logic
├── index.html      # Main HTML entry point
└── README.md       # Project documentation
```

---

##  How to Run Locally

To view and interact with the page locally:
1. Open a terminal in the project root directory.
2. Start a local HTTP server:
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx serve` or `npm install -g serve && serve`
3. Open your web browser and navigate to: `http://localhost:8000`
