# Component Library

## Buttons

### Primary Button (Accent)
- **Classes**: `w-full rounded-full bg-accent py-4 text-center text-lg font-bold text-white shadow-md transition hover:bg-opacity-90`
- **Usage**: Main call-to-action buttons (Send Request, Done, Next, Send Requests)
- **Found in**: Dashboard 1, 11, 13, 15, 19, 20, 21, 23
- **States**: 
  - Default: `bg-accent text-white`
  - Hover: `hover:bg-opacity-90`
- **Variants**:
  - With icon: `flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 text-center text-lg font-bold text-white`
  - Smaller: `rounded-full bg-accent px-8 py-3 text-center text-lg font-bold text-white shadow-md transition hover:bg-opacity-90`

### Primary Button (Primary Color)
- **Classes**: `w-full rounded-full bg-primary py-4 text-center text-base font-bold text-white`
- **Usage**: Primary actions (Pay Now, Acknowledge, Send Reminder)
- **Found in**: Dashboard 2, 4, 5, 8, 9, 16, 24, 27
- **States**:
  - Default: `bg-primary text-white`
  - Hover: `hover:opacity-90` or `transition-opacity hover:opacity-90`
- **Variants**:
  - With icon: `flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-center text-base font-bold text-white`
  - Dark mode: `bg-primary-bright` (brighter variant for dark mode)

### Secondary Button
- **Classes**: `w-full rounded-full bg-card-light py-4 text-center text-base font-bold text-text-primary transition-colors hover:bg-gray-200`
- **Usage**: Secondary actions (Reject, Cancel)
- **Found in**: Dashboard 2, 8, 9, 21, 24
- **States**:
  - Default: `bg-card-light` or `bg-gray-200`
  - Hover: `hover:bg-gray-200` or `hover:bg-gray-300`
- **Variants**:
  - Dark mode: `bg-card-dark text-text-primary-dark hover:bg-gray-700`
  - Full width reject: `w-full rounded-full bg-gray-200 py-4 text-center text-base font-bold text-gray-800`

### Icon Button (Back)
- **Classes**: `flex items-center justify-center h-10 w-10` with `material-symbols-outlined text-2xl`
- **Usage**: Navigation back button in headers
- **Found in**: Dashboard 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 24, 25, 26, 27, 28
- **Icon**: `arrow_back_ios_new` or `arrow_back`
- **States**: Default only (no hover states defined)
- **Variants**:
  - Larger: `flex h-12 w-12 items-center justify-center rounded-full`
  - With text color: `text-gray-700`, `text-gray-800`, `text-gray-300` (dark mode)

### Icon Button (Menu/More)
- **Classes**: `flex items-center justify-center h-10 w-10` with `material-symbols-outlined text-2xl`
- **Usage**: Menu/options button in headers
- **Found in**: Dashboard 6, 7, 15, 28
- **Icon**: `more_horiz`
- **States**: Default only

### Icon Button (Notification)
- **Classes**: `flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-gray-700 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0`
- **Usage**: Notification bell in header
- **Found in**: Dashboard 18, 22
- **Icon**: `notifications` (text-3xl)
- **States**: Default only

### Filter Tab Button (Active)
- **Classes**: `whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-bold text-white`
- **Usage**: Active filter tab in transaction lists
- **Found in**: Dashboard 3, 25
- **States**: Active state only

### Filter Tab Button (Inactive)
- **Classes**: `whitespace-nowrap rounded-full bg-card-light px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200`
- **Usage**: Inactive filter tabs
- **Found in**: Dashboard 3, 25
- **States**:
  - Default: `bg-card-light text-gray-700`
  - Hover: `hover:bg-gray-200`
- **Variants**:
  - Dark mode: `bg-card-dark text-gray-300 hover:bg-gray-700`

### Quick Action Button
- **Classes**: `flex flex-col items-center justify-center gap-2 rounded-lg bg-card-light p-4 text-black hover:bg-gray-200 transition-colors`
- **Usage**: Quick action buttons on homepage (Request, Pay, Split)
- **Found in**: Dashboard 18, 22
- **Icon**: Material Symbols (call_received, call_made, receipt_long)
- **States**:
  - Default: `bg-card-light`
  - Hover: `hover:bg-gray-200`
