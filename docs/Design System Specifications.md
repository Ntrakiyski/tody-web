### 1. Design System Specifications (Updated)

#### 1.1 Colors (Hex Codes)

**Primary Orange Gradient (from visual assets)**  
- Start: `#E46337` – deep, reddish-orange  
- End: `#FFC947` – bright, warm yellow‑orange  

**Dark Backgrounds**  
- Darkest (hero, features, footer): `#101010`  
- Medium dark (cards, insets): `#1C1C1C`  

**Light Backgrounds**  
- Cream / beige main (about, projects): `#F9F9F7`  
- White / off-white (logos / “trusted by” / tech section): `#FFFFFF`  

**Text Colors**  
- White text (on dark backgrounds): `#FFFFFF`  
- Dark gray headings on light bg: `#111827` (Tailwind `gray-900`)  
- Medium dark body text on light bg: `#4B5563` (Tailwind `gray-600`)  
- Muted gray for captions / subtitles: `#9CA3AF` (Tailwind `gray-400`)  

**Accent Colors**  
- Accent Blue (links, subtle highlights): `#60A5FA` (Tailwind `blue-400`)  
- Accent Orange (hero subtitle, chips): `#E46337`  
- Success Green (positive metrics, progress bars): `#22C55E` (Tailwind `green-500`)  
- Error Red (negative metrics, progress bars): `#EF4444` (Tailwind `red-500`)  

All of these should be defined in `tailwind.config.js` and referenced via semantic names (e.g. `bg-bg-darkest`, `text-accent-orange`) rather than raw hex values inside components.

---

#### 1.2 Typography

**Font Families (Headings vs Body)**

Fonts are loaded via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Configured in Tailwind:

```js
// tailwind.config.js
extend: {
  fontFamily: {
    sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
    heading: ['"Bricolage Grotesque"', 'sans-serif'],
  },
}
```

**Usage Rules**

- Headings (H1–H4), section titles, hero text → `font-heading` (Bricolage Grotesque)  
- Body, long copy, UI text, captions → `font-sans` (Inter)

**Font Sizes**

- **H1 (hero heading)**  
  - Desktop: `72px`  
  - Mobile: `48px`  
  - Tailwind: `text-[72px] md:text-[72px] sm:text-[48px]` or `text-5xl sm:text-7xl` with custom tuning  

- **H2 (section headings)**  
  - Desktop: `48px`  
  - Mobile: `36px`  
  - Tailwind: approximately `text-5xl sm:text-4xl` (or explicit `text-[48px] sm:text-[36px]`)  

- **H3 (card titles):** `20px` → `text-xl`  
- **H4 (small headings / labels – e.g. “for now”):** `14px` → `text-sm`  
- **Body text:** `18px` → `text-lg`  
- **Small text / captions:** `14px` → `text-sm`  
- **Extra-small text:** `12px` → `text-xs`  

**Font Weights**

- Regular: `400` → `font-normal`  
- Semibold: `600` → `font-semibold`  
- Bold: `700` → `font-bold`  

**Line Heights**

- Headings: `1.2` → `leading-tight`  
- Body text: `1.6` → `leading-relaxed`  

---

#### 1.3 Spacing

- **Section vertical padding (space between sections):**  
  - `80px` → Tailwind `py-20`  
- **Container max width:**  
  - `1280px` → Tailwind `max-w-7xl mx-auto`  
- **Grid gaps (space between cards):**  
  - Default: `32px` → Tailwind `gap-8`  
- **Card internal padding:**  
  - `24px` → Tailwind `p-6`  

Spacing should be applied via these canonical utilities; avoid arbitrary `px` values unless absolutely necessary.

---

#### 1.4 Border Radius

- Cards: `16px` → `rounded-2xl`  
- Images: `16px` → `rounded-2xl`  
- Buttons: `8px` → `rounded-lg`  

Only these radii should be used for primary components to keep the visual language consistent.

---

#### 1.5 Shadows

The design system uses a **modern, flat aesthetic**. Depth and hierarchy are created with background color contrast, layering, and typography — not drop shadows.

- Card shadow: `none`  
- Button hover shadow: `none`  

Instead of shadows, use:

- Dark vs medium‑dark backgrounds (`#101010` vs `#1C1C1C`)  
- Light card on dark background, or dark card on light background  
- Subtle borders if extra separation is needed (`border border-white/5` on dark, `border border-gray-100` on light)
