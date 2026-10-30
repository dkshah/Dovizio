# Dovizio Pharmaceutical Solutions — Corporate Presentation Ver2

[![Website Preview](https://img.shields.io/badge/Platform-Dovizio%20Corporate-009688?style=for-the-badge)](https://github.com/dkshah/Dovizio)
[![Design-System](https://img.shields.io/badge/Design%20System-Calming%20Teal%20%26%20Deep%20Navy-0a192f?style=for-the-badge)](https://github.com/dkshah/Dovizio)
[![Compliance](https://img.shields.io/badge/Compliance-US%20FDA%20%E2%80%A2%20EU--GMP%20%E2%80%A2%20WHO--GMP-14b8a6?style=for-the-badge)](https://github.com/dkshah/Dovizio)

A cohesive, modern, and empathetic 4-page corporate website and Figma-style presentation showcase for **Dovizio Pharmaceutical Solutions**. Designed around the 16-slide **Corporate Capabilities Deck Ver2** and verified corporate headquarters data.

---

## 🌟 Key Features

1. **Four Core Pages**:
   - [Home Page (`home.html`)](home.html): Hero value proposition, strategic pillars, 6-category dosage form breadth, and 5-stage delivery workflow.
   - [About Us Page (`about.html`)](about.html): Enterprise profile, 100+ years combined experience, mission & vision, 4 core values, and analytical testing services.
   - [Global Presence Page (`global-presence.html`)](global-presence.html): Interactive world map, USA & India strategic hubs, European EU-GMP Annex 1 compliance, and regional trade routes (LATAM, GCC, Africa).
   - [Contact Us Page (`contact.html`)](contact.html): Global headquarters directory, executive email routing, interactive RFP / technical proposal dispatch form, and 24h SLA response guarantee.
2. **Design System & Aesthetics**:
   - **Calming Healthcare Teal**: `#009688` (Primary), `#0D9488` (Dark), `#14B8A6` (Vibrant), `#2DD4BF` (Accent)
   - **Deep Authoritative Navy Blue**: `#0A192F` (Deep), `#0D213F` (Card Surface), `#1E3A5F` (Accent)
   - **Soft Mint / Ice Surfaces**: `#E6F4F1`, `#F0FDFA`
   - **Warm Whitespace & Slate**: `#FFFFFF`, `#F8FAFC`, `#64748B`
   - **Typography**: Plus Jakarta Sans, high-contrast, WCAG AAA accessible hierarchies.
3. **Full Device Responsiveness (Mobile, Tablet, iPad & Desktop)**:
   - Animated 3-bar hamburger drawer navigation below 992px (`iPad` and `Mobile`).
   - Touch hit targets (≥ 44px) and iOS Safari auto-zoom prevention (`font-size: 16px` on inputs).
   - Fluid `clamp(...)` typography and multi-column grid collapses tailored for iPhone, Android, iPad Mini, iPad Air, and iPad Pro.

---

## 📁 Repository Structure

```tree
Dovizio/
├── assets/
│   └── logo.png                # Official Dovizio lotus brand mark
├── css/
│   └── styles.css              # Design system, glassmorphic styling, components
├── js/
│   └── main.js                 # Hub map pins, dosage form tabs, RFP dispatch
├── index.html                  # Default landing page for GitHub Pages (Home)
├── home.html                   # Home page
├── about.html                  # About Us page
├── global-presence.html        # Global Presence page
├── contact.html                # Contact Us page
└── README.md                   # Platform documentation & deployment instructions
```

---

## 🔬 Corporate Capabilities Mapped from Deck Ver2

| Deck Slide | Topic | Implemented Location |
| :--- | :--- | :--- |
| **Slide 1** | Bridging Global Markets with Precision, Quality & Scalability | `home.html` Hero Section |
| **Slide 2** | Who We Are: Scientific Depth, Global Network, Quality Mindset, Execution Focus | `home.html` Pillars Grid |
| **Slide 3** | Guiding Purpose: Mission & Vision | `about.html` Purpose Section |
| **Slide 4** | Foundational Principles: Health Equity, Agile Action, Rigorous Thinking, Clear Execution | `about.html` Core Values |
| **Slide 5** | Enterprise Profile: US-Based Leadership with Seamless Global Reach | `about.html` & `global-presence.html` |
| **Slide 6** | Core Competencies: APIs, Formulation, Tech Transfer, Regulatory, Licensing | Integrated Services Grid |
| **Slide 7** | Global API Sourcing & DMF Support, 503A/503B Compounding Support | `global-presence.html` & `contact.html` |
| **Slide 8** | Dosage Form Breadth: Oral Solids, Oral Liquids, Parenterals, Dermaceuticals, APIs, RLDs | `home.html` Dosage Explorer |
| **Slide 9** | Strategic Selection & Global Manufacturing (LATAM, Africa, GCC, Europe, USA) | `global-presence.html` Hubs |
| **Slide 10** | White-Label & RLD Sourcing (6-Step Path) | `global-presence.html` Workflow |
| **Slide 11** | Configurable Capabilities Portfolio | Design Tokens & Services |
| **Slide 12** | Global Compliance Standards: US FDA, EU-GMP (Annex 1), WHO-GMP, Compendial Standards | Compliance Badges Strip |
| **Slide 13** | Analytical Testing & Technical Services (Method Validation, MOH Query, BE Studies) | `about.html` Technical Section |
| **Slide 14** | Operating Architecture: Value Proposition & Delivery Workflow (01 to 05) | `home.html` Workflow Stepper |
| **Slide 15** | Strategic Partnership: Product Opportunity, Supply Challenge, Market Expansion | `contact.html` Drivers & Form |
| **Slide 16** | Accelerating Global Pharmaceutical Access Together | Platform Footer & Global CTAs |

---

## 🏢 Corporate Headquarters & Contact Directory

- **Global Corporate Headquarters**:
  `9121 Anson Way, Suite 200, Raleigh, NC 27615, USA`
- **Business Development**: `bd@doviziollc.com`
- **Telephone / WhatsApp**:
  - International: `+91-9979895682`
  - US Line: `+1 (123) 456-7890`
- **Official Portal**: `www.doviziophrama.com`

---

## 🚀 Quick Start / Local Preview

To preview the website locally without any dependencies:

```bash
# Using Python:
python -m http.server 8000

# Using Node.js npx:
npx serve .
```

Open `http://localhost:8000` in your web browser. You can also simply double-click `home.html` or `index.html` to open it directly in Chrome, Edge, or Safari.

---

## 🌐 Deploy to GitHub Pages

1. In your repository on GitHub (`https://github.com/dkshah/Dovizio`), navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
3. Click **Save**. Your site will be live at `https://dkshah.github.io/Dovizio/`.