- **Variants**:
  - Dark mode: `bg-card-dark text-gray-200 hover:bg-gray-800`

### Small Action Button
- **Classes**: `rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary`
- **Usage**: Small utility buttons (Split Equally, Edit Amounts)
- **Found in**: Dashboard 19, 20, 21
- **States**: Default only
- **Variants**:
  - Secondary: `rounded-full bg-gray-200 px-4 py-1.5 text-sm font-semibold text-gray-700`

### Button with Icon (Remind)
- **Classes**: `flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-base font-bold text-white transition-colors hover:bg-accent/90`
- **Usage**: Remind Pending button with notification icon
- **Found in**: Dashboard 6, 28
- **Icon**: `notifications` (text-xl)
- **States**:
  - Default: `bg-accent`
  - Hover: `hover:bg-accent/90`

---

## Cards

### Transaction Card
- **Structure**: Profile image + Description + Amount + Timestamp
- **Classes**: `flex items-center gap-4 rounded-lg bg-card-light p-3`
- **Usage**: Transaction list items
- **Found in**: Dashboard 3, 18, 22, 25
- **Layout**:
  - Container: `flex items-center gap-4 rounded-lg bg-card-light p-3`
  - Image: `flex-shrink-0` with `h-10 w-10 rounded-full object-cover`
  - Content: `flex-grow` with title and subtitle
  - Amount: `shrink-0 text-right` with color-coded amount
- **Responsive**: Full width, stacks on mobile
- **Variants**:
  - Dark mode: `bg-card-dark` with `text-gray-50` for text
  - With icon placeholder: `flex h-10 w-10 items-center justify-center rounded-full bg-gray-200` (for splits)

### Detail Card
- **Structure**: Title + Key-value pairs
- **Classes**: `bg-card-light rounded-xl p-4 space-y-3`
- **Usage**: Transaction details, bill details
- **Found in**: Dashboard 2, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 24, 26, 27, 28
- **Layout**:
  - Container: `bg-card-light rounded-xl p-4 space-y-3`
  - Title: `text-base font-bold text-text-primary mb-3`
  - Row: `flex justify-between items-center` or `flex justify-between items-start`
  - Label: `text-text-secondary font-medium`
  - Value: `font-bold text-right text-text-primary`
- **Responsive**: Full width
- **Variants**:
  - Dark mode: `bg-card-dark` with appropriate text colors
  - Without title: Just key-value pairs

### Status Card
- **Structure**: Label + Status badge
- **Classes**: `bg-card-light rounded-xl p-4 flex justify-between items-center`
- **Usage**: Status display in transaction details
- **Found in**: Dashboard 2, 4, 5, 6, 7, 8, 9, 10, 16, 17, 24, 26, 27
- **Layout**:
  - Container: `bg-card-light rounded-xl p-4 flex justify-between items-center`
  - Label: `text-text-secondary font-medium`
  - Badge: Status badge component (see Badges section)
- **Variants**:
  - Dark mode: `bg-card-dark`
  - Error state: `bg-red-100` (for rejected transactions)

### Balance Card
- **Structure**: Icon + Label + Amount
- **Classes**: `flex flex-col items-start justify-start rounded-lg bg-card-light p-4`
- **Usage**: Balance overview cards (You Owe, Owed to You)
- **Found in**: Dashboard 18, 22
- **Layout**:
  - Container: `flex flex-col items-start justify-start rounded-lg bg-card-light p-4`
  - Icon container: `flex h-6 w-6 items-center justify-center rounded-full bg-wise-red/10` or `bg-wise-green/10`
  - Icon: `material-symbols-outlined text-wise-red text-sm` (arrow_upward/arrow_downward)
  - Label: `text-gray-600 text-sm font-medium`
  - Amount: `text-wise-red text-xl font-bold mt-2` or `text-wise-green`
- **Responsive**: Grid layout `grid-cols-2 gap-4`
- **Variants**:
  - Dark mode: `bg-card-dark` with dark mode colors

### Participant Card
- **Structure**: Profile image + Name + Status badge + Amount
- **Classes**: `flex items-center gap-4 bg-card-light p-3 rounded-lg`
- **Usage**: Participant list in split bills
- **Found in**: Dashboard 6, 7, 15, 28
- **Layout**:
  - Container: `flex items-center gap-4 bg-card-light p-3 rounded-lg`
  - Image: `flex-shrink-0` with `h-10 w-10 rounded-full object-cover`
  - Content: `flex-grow` with name and status badge
  - Amount: `shrink-0 text-right`
- **Variants**:
  - Dark mode: `bg-card-dark`

### Contact Card
- **Structure**: Profile image + Name
- **Classes**: `flex cursor-pointer items-center gap-4 py-3 border-b border-gray-100`
- **Usage**: Contact selection lists
- **Found in**: Dashboard 12
- **Layout**:
  - Container: `flex cursor-pointer items-center gap-4 py-3 border-b border-gray-100`
  - Image: `h-12 w-12 rounded-full object-cover`
  - Name: `flex-1 text-base font-medium text-gray-900`
- **States**: Clickable (cursor-pointer)

### Friend Selection Card
- **Structure**: Checkbox + Profile image + Name + Username
- **Classes**: `flex cursor-pointer items-center justify-between rounded-lg bg-card-light p-3`
- **Usage**: Friend selection with checkboxes
- **Found in**: Dashboard 14
- **Layout**:
  - Container: `flex cursor-pointer items-center justify-between rounded-lg bg-card-light p-3`
  - Left: `flex items-center gap-3` with image and text
  - Right: Checkbox input
- **States**: Checked/unchecked

---

## Forms

### Amount Input (Large)
- **Classes**: `w-full border-0 bg-transparent p-0 pl-16 text-center text-7xl font-bold text-gray-900 placeholder-gray-300 focus:ring-0`
- **Usage**: Large amount entry (bill amount)
- **Found in**: Dashboard 11, 13
- **Structure**:
  - Container: `relative`
  - Prefix: `absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold text-gray-400` (ETB)
  - Input: Large centered text input
- **Placeholder**: "0.00"
- **States**: Focus state removes ring

### Amount Input (Medium)
- **Classes**: `w-full border-none bg-transparent pl-[70px] text-center text-6xl font-bold text-gray-900 focus:ring-0`
- **Usage**: Medium amount entry (request amount)
- **Found in**: Dashboard 15
- **Structure**: Similar to large but smaller text size
- **Prefix**: "ETB" positioned absolutely

### Text Input (Standard)
- **Classes**: `w-full rounded-md border-gray-300 bg-card-light px-3 py-2.5 shadow-sm focus:border-primary focus:ring-primary`
- **Usage**: Standard text inputs (description, etc.)
- **Found in**: Dashboard 11, 15
- **States**:
  - Default: `border-gray-300`
  - Focus: `focus:border-primary focus:ring-primary`
- **Variants**:
  - Rounded full: `rounded-full` (for search inputs)

### Search Input
- **Classes**: `w-full rounded-full border-gray-300 bg-card-light py-2.5 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary`
- **Usage**: Search functionality
- **Found in**: Dashboard 12, 14
- **Structure**:
  - Container: `relative`
  - Icon: `absolute left-3 top-1/2 -translate-y-1/2 text-gray-400` (search icon)
  - Input: Full width with left padding for icon
- **Placeholder**: "Search by name" or "Search friends..."

### Date/Time Input
- **Classes**: `mt-1 block w-full rounded-md border-gray-300 bg-card-light px-3 py-2.5 shadow-sm focus:border-primary focus:ring-primary`
- **Usage**: Date and time selection
- **Found in**: Dashboard 11, 15
- **Layout**: Grid layout `grid-cols-2 gap-4`
- **Types**: `type="date"` and `type="time"`

