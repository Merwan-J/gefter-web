# Implementation Validation Checklist

## Design Validation

### Colors
- [ ] Primary (burgundy) `#9F2142` applied to brand elements and CTAs
- [ ] Primary bright `#BF284E` used in dark-mode emphasis buttons
- [ ] Accent alternative `#C42A51` appears only where specified
- [ ] Accent dark `#d44a6d` used for hover/pressed states
- [ ] Primary blue `#1337EC` reserved for blue-themed screens
- [ ] Background light `#FFFFFF` for light surfaces
- [ ] Background dark `#101322` for dark-mode surfaces
- [ ] Card light variants `#F6F6F8` / `#F7F7F7` applied to cards and inputs
- [ ] Card dark variants `#1F212F` / `#1E1E1E` applied in dark mode
- [ ] Text primary `#1C1C1E` for light-mode text
- [ ] Text secondary `#6B7280` for secondary copy
- [ ] Text primary dark `#FFFFFF` for dark-mode text
- [ ] Text secondary dark `#9CA3AF` for dark-mode secondary copy
- [ ] Text light primary `#F5F5F7` used for dark-mode highlights
- [ ] Text light secondary `#A0AEC0` used for dark-mode tertiary text
- [ ] Success greens `#29A349`, `#33D15B`, `#4CD964` applied correctly
- [ ] Error reds `#E53E3E`, `#FF3B30`, `#F87171` applied correctly
- [ ] Chip yellow `#FFC700` used for status chips

### Typography
- [ ] Plus Jakarta Sans loaded via `next/font`
- [ ] Font weights (400, 500, 600, 700, 800) available
- [ ] Heading sizes aligned with Tailwind scale (xs → 7xl)
- [ ] `tracking-[-0.015em]` applied to headers that require it
- [ ] `tracking-tight` (`-0.05em`) applied on amount displays
- [ ] Line heights: `leading-tight`, `leading-normal` match design
- [ ] Icon font (Material Symbols Outlined) loaded once globally

### Spacing & Layout
- [ ] Global spacing tokens (px → 16) used consistently
- [ ] Container width constrained to `max-w-[420px]` on mobile
- [ ] Padding patterns (`px-4`, `py-6`, etc.) match sections
- [ ] Gap utilities (`gap-2`, `gap-4`, `gap-6`) align with layout spec
- [ ] Border radii (`rounded-full`, `rounded-xl`, `rounded-lg`) match designs
- [ ] Shadows (`shadow-elevated-sm/md/lg`) applied to cards and modals
- [ ] Backdrop blur (`backdrop-blur-sm/lg`) used for nav & overlays

### Dark Mode
- [ ] Dark-mode surfaces and text colors switch correctly
- [ ] Card and badge colors use dark-mode variants
- [ ] Bottom navigation and headers respect dark background tokens

## Component Validation

### AppShell
- [ ] Wraps content in `max-w-[420px]` container
- [ ] Applies bottom padding allowing fixed nav
- [ ] Accepts optional bottom navigation items

### HeaderBar
- [ ] Back/left actions render correct Material icon
- [ ] Title centered with `text-lg font-bold`
- [ ] Optional right action (e.g., menu or notifications)
- [ ] Sticky header uses border and backdrop blur

### BottomNavigation
- [ ] Four items: Home, Transactions, Split, Profile
- [ ] Active state uses accent color
- [ ] Uses Material icons with labels under each icon
- [ ] Fixed to bottom with blur and border

### Button Variants
- [ ] Accent button: `bg-accent`, white text, hover dim
- [ ] Primary button: `bg-primary`, white text, hover bright
- [ ] Secondary button: card background, dark text
- [ ] Ghost/transparent variant used for subtle actions
- [ ] Sizes (`sm`, `md`, `lg`) match specified padding
- [ ] `fullWidth` prop stretches to parent width

### IconButton
- [ ] Supports bare and rounded variants
- [ ] Accepts `href` for link usage
- [ ] Material icon renders at 24px

### StatusBadge
- [ ] Supports statuses: paid, pending, acknowledged, rejected, markedAsPaid
- [ ] Colors & labels match design tokens
- [ ] Uses `rounded-full` with correct padding

