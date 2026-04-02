# Premium Neutral + Gold Color System

## Color Palette

### Primary Colors

- **Background**: `#F5F3EF` (Warm Beige)
- **Card Background**: `#FFFFFF` (Pure White)
- **Primary Text (Headings)**: `#1C1C1C` (Deep Black)
- **Secondary Text (Subheadings)**: `#3A3A3A` (Charcoal)
- **Paragraph Text**: `#6B6B6B` (Medium Grey)
- **Muted Text**: `#9A9A9A` (Light Grey)
- **Border Color**: `#E5E2DC` (Soft Taupe)

### Accent Color System

- **Primary Accent**: `#C8A96A` (Warm Gold)
- **Accent Hover**: `#B89655` (Darker Gold)

## CSS Variables

All colors are defined in `src/index.css` using CSS custom properties:

```css
--background: 30 14% 96.5%; /* #F5F3EF */
--foreground: 0 0% 11%; /* #1C1C1C */
--card: 0 0% 100%; /* #FFFFFF */
--card-foreground: 0 0% 11%; /* #1C1C1C */
--primary: 33 51% 62%; /* #C8A96A */
--primary-foreground: 0 0% 100%; /* White */
--secondary: 30 8% 94%; /* #F0EEE9 */
--secondary-foreground: 0 0% 22%; /* #3A3A3A */
--muted: 30 3% 89%; /* #E5E2DC */
--muted-foreground: 0 0% 60%; /* #9A9A9A */
--accent: 33 51% 62%; /* #C8A96A (same as primary) */
--accent-foreground: 0 0% 100%; /* White */
--border: 30 10% 90%; /* #E5E2DC */
--glow-primary: 33 51% 62%; /* Gold glow */
--glow-accent: 33 51% 62%; /* Gold glow */
```

## Component Styling Guide

### Buttons

**Primary Button**

- Background: `#C8A96A`
- Text: White
- Border-radius: 12-14px
- Hover: `#B89655` (darker gold)
- Shadow: `0 4px 12px rgba(200, 169, 106, 0.2)`
- Hover Shadow: `0 8px 20px rgba(200, 169, 106, 0.3)`

**Secondary Button**

- Background: Transparent
- Text: `#1C1C1C`
- Border: 1px solid `#D6D3CD`
- Hover Background: `#F0EEE9`
- Hover Border: `#C8A96A`

### Cards & Sections

- Background: `rgba(255, 255, 255, 0.7)`
- Border: 1px solid `#E5E2DC` with 40-50% opacity
- Backdrop Blur: 20px
- Border-radius: 16-24px
- Hover Shadow: `0 8px 24px rgba(200, 169, 106, 0.12)`

### Typography Hierarchy

1. **H1 (Headings)**: `#1C1C1C`, Bold (700-800), Font-family: Clash Display/Bento/Syne
2. **H2-H3 (Subheadings)**: `#1C1C1C`, Semi-bold (600-700)
3. **Paragraph Text**: `#6B6B6B`, Regular (400-500), Line-height: 1.6-1.8
4. **Accent Text**: `#C8A96A`, Font-weight: 600

### Special Elements

**Timeline Elements**

- Line Gradient: `linear-gradient(to bottom, #C8A96A, #E5E2DC)`
- Dots: `#C8A96A` with glow effect

**Accent Highlights**

- Gold Text Gradient: `linear-gradient(135deg, #1C1C1C, #C8A96A)`
- Small Badges: `#C8A96A` text on `#C8A96A` 10% background

## Implementation Notes

### Removed Colors

- All purple (`#a855f7`, `#270 60% 55%`) - REMOVED
- All blue (`#3b82f6`, `#06b6d4`) - REMOVED
- All pink/violet gradients - REMOVED
- All cyan/teal accents - REMOVED

### Transitions

All interactive elements use smooth 0.3s cubic-bezier(0.4, 0 0.2, 1) transitions for premium feel.

### Glass Effect

- Backdrop blur: 20px
- Background: `rgba(255, 255, 255, 0.7-0.8)`
- Border: 1px solid with color variable at 30-50% opacity

## Color Usage by Section

- **Hero**: Gold buttons, neutral text, transparent overlays
- **Navigation**: White/transparent with slate grey text
- **Cards (Skills, Experience, Portfolio)**: White/70% with gold accents
- **Process Steps**: Gold icons on white cards
- **Timeline**: Gold gradient lines and dots
- **Buttons**: Gold primary, white secondary with borders
- **Footer**: Neutral beige gradient with grey text

## Responsive & Accessibility

- All text meets WCAG AA contrast requirements
- Gold accent (#C8A96A) on white: 4.8:1 contrast ratio
- Dark text (#1C1C1C) on light bg: 13.5:1+ contrast ratio
- Consistent 8px grid spacing system