### Checkbox
- **Classes**: `h-6 w-6 rounded-md border-gray-300 text-primary focus:ring-primary`
- **Usage**: Friend selection, options
- **Found in**: Dashboard 14
- **States**:
  - Default: `border-gray-300`
  - Checked: `checked` attribute
  - Focus: `focus:ring-primary`

### Amount Input (Small - Editable)
- **Classes**: `w-full rounded-md border-gray-300 text-right font-semibold text-gray-700 focus:border-primary focus:ring-primary`
- **Usage**: Editable amount fields in participant lists
- **Found in**: Dashboard 20
- **Structure**:
  - Container: `relative w-28`
  - Input: Right-aligned text
  - Suffix: `absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400` (ETB)

---

## Navigation

### Bottom Navigation
- **Structure**: Fixed bottom nav with 4-5 items
- **Classes**: `fixed bottom-0 left-0 right-0 z-10 flex justify-around items-center p-2 bg-white/90 backdrop-blur-sm border-t border-gray-200/50`
- **Usage**: Main app navigation
- **Found in**: All dashboards (28 files)
- **Layout**:
  - Container: Fixed positioning, full width, backdrop blur
  - Items: `flex flex-col items-center justify-center gap-1 text-gray-500 w-20 py-1`
  - Active: `text-accent` or `text-primary`
  - Icon: `material-symbols-outlined`
  - Label: `text-xs font-medium`
- **Items**: Home, Transactions/Actions/History, Split/Receipt, Groups (some), Profile
- **Variants**:
  - Dark mode: `bg-background-dark/90 backdrop-blur-sm border-t border-gray-800/50` or `bg-background-dark/80 backdrop-blur-lg border-t border-gray-200/20`
  - With links: Some use `<a>` tags instead of buttons
  - Filled icon: `material-symbols-outlined filled` for active state

### Header (Standard)
- **Structure**: Back button + Title + Optional action
- **Classes**: `flex items-center bg-background-light p-4 pb-3 justify-between sticky top-0 z-10`
- **Usage**: Page headers with navigation
- **Found in**: Dashboard 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 24, 25, 26, 27, 28
- **Layout**:
  - Container: `flex items-center justify-between sticky top-0 z-10`
  - Left: `flex size-10 shrink-0 items-center justify-start` (back button)
  - Center: `flex-1 text-center` (title)
  - Right: `flex w-10 items-center justify-end` (optional action)
- **Title**: `text-lg font-bold leading-tight` or `text-xl font-bold leading-tight tracking-[-0.015em]`
- **Variants**:
  - With border: `border-b border-gray-200`
  - Dark mode: `bg-background-dark` with appropriate text colors

### Header (Home)
- **Structure**: Profile image + Title + Notification button
- **Classes**: `flex items-center bg-background-light p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-200`
- **Usage**: Homepage header
- **Found in**: Dashboard 18, 22
- **Layout**:
  - Left: Profile image `h-10 w-10 rounded-full`
  - Center: "Gefter" title
  - Right: Notification button
- **Variants**:
  - Dark mode: `bg-background-dark border-b border-gray-800`

### Filter Tabs Container
- **Structure**: Horizontal scrollable filter buttons
- **Classes**: `sticky top-0 z-10 bg-background-light py-4 px-4` with `flex items-center gap-2 overflow-x-auto pb-1`
- **Usage**: Transaction list filters
- **Found in**: Dashboard 3, 25
- **Layout**: Horizontal scrollable container with filter buttons
- **Variants**:
  - Dark mode: `bg-background-dark`

---

## Status Badges

### Status Badge (Paid - Green)
- **Classes**: `inline-flex items-center gap-1.5 font-bold text-wise-green bg-green-100 px-3 py-1 rounded-full text-sm`
- **Usage**: Paid transaction status
- **Found in**: Dashboard 8, 9
- **Icon**: `check_circle` (optional)
- **Variants**:
  - Dark mode: `text-wise-green-bright bg-wise-green-bright/20`
  - Without icon: Just text and background

