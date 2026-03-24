# WordPress Migration Guide for Mara Martins Portfolio

This guide will help you recreate your portfolio in WordPress with the same clean, professional design.

---

## Table of Contents
1. [Required Plugins & Theme](#1-required-plugins--theme)
2. [Design System & CSS](#2-design-system--css)
3. [Page Structure](#3-page-structure)
4. [Section-by-Section Build Guide](#4-section-by-section-build-guide)
5. [Custom CSS Code](#5-custom-css-code)

---

## 1. Required Plugins & Theme

### Recommended Theme
- **Astra** (Free) - Lightweight and Elementor-compatible
- **Kadence** (Free) - Modern with great starter templates
- **Hello Elementor** (Free) - Blank canvas for full control

### Required Plugins
| Plugin | Purpose | Cost |
|--------|---------|------|
| **Elementor Pro** | Page builder | $59/year |
| **Essential Addons for Elementor** | Extra widgets | Free |
| **Custom Fonts** | For Inter font | Free |
| **WPForms Lite** | Contact form | Free |
| **Yoast SEO** | SEO optimization | Free |

### Alternative: Divi Theme
If you prefer Divi, it includes the page builder. Cost: $89/year

---

## 2. Design System & CSS

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary: #6366F1;           /* Indigo - main accent */
  --primary-hover: #4F46E5;     /* Darker indigo for hover */
  --primary-light: #EEF2FF;     /* Light indigo background */
  --primary-100: #E0E7FF;       /* Indigo 100 */
  
  /* Text Colors */
  --text-primary: #111827;      /* Gray 900 - headings */
  --text-secondary: #4B5563;    /* Gray 600 - body text */
  --text-muted: #9CA3AF;        /* Gray 400 - subtle text */
  
  /* Background Colors */
  --bg-white: #FFFFFF;
  --bg-light: #F9FAFB;          /* Gray 50 */
  --bg-dark: #111827;           /* Gray 900 - footer */
  
  /* Border Colors */
  --border-light: #E5E7EB;      /* Gray 200 */
  --border-medium: #D1D5DB;     /* Gray 300 */
}
```

### Typography
```css
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #4B5563;
}

h1 { font-size: 3.5rem; font-weight: 700; color: #111827; }
h2 { font-size: 2.25rem; font-weight: 700; color: #111827; }
h3 { font-size: 1.5rem; font-weight: 600; color: #111827; }
h4 { font-size: 1.25rem; font-weight: 600; color: #111827; }

/* Responsive */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.75rem; }
}
```

### Button Styles
```css
/* Primary Button */
.btn-primary {
  background-color: #6366F1;
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #4F46E5;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
}

/* Outline Button */
.btn-outline {
  background-color: transparent;
  color: #6366F1;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid #6366F1;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-outline:hover {
  background-color: #EEF2FF;
}
```

---

## 3. Page Structure

### Homepage Sections (in order)
1. **Header** - Fixed navigation with logo and menu
2. **Hero Section** - Photo, name, title, bio, stats, CTAs
3. **Companies** - "Trusted by Industry Leaders" logos
4. **Services** - 4 service cards with icons
5. **Portfolio** - Featured project + 3 project cards
6. **Testimonials** - Carousel with quotes
7. **Contact** - Form + contact info
8. **Footer** - Links, social, copyright

### Additional Pages
- `/project/global-marketing-localization`
- `/project/ai-translation-engine`
- `/project/localization-training-program`
- `/project/polyglotai-translator`

---

## 4. Section-by-Section Build Guide

### HEADER
**Elementor Setup:**
1. Create Header template (Theme Builder > Header)
2. Add container with max-width 1280px, centered
3. Structure:
   - Left: Site Logo/Text "Mara Martins"
   - Center: Nav Menu (About, Services, Portfolio, Testimonials, Contact)
   - Right: Button "Let's Connect"

**Settings:**
- Position: Fixed
- Background: White with 95% opacity
- Add backdrop blur effect
- Height: 80px
- Shadow on scroll: `0 1px 3px rgba(0,0,0,0.1)`

---

### HERO SECTION
**Layout:** 2 columns (60% / 40%)

**Left Column:**
- Location badge with icon
- H1: "Mara Martins"
- H2 (indigo color): "Localization Lead & Program Manager"
- Tagline paragraph
- Bio paragraph
- 2 buttons: "Book a Consultation" (primary) + "View My Work" (outline)
- Stats row: 4 items (15+, 40+, 50+, 100%)

**Right Column:**
- Circular image (your photo)
- Border: 4px white
- Shadow: large
- Decorative circles behind (indigo colors)

**Background:** Gradient from light indigo (#EEF2FF) to white

---

### COMPANIES SECTION
**Layout:** Full width, centered

**Content:**
- H2: "Trusted by Industry Leaders"
- Paragraph: description
- Logo row: HP, Square, LinkedIn, Infoblox, Apple, Welocalize, VMware

**Styling:**
- Logos: grayscale by default, color on hover
- Opacity: 60% default, 100% on hover
- Spacing: 48px between logos

---

### SERVICES SECTION
**Background:** Light gray (#F9FAFB)

**Layout:**
- Section label: "WHAT I OFFER" (indigo, uppercase, small)
- H2: "My Services"
- 4 cards in a row

**Each Card:**
- Icon in indigo circle (56x56px)
- H3: Service title
- Paragraph: Description
- Hover: lift effect with shadow

**Services:**
1. AI Localization (Brain icon)
2. Program Management (Target icon)
3. Translation (Languages icon)
4. Training (GraduationCap icon)

---

### PORTFOLIO SECTION
**Featured Project (PolyglotAI):**
- Full-width card with 2 columns
- Left: Large image
- Right: Badge "Featured Project", title, description, tags, 2 buttons
- Background: gradient indigo to white

**Other Projects:**
- 3 cards in a row
- Image on top (hover zoom effect)
- Title, description, tags
- Click links to project pages

---

### TESTIMONIALS SECTION
**Background:** Light indigo gradient

**Layout:**
- Section label + H2
- Large quote card (centered)
- Navigation arrows
- Dot indicators
- Small preview cards below (desktop only)

**Quote Card:**
- Quote icon (large, light indigo)
- Quote text (italic, larger font)
- Author name, role, company

---

### CONTACT SECTION
**Layout:** 2 columns

**Left Column:**
- H3: "Contact Information"
- 4 contact cards:
  - Email: marapt@gmail.com
  - Location: Mountain View, California, USA
  - LinkedIn: Connect link
  - Schedule: Book a Meeting
- Booking note box (light indigo background)

**Right Column:**
- Contact form card with shadow
- Fields: Name, Email, Message
- Submit button (full width, indigo)

---

### FOOTER
**Background:** Dark (#111827)

**Layout:** 3 columns
1. Brand + tagline + social icons
2. Quick Links menu
3. Contact info

**Bottom:** Copyright + Back to top link

---

## 5. Custom CSS Code

Add this to **Appearance > Customize > Additional CSS** or Elementor's Custom CSS:

```css
/* ==================== */
/* MARA MARTINS PORTFOLIO CSS */
/* ==================== */

/* Import Inter Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Global Styles */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #4B5563;
  line-height: 1.6;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

/* Selection Color */
::selection {
  background: rgba(99, 102, 241, 0.2);
  color: #4338ca;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #c7c7c7;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

/* Header Styles */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: box-shadow 0.3s ease;
}

.site-header.scrolled {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Navigation Links */
.nav-link {
  color: #4B5563;
  font-weight: 500;
  padding: 8px 16px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #6366F1;
}

/* Primary Button */
.elementor-button.btn-primary,
.btn-primary {
  background-color: #6366F1 !important;
  color: white !important;
  padding: 12px 32px !important;
  border-radius: 8px !important;
  font-weight: 500 !important;
  transition: all 0.2s ease !important;
  border: none !important;
}

.elementor-button.btn-primary:hover,
.btn-primary:hover {
  background-color: #4F46E5 !important;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3) !important;
}

/* Outline Button */
.elementor-button.btn-outline,
.btn-outline {
  background-color: transparent !important;
  color: #6366F1 !important;
  padding: 12px 32px !important;
  border-radius: 8px !important;
  font-weight: 500 !important;
  border: 2px solid #6366F1 !important;
  transition: all 0.2s ease !important;
}

.elementor-button.btn-outline:hover,
.btn-outline:hover {
  background-color: #EEF2FF !important;
}

/* Section Labels */
.section-label {
  color: #6366F1;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

/* Cards */
.service-card,
.project-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.service-card:hover,
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Icon Boxes */
.icon-box {
  width: 56px;
  height: 56px;
  background: #EEF2FF;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.service-card:hover .icon-box {
  background: #6366F1;
}

.service-card:hover .icon-box svg,
.service-card:hover .icon-box i {
  color: white;
}

/* Badges */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
}

.badge-primary {
  background: #EEF2FF;
  color: #6366F1;
}

.badge-outline {
  background: transparent;
  border: 1px solid #E0E7FF;
  color: #6366F1;
}

/* Testimonial Card */
.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.testimonial-quote {
  font-size: 1.25rem;
  font-style: italic;
  color: #374151;
  line-height: 1.8;
}

/* Contact Form */
.contact-form input,
.contact-form textarea {
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #6366F1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  outline: none;
}

/* Footer */
.site-footer {
  background: #111827;
  color: #9CA3AF;
}

.site-footer a {
  color: #9CA3AF;
  transition: color 0.2s ease;
}

.site-footer a:hover {
  color: #818CF8;
}

/* Social Icons */
.social-icon {
  width: 40px;
  height: 40px;
  background: #1F2937;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.social-icon:hover {
  background: #6366F1;
}

/* Company Logos */
.company-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.company-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}

/* Circular Profile Image */
.profile-image {
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Stats */
.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #6366F1;
}

.stat-label {
  font-size: 0.875rem;
  color: #6B7280;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem !important; }
  h2 { font-size: 1.75rem !important; }
  
  .testimonial-card {
    padding: 24px;
  }
  
  .testimonial-quote {
    font-size: 1rem;
  }
}
```

---

## Quick Elementor Tips

1. **Use Global Colors**: Set up your color palette in Elementor > Site Settings > Global Colors
2. **Use Global Fonts**: Set Inter as your primary font in Site Settings > Global Fonts
3. **Save Sections as Templates**: Build once, reuse on project pages
4. **Use Motion Effects**: Add subtle entrance animations (fade up, 0.3s delay)
5. **Mobile Responsive**: Always check and adjust tablet/mobile views

---

## Need Help?

If you get stuck, you can:
1. Hire a WordPress developer on Fiverr/Upwork with this guide
2. Use Elementor's support documentation
3. Watch YouTube tutorials for specific sections

Good luck with your WordPress migration! 🚀