### Cards
- [ ] Transaction cards: avatar, title, subtitle, amount, timestamp
- [ ] Detail cards: title plus key/value rows
- [ ] Status cards: label + badge
- [ ] Balance cards: icon badge, label, amount

### Avatar
- [ ] Handles image vs initials fallback
- [ ] Supports `sm`, `md`, `lg` sizes
- [ ] Uses circular crop with background fallback

### Forms
- [ ] FormField wraps label, description, hint, error states
- [ ] AmountInput displays currency prefix and large font
- [ ] ScheduleInputs renders date/time fields with consistent styling
- [ ] ContactSearch filters contacts and links to next step
- [ ] SplitAmountEditor updates participant shares

### Home Components
- [ ] HomeSummary displays total, you owe, owed to you
- [ ] QuickActions renders three actions with icons and links
- [ ] TransactionsList composes TransactionCard entries
- [ ] TransactionsFilters toggles four filter states

### Split Components
- [ ] SplitParticipants shows avatar, name, status, amount
- [ ] SplitActions triggers reminder/pay toasts
- [ ] SplitAmountEditor updates amounts and shows ETB suffix

### Request Components
- [ ] ContactSearch integrates search bar and contact list
- [ ] AmountInput, ScheduleInputs used across request flow

### Toast & Modals
- [ ] Toast auto-dismisses and supports variants (success/info/etc.)
- [ ] ReminderToast wrapper uses success styling by default
- [ ] OverlayModal provides title, close button, footer actions, blur

### Page Implementations
- [ ] Home uses HeaderBar, HomeSummary, QuickActions, TransactionsList
- [ ] Transactions list page uses filters and list components
- [ ] Transaction detail uses StatusBadge, DetailCard, TransactionActions
- [ ] Request flow pages use contact search, amount input, form, success
- [ ] Split flow uses amount entry, friend selection, confirm modal, edit amounts, split details

## Functional Validation

### Navigation & Routing
- [ ] Bottom navigation routes match sitemap (`/`, `/transactions`, `/split`, `/profile`)
- [ ] Transaction cards link to `/transactions/:id`
- [ ] Quick actions link to request, pay, split flows
- [ ] Split index redirects to `/split/s1`
- [ ] All router.push usages cast with Next `Route` type

### Request Flow
- [ ] Selecting contact carries `contact` param forward
- [ ] Amount entry updates query string (amount, description)
- [ ] Request form preserves data and optional schedule inputs
- [ ] Success confirmation displays contact + amount summary

### Split Flow
- [ ] Amount step collects amount & description
- [ ] Friend selection toggles checkboxes and shows selected count
- [ ] Confirm step lists participants with shares and supports modal edit
- [ ] Edit amounts page recalculates remaining and split evenly
- [ ] Split detail page shows participants and reminder/pay placeholders

### Transactions Flow
- [ ] Filter buttons update transaction list state
- [ ] Detail page actions trigger toasts for pending/ack/paid states

### Toasts & Modals
- [ ] Reminder toasts auto-dismiss after duration
- [ ] Overlay modal closes via save/cancel and pressing close
- [ ] Amount edit modal updates participant list on save

### Data & State Flow
- [ ] Query params preserved between steps (request & split flows)
- [ ] Mock data matches structure in blueprint (transactions, splits)
- [ ] path alias `@/*` resolves across project
- [ ] Remote images allowed for Googleusercontent avatars

### Accessibility & Error Handling
- [ ] Buttons include aria-labels where icon-only
- [ ] Inputs have labels (visible or aria)
- [ ] Toasts/overlays do not trap focus unexpectedly
- [ ] No console errors or missing modules when running `npm run dev`

## Responsive Behavior
- [ ] Layout tested at mobile width (≤420px)
- [ ] Cards/badges text wrap without overflow
- [ ] Header & bottom nav remain sticky on scroll
- [ ] Modals scale to smaller viewport heights
- [ ] Pages still usable at tablet/desktop widths (centered 420px viewport)

## Final Sign-off
- [ ] Pixel-perfect alignment with reference HTML/screenshots
- [ ] All documented interactions work as expected
- [ ] No console warnings or TypeScript errors
- [ ] Responsive behavior verified on primary breakpoints
