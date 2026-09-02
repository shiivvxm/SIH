---
name: Maritime Intelligence System
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f4'
  surface-container: '#f0edee'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e5e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464c'
  inverse-surface: '#303031'
  inverse-on-surface: '#f3f0f1'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#151b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#281807'
  on-tertiary-container: '#9a7f67'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f8'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#151b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#fdddc1'
  tertiary-fixed-dim: '#e0c1a6'
  on-tertiary-fixed: '#281807'
  on-tertiary-fixed-variant: '#58432e'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e5e2e3'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-table:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
  stack-xl: 48px
---

## Brand & Style

This design system is built for the industrial scale of global logistics, emphasizing **Trust**, **Intelligence**, and **Precision**. The aesthetic is a fusion of **Modern Corporate** and **Technical Minimalism**, designed to handle high information density without overwhelming the user.

The visual narrative draws inspiration from modern maritime navigation tools: clean, functional, and authoritative. It utilizes a restrained color palette, crisp 1px borders, and a sophisticated use of whitespace to create a "command center" feel that remains accessible to enterprise users.

## Colors

The palette is anchored by **Deep Midnight Navy**, evoking the depths of the ocean and the stability of established institutions. **Off-white** surfaces provide a clean, paper-like canvas that reduces eye strain during long-form data analysis.

- **Primary (#0B1221):** Used for navigation, primary actions, and authoritative headings.
- **Secondary (#475569):** Reserved for supporting text, icons, and secondary UI elements.
- **Surface (#F8FAFC):** The foundational background for all application views.
- **Semantic Colors:** Emerald, Amber, and Rose are used sparingly for status indicators, ensuring high-signal communication for logistics health.

## Typography

The typographic system prioritizes clarity and hierarchy. 
- **Headings:** Hanken Grotesk provides an authoritative, slightly condensed feel suitable for a technical enterprise environment.
- **Body:** Inter is used for its exceptional readability in complex interfaces. 
- **Data & Labels:** For coordinates, vessel IDs, and timestamps, JetBrains Mono is used to provide a technical, "instrument-panel" aesthetic. 
- **Tabular Figures:** All numeric data in tables must use tabular (monospaced) figures to ensure vertical alignment across rows for rapid comparison.

## Layout & Spacing

This design system employs a **Fluid Grid** model based on a 4px baseline shift. 
- **Grid:** A 12-column layout on desktop, transitioning to 8 columns on tablet and 4 columns on mobile.
- **Density:** To manage high information density, utilize "Comfortable" (24px) spacing for dashboards and "Compact" (8px) spacing for data-heavy management tables.
- **Safe Areas:** Maintain a minimum 32px outer margin on desktop to ensure the UI feels premium and uncrowded.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Subtle Glassmorphism**.
- **Base Level:** The Off-white surface (#F8FAFC).
- **Raised Level:** Pure white (#FFFFFF) cards with a 1px "Subtle Slate" border. 
- **Overlays:** Modals and dropdowns utilize a backdrop blur (12px) with 80% opacity white fill to maintain context of the underlying data.
- **Shadows:** Use extra-diffused, low-opacity shadows (0px 4px 20px rgba(11, 18, 33, 0.05)) to suggest lift without adding visual clutter.

## Shapes

The shape language is **Soft and Precise**. 
- Standard components (inputs, buttons) use a 0.25rem (4px) radius to maintain a professional, architectural feel.
- Large containers and cards use a 0.5rem (8px) radius.
- Avoid pill shapes except for status "Tags" to ensure they are visually distinct from interactive buttons.

## Components

- **Buttons:** Primary buttons use Midnight Navy with white text. Secondary buttons use a 1px Subtle Slate border with Midnight Navy text. High-density views should use "Small" button variants (32px height).
- **Inputs:** Fields are defined by a 1px border (#E2E8F0). On focus, the border transitions to Midnight Navy with a subtle 2px outer glow.
- **Data Tables:** Headers should use `label-caps` in Secondary Steel Grey. Rows should have a subtle hover state (#F1F5F9) and use 1px horizontal dividers only.
- **Chips/Status:** Use low-saturation backgrounds with high-saturation text for semantic statuses (e.g., Emerald-50 background with Emerald-700 text).
- **Cards:** White backgrounds, 1px border, no shadow unless the card is interactive or "floating."
- **Icons:** Use thin-stroke (1.5pt) maritime icons. Icons should be monochrome (Secondary Steel Grey) unless indicating a specific status change.
- **Progress Indicators:** Use thin, linear bars for loading states to maintain the technical, minimal aesthetic.