# ⚡ Interactive DOM Card & Animation Engine

![CI](https://github.com/LAKSHYA-NIGAM/Javascript/actions/workflows/ci.yml/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

An interactive vanilla JavaScript web experiment exploring DOM manipulation, event-driven state transitions, custom cursor mechanics, and double-click heart animations.

---

## ✨ Features

- **State Machine Controller**: Modular `card-widget.js` managing friendship transitions (`Stranger` ⇄ `Friend`), dynamic button states, and color indicators.
- **Micro-Interactions**: Double-click like animation with smooth CSS scale and opacity transitions.
- **Custom Cursor Tracker**: Dynamic cursor trailing based on mouse coordinates with boundary protection.
- **Automated Tests**: Unit test suite verifying state machine transitions, coordinate clamping, and animation frames using Node's native test runner.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/LAKSHYA-NIGAM/Javascript.git
cd Javascript
```

### 2. Run Test Suite
```bash
npm test
```

### 3. Open in Browser
Open `index.html` directly in any modern web browser or serve via:
```bash
npx serve .
```

---

## 📂 Project Structure

```
Javascript/
├── .github/workflows/
│   └── ci.yml               # Automated CI test pipeline
├── card-widget.js           # Pure JavaScript state machine & coordinate helpers
├── tests/
│   └── card-widget.test.mjs # Unit tests for widget logic (5 tests)
├── script.js                # DOM event handlers & module imports
├── style.css                # Card layout, custom cursor & animation styles
├── index.html               # Semantic HTML markup
└── package.json             # NPM package and test scripts
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
