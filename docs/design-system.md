# Design System Analysis

## Colors

### Primary Colors
- **Primary (Blue)**: `#1337ec` - Main brand color (blue variant)
- **Primary (Burgundy)**: `#9F2142` - Main brand color (burgundy/red variant, most common)
- **Primary Bright**: `#BF284E`, `#D94469` - Brighter variant for dark mode
- **Accent**: `#9F2142` - Primary accent color (most common)
- **Accent (Alternative)**: `#C42A51` - Alternative accent variant
- **Accent Dark**: `#d44a6d` - Darker accent variant

### Background Colors
- **Background Light**: `#ffffff`, `#FFFFFF` - Light mode background
- **Background Dark**: `#101322`, `#121212` - Dark mode background

### Card Colors
- **Card Light**: `#f6f6f8`, `#F6F6F8`, `#F7F7F7` - Light mode card background
- **Card Dark**: `#1f212f`, `#1E1E1E` - Dark mode card background

### Text Colors
- **Text Primary (Light)**: `#1C1C1E` - Primary text color for light mode
- **Text Secondary (Light)**: `#6B7280` - Secondary text color for light mode
- **Text Primary (Dark)**: `#FFFFFF` - Primary text color for dark mode
- **Text Secondary (Dark)**: `#9CA3AF`, `#A0A0A0` - Secondary text color for dark mode
- **Text Light Primary**: `#F5F5F7` - Light text variant
- **Text Light Secondary**: `#A0AEC0` - Light secondary text variant

### Status Colors
- **Wise Green**: `#29a349` - Success/positive amounts (most common)
- **Wise Green Bright**: `#33D15B` - Bright green variant
- **Wise Green (Alternative)**: `#4cd964` - Alternative green variant
- **Wise Red**: `#e53e3e` - Error/negative amounts (most common)
- **Wise Red (Alternative)**: `#ff3b30` - Alternative red variant
- **Wise Red Dark**: `#F87171` - Dark red variant

### Special Colors
- **Chip Yellow**: `#FFC700` - Yellow accent for chips/badges

### Gray Scale (Tailwind Defaults Used)
- Gray-50, Gray-100, Gray-200, Gray-300, Gray-400, Gray-500, Gray-600, Gray-700, Gray-800, Gray-900

## Typography

### Font Family
- **Display Font**: `Plus Jakarta Sans` - Primary font family
- **Fallback**: `sans-serif`
- **Icon Font**: `Material Symbols Outlined` - For iconography

### Font Weights
- **Normal**: `400` - Regular text
- **Medium**: `500` - Medium emphasis
- **Semibold**: `600` - Semi-bold emphasis
- **Bold**: `700` - Bold text
- **Extrabold**: `800` - Extra bold (for large amounts/headings)

### Font Sizes (Tailwind Scale)
- **xs**: `0.75rem` (12px) - Extra small text (timestamps, labels)
- **sm**: `0.875rem` (14px) - Small text (secondary info)
- **base**: `1rem` (16px) - Base body text
- **lg**: `1.125rem` (18px) - Large text (section headings)
- **xl**: `1.25rem` (20px) - Extra large (page titles)
- **2xl**: `1.5rem` (24px) - 2X large (major headings)
- **3xl**: `1.875rem` (30px) - 3X large
- **4xl**: `2.25rem` (36px) - 4X large (amount displays)
- **5xl**: `3rem` (48px) - 5X large
- **6xl**: `3.75rem` (60px) - 6X large
- **7xl**: `4.5rem` (72px) - 7X large (large icons)

### Line Heights
- **leading-tight**: `1.25` - Tight line height (headings)
- **leading-normal**: Default (1.5) - Normal line height

### Letter Spacing
- **tracking-tighter**: `-0.05em` - Tighter letter spacing (amounts)
- **tracking-[-0.015em]**: Custom tight tracking for headings

## Layout & Spacing

### Container Widths
- **Max Width (Primary)**: `420px` - Main mobile container width
- **Max Width (Small)**: `384px` (max-w-sm) - Alternative container width
- **Max Width (Button)**: `480px` - Maximum button width

### Padding Patterns
- **Horizontal Padding**:
  - `px-4` (1rem / 16px) - Standard horizontal padding
  - `px-6` (1.5rem / 24px) - Larger horizontal padding
- **Vertical Padding**:
  - `py-2` (0.5rem / 8px) - Small vertical padding
  - `py-3` (0.75rem / 12px) - Medium vertical padding
  - `py-4` (1rem / 16px) - Standard vertical padding
  - `py-6` (1.5rem / 24px) - Large vertical padding
  - `py-8` (2rem / 32px) - Extra large vertical padding
- **All-Around Padding**:
  - `p-3` (0.75rem / 12px) - Small padding
  - `p-4` (1rem / 16px) - Standard padding
  - `p-6` (1.5rem / 24px) - Large padding

### Margin Patterns
- **Horizontal Margins**: `mx-auto` - Center alignment
- **Vertical Margins**:
  - `mt-1`, `mt-2`, `mt-4`, `mt-6` - Top margins
  - `mb-3`, `mb-4` - Bottom margins
  - `pt-4`, `pt-6` - Padding-top (used as spacing)
  - `pb-28`, `pb-52` - Bottom padding for navigation clearance