### Status Badge (Pending - Yellow)
- **Classes**: `font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-sm`
- **Usage**: Pending transaction status
- **Found in**: Dashboard 4, 5, 9, 10, 16, 17, 26
- **Variants**:
  - Dark mode: `text-yellow-300 bg-yellow-900/50`
  - With chip yellow: `bg-chip-yellow px-2.5 py-0.5 text-xs font-semibold text-yellow-800`

### Status Badge (Rejected - Red)
- **Classes**: `font-bold text-red-600 bg-red-200 px-3 py-1 rounded-full text-sm`
- **Usage**: Rejected transaction status
- **Found in**: Dashboard 10, 17
- **Icon**: `error` or `warning` (optional)
- **Variants**:
  - With background: `bg-red-100` container

### Status Badge (Marked as Paid - Blue)
- **Classes**: `inline-flex items-center gap-1.5 font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm`
- **Usage**: Marked as paid status
- **Found in**: Dashboard 2, 24
- **Icon**: `hourglass_top`
- **Variants**:
  - Dark mode: `text-blue-300 bg-blue-900/50`

### Status Badge (Acknowledged - Green)
- **Classes**: `inline-flex items-center gap-1.5 font-bold text-wise-green-bright bg-wise-green-bright/20 px-3 py-1 rounded-full text-sm`
- **Usage**: Acknowledged status
- **Found in**: Dashboard 5, 27
- **Icon**: `check_circle`
- **Variants**: Dark mode optimized

### Participant Status Badge (Paid)
- **Classes**: `inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800`
- **Usage**: Participant payment status in splits
- **Found in**: Dashboard 6, 28
- **Variants**:
  - Dark mode: `bg-green-900/50 text-green-300`

### Participant Status Badge (Pending)
- **Classes**: `inline-block rounded-full bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-yellow-800`
- **Usage**: Participant pending status in splits
- **Found in**: Dashboard 6, 28
- **Variants**:
  - Dark mode: `bg-yellow-900/50 text-yellow-300`

---

## Layout Components

### Modal Overlay
- **Structure**: Dark overlay with centered modal
- **Classes**: `absolute inset-0 bg-black/40 z-10 flex items-center justify-center p-6`
- **Usage**: Modal dialogs (amount editing, confirmations)
- **Found in**: Dashboard 19, 21
- **Layout**:
  - Overlay: `absolute inset-0 bg-black/40 z-10 flex items-center justify-center p-6`
  - Modal: `w-full max-w-sm rounded-lg bg-background-light p-6 text-center`
- **Content**: Custom content (amount input, buttons)

### Toast Notification
- **Structure**: Fixed bottom notification
- **Classes**: `absolute inset-x-0 bottom-24 z-20 flex justify-center px-4`
- **Usage**: Success/error notifications
- **Found in**: Dashboard 16
- **Layout**:
  - Container: `flex items-center gap-3 rounded-full bg-black/80 px-4 py-3 text-white shadow-lg backdrop-blur-sm`
  - Icon: `check_circle` (text-xl)
  - Message: `text-sm font-medium`
- **Position**: Fixed above bottom navigation

### Profile Image Stack
- **Structure**: Overlapping profile images
- **Classes**: `relative` with absolute positioned second image
- **Usage**: Transaction details showing sender/receiver
- **Found in**: Dashboard 2, 4, 5, 8, 9, 10, 16, 17, 24, 26, 27
- **Layout**:
  - Container: `relative mb-4`
  - Primary: `h-20 w-20 rounded-full object-cover`
  - Secondary: `absolute -right-2 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-background-light shadow-sm` with `h-7 w-7 rounded-full object-cover`
- **Variants**:
  - Dark mode: `bg-background-dark` or `bg-card-dark`

### Section Header
- **Structure**: Title + Optional action link
- **Classes**: `flex items-center justify-between`
- **Usage**: Section titles with "See all" links
- **Found in**: Dashboard 18, 22
- **Layout**:
  - Title: `text-gray-900 text-lg font-bold leading-tight`
  - Link: `text-accent text-sm font-bold`