### Gap Values (Flexbox/Grid)
- **gap-1**: `0.25rem` (4px) - Minimal gap
- **gap-1.5**: `0.375rem` (6px) - Small gap
- **gap-2**: `0.5rem` (8px) - Standard small gap
- **gap-3**: `0.75rem` (12px) - Medium gap
- **gap-4**: `1rem` (16px) - Standard gap
- **gap-6**: `1.5rem` (24px) - Large gap

### Spacing Utilities (Space Between)
- **space-y-3**: `0.75rem` (12px) vertical spacing between children
- **space-y-4**: `1rem` (16px) vertical spacing between children
- **space-x-3**: `0.75rem` (12px) horizontal spacing between children

## Border Radius

- **DEFAULT**: `1rem` (16px) - Standard border radius
- **lg**: `1.25rem` (20px) - Large border radius
- **xl**: `1.5rem` (24px) or `3rem` (48px) - Extra large border radius (varies by context)
- **full**: `9999px` - Fully rounded (circles, pills)
- **rounded-lg**: `0.5rem` (8px) - Large rounded corners
- **rounded-xl**: `0.75rem` (12px) - Extra large rounded corners
- **rounded-md**: `0.375rem` (6px) - Medium rounded corners
- **rounded-sm**: `0.125rem` (2px) - Small rounded corners

## Component Spacing

### Section Padding
- **Section Padding**: `px-4 py-6` - Standard section padding
- **Header Padding**: `p-4 pb-3` - Header with reduced bottom padding
- **Main Content Padding**: `px-4 py-6 pb-28` - Main content with bottom clearance for navigation

### Component Gaps
- **Card Internal Spacing**: `p-4` with `space-y-3` or `space-y-4`
- **List Item Spacing**: `gap-2` or `gap-4` between items
- **Form Field Spacing**: `mt-1` or `mt-4` between label and input

### Navigation Spacing
- **Bottom Navigation Height**: `pb-28` or `pb-52` - Clearance for fixed bottom nav
- **Nav Item Padding**: `p-2` or `py-1` with `gap-1` or `gap-1.5`

## Shadows

- **shadow-sm**: Small shadow (cards, badges)
- **shadow-md**: Medium shadow (buttons, elevated cards)
- **shadow-lg**: Large shadow (main container, modals)

## Opacity & Backdrop

- **Backdrop Blur**: `backdrop-blur-sm`, `backdrop-blur-lg` - For overlays and fixed elements
- **Background Opacity**: `bg-white/80`, `bg-background-dark/80`, `bg-background-dark/90` - Semi-transparent backgrounds

## Border Colors

- **Border Light**: `border-gray-200`, `border-gray-200/50` - Light mode borders
- **Border Dark**: `border-gray-800`, `border-gray-800/50`, `border-gray-700` - Dark mode borders
- **Border Subtle**: `border-white/10` - Very subtle borders for dark mode

## Z-Index Layers

- **z-10**: Standard elevated elements (headers, fixed bottom nav)
- **z-20**: Higher priority elements (sticky headers, modals)

## Responsive Patterns

### Mobile-First Approach
- All designs are mobile-first with max-width constraints
- Standard viewport: `width=device-width, initial-scale=1.0`
- Minimum height: `min-height: max(884px, 100dvh)` or `min-height: max(812px, 100dvh)`

### Container Patterns
- Main container: `max-w-[420px]` with `mx-auto`
- Full-width elements: `w-full`
- Fixed positioning: Used for bottom navigation and headers

## Component-Specific Patterns

### Buttons
- **Primary Button**: `rounded-full bg-primary` or `bg-accent` with `py-4` and `text-lg font-bold`
- **Secondary Button**: `rounded-full bg-card-light` or `bg-card-dark` with appropriate text colors
- **Button Padding**: `px-4 py-2` (small), `py-4` (standard), `py-3` (medium)

### Cards
- **Card Background**: `bg-card-light` or `bg-card-dark`
- **Card Padding**: `p-4` or `p-6`
- **Card Border Radius**: `rounded-xl` (1rem) or `rounded-lg` (0.5rem)

### Badges/Status Indicators
- **Badge Padding**: `px-3 py-1` or `px-2.5 py-0.5`
- **Badge Border Radius**: `rounded-full`
- **Badge Font Size**: `text-xs` or `text-sm`

### Icons
- **Icon Sizes**: `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-7xl` (72px)
- **Icon Spacing**: Used with `gap-1`, `gap-1.5`, or `gap-2` in flex containers

### Profile Images
- **Small Avatar**: `h-10 w-10` (40px)
- **Medium Avatar**: `h-20 w-20` (80px)
- **Avatar Border Radius**: `rounded-full`

## Dark Mode Considerations

- Dark mode uses `class` strategy (Tailwind darkMode: "class")
- Color variants exist for both light and dark modes
- Text colors adapt: light text on dark backgrounds, dark text on light backgrounds
- Card backgrounds are darker in dark mode
- Borders are more subtle in dark mode (lower opacity)