### Empty State Icon
- **Structure**: Icon in circular background
- **Classes**: `flex h-16 w-16 items-center justify-center rounded-full bg-card-light mb-4`
- **Usage**: Empty states, bill icons
- **Found in**: Dashboard 6, 7, 15, 28
- **Icon**: `receipt_long` (text-4xl)
- **Variants**:
  - Dark mode: `bg-card-dark`

### Summary Bar
- **Structure**: Two-column summary display
- **Classes**: `flex justify-around` with two columns
- **Usage**: Total bill and remaining amount display
- **Found in**: Dashboard 20
- **Layout**:
  - Container: `p-6 text-center bg-white border-b border-gray-200`
  - Columns: `flex justify-around`
  - Label: `text-sm text-gray-500`
  - Value: `text-2xl font-bold tracking-tight text-gray-900`

### Action Button Group
- **Structure**: Two buttons side-by-side
- **Classes**: `flex flex-row gap-3` with `w-1/2` buttons
- **Usage**: Binary choices (Reject/Acknowledge)
- **Found in**: Dashboard 2, 9, 24
- **Layout**:
  - Container: `p-4 border-t border-gray-200/50` or fixed bottom
  - Buttons: `w-1/2 rounded-full` (one secondary, one primary)

---

## Icons

### Material Symbols Usage
- **Font**: Material Symbols Outlined
- **Common Icons**:
  - Navigation: `home`, `arrow_back_ios_new`, `arrow_back`, `more_horiz`
  - Transactions: `swap_horiz`, `receipt_long`, `call_received`, `call_made`
  - Status: `check_circle`, `error`, `warning`, `hourglass_top`
  - Actions: `notifications`, `person`, `account_circle`, `group`, `pie_chart`
  - Search: `search`
- **Sizes**: `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-7xl` (72px), `text-xl` (20px), `text-base` (16px), `text-sm` (14px)
- **Filled Variant**: `material-symbols-outlined filled` for active states

---

## Responsive Patterns

### Container Max Width
- **Primary**: `max-w-[420px]` (420px)
- **Small**: `max-w-sm` (384px)
- **Modal**: `max-w-sm` (384px)

### Grid Layouts
- **Two Column**: `grid grid-cols-2 gap-4` (balance cards, date/time inputs)
- **Three Column**: `grid grid-cols-3 gap-4` (quick actions)

### Spacing
- **Section Gap**: `gap-4` or `gap-6`
- **Card Padding**: `p-3`, `p-4`, `p-6`
- **Bottom Clearance**: `pb-28`, `pb-40`, `pb-52` (for fixed navigation)

---

## Dark Mode Adaptations

### Background Colors
- Light: `bg-background-light` (#ffffff)
- Dark: `bg-background-dark` (#101322)

### Card Colors
- Light: `bg-card-light` (#f6f6f8, #F7F7F7)
- Dark: `bg-card-dark` (#1f212f, #1E1E1E)

### Text Colors
- Light Primary: `text-text-primary` (#1C1C1E) or `text-gray-900`
- Light Secondary: `text-text-secondary` (#6B7280) or `text-gray-500`
- Dark Primary: `text-text-primary-dark` (#FFFFFF) or `text-gray-100`
- Dark Secondary: `text-text-secondary-dark` (#9CA3AF) or `text-gray-400`

### Border Colors
- Light: `border-gray-200`
- Dark: `border-gray-800`, `border-gray-700`

### Button Adaptations
- Primary buttons use brighter variants: `bg-primary-bright`
- Hover states adjusted for dark backgrounds

---

## Component Usage Summary

### Most Used Components (Found in 10+ files)
1. **Bottom Navigation**: 28 files
2. **Header (Standard)**: 16+ files
3. **Transaction Card**: 4+ files
4. **Detail Card**: 15+ files
5. **Status Badge**: 15+ files
6. **Primary Button**: 20+ files
7. **Icon Button (Back)**: 16+ files

### Component Categories
- **Navigation**: 2 components (Bottom Nav, Headers)
- **Buttons**: 8+ variants
- **Cards**: 6+ types
- **Forms**: 7+ input types
- **Badges**: 6+ status types
- **Layout**: 6+ components

