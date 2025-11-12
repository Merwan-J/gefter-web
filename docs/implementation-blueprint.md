# Implementation Blueprint

## Required Components

### Priority 1 – Core Components
- [ ] `AppShell` (layout wrapper)
  - Props: `children`, `variant` (`'light' | 'dark'`), `showBottomNav` (boolean)
- [ ] `HeaderBar`
  - Props: `title`, `leftAction`, `rightAction`, `variant` (`'default' | 'home'`)
- [ ] `BottomNavigation`
  - Props: `activeRoute`, `items` (array of `{ label, icon, href }`)
- [ ] `Button`
  - Props: `variant` (`'accent' | 'primary' | 'secondary' | 'icon'`), `size` (`'sm' | 'md' | 'lg'`), `icon`, `fullWidth`, `onClick`, `disabled`
- [ ] `IconButton`
  - Props: `icon`, `label`, `variant` (`'bare' | 'rounded'`), `href`, `onClick`
- [ ] `StatusBadge`
  - Props: `status` (`'paid' | 'pending' | 'acknowledged' | 'rejected' | 'markedAsPaid'`), `withIcon`
- [ ] `Card`
  - Props: `variant` (`'transaction' | 'detail' | 'status' | 'balance' | 'participant'`), `header`, `content`, `footer`
- [ ] `Avatar`
  - Props: `src`, `alt`, `size` (`'sm' | 'md' | 'lg'`), `fallback`
- [ ] `FormField`
  - Props: `label`, `description`, `type`, `value`, `onChange`, `error`, `hint`, `icon`
- [ ] `Toast`
  - Props: `message`, `variant` (`'success' | 'error' | 'info'`), `onDismiss`, `autoDismiss`

### Priority 2 – Page Components
- [ ] `HomeSummary`
  - Props: `balance`, `owed`, `youOwe`
- [ ] `QuickActions`
  - Props: `actions` (array of `{ label, icon, href, onClick }`)
- [ ] `TransactionsList`
  - Props: `transactions`, `filter`, `onFilterChange`
- [ ] `TransactionsFilters`
  - Props: `activeFilter`, `onSelect`
- [ ] `TransactionDetail`
  - Props: `transaction`, `onAction`
- [ ] `SplitParticipants`
  - Props: `participants`, `onReminder`, `onPay`, `editable`
- [ ] `ContactSearch`
  - Props: `contacts`, `onSelect`, `onSearch`
- [ ] `AmountInput`
  - Props: `value`, `onChange`, `prefix`, `size`
- [ ] `ScheduleInputs`
  - Props: `date`, `time`, `onDateChange`, `onTimeChange`
- [ ] `SplitAmountEditor`
  - Props: `participants`, `onChange`, `remaining`
- [ ] `ReminderToast`
  - Props: `visible`, `message`

### Priority 3 – Enhancements
- [ ] `NotificationMenu`
  - Props: `notifications`, `onDismissAll`
- [ ] `BottomSheet`
  - Props: `isOpen`, `onClose`, `children`
- [ ] `TransitionWrapper`
  - Props: `children`, `animation` (`'fade' | 'slide-up'`)
- [ ] `ThemeToggle`
  - Props: `value`, `onChange`
- [ ] `SkeletonLoader`
  - Props: `variant`, `count`
- [ ] `ErrorBoundary`
  - Props: `children`

## Design System Setup
```javascript
// Color System
const colors = {
  primary: '#9F2142',
  primaryBright: '#BF284E',
  accent: '#9F2142',
  accentAlt: '#C42A51',
  accentDark: '#d44a6d',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#101322',
  backgroundDarkAlt: '#121212',
  cardLight: '#F6F6F8',
  cardLightAlt: '#F7F7F7',
  cardDark: '#1F212F',
  cardDarkAlt: '#1E1E1E',
  textPrimary: '#1C1C1E',
  textSecondary: '#6B7280',
  textPrimaryDark: '#FFFFFF',
  textSecondaryDark: '#9CA3AF',
  textLightPrimary: '#F5F5F7',
  textLightSecondary: '#A0AEC0',
  wiseGreen: '#29A349',
  wiseGreenBright: '#33D15B',
  wiseGreenAlt: '#4CD964',
  wiseRed: '#E53E3E',
  wiseRedAlt: '#FF3B30',
  wiseRedDark: '#F87171',
  chipYellow: '#FFC700',
  gray100: '#F5F5F5',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827'
}

// Typography System
const typography = {
  fontFamily: {
    display: '"Plus Jakarta Sans", sans-serif',
    body: '"Plus Jakarta Sans", sans-serif'
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem'
  },
  lineHeights: {
    tight: 1.25,
    snug: 1.35,
    normal: 1.5
  },
  letterSpacing: {
    tight: '-0.015em',
    tighter: '-0.05em',
    normal: '0'
  }
}

// Spacing Scale (rem)
const spacing = {
  px: '1px',
  0: '0rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem'
}

// Border Radius
const radii = {
  sm: '0.125rem',
  md: '0.375rem',
  lg: '1rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '3rem',
  full: '9999px'
}

// Shadows
const shadows = {
  sm: '0 1px 2px rgba(15, 23, 42, 0.12)',
  md: '0 4px 12px rgba(15, 23, 42, 0.12)',
  lg: '0 12px 24px rgba(15, 23, 42, 0.16)'
}

// Animation Durations (ms)
const motion = {
  fast: 150,
  base: 250,
  slow: 400
}
```

## Forbidden – DO NOT CREATE
- ❌ New color tokens beyond those listed in the design system
- ❌ Additional button styles outside the defined variants
- ❌ Custom typography scales
- ❌ Custom modal frameworks (use provided layout patterns)
- ❌ Introducing third-party UI libraries (maintain Tailwind/React stack)
- ❌ Persisted global state without design justification (e.g., cart, wishlist)
- ❌ Animations not aligned with motion scale
- ❌ New icon sets (stick to Material Symbols Outlined)
- ❌ Creating unused page routes (implement only documented flows)
- ❌ Adding form fields not specified in the flows

## Build Sequence
1. **Foundation**
   - Configure Tailwind with extracted color, spacing, typography, radii, and shadow tokens
   - Add global CSS variables (if required) for light/dark themes
   - Integrate Material Symbols and Plus Jakarta Sans fonts
2. **Core Layout & Utilities**
   - Implement `AppShell`, `HeaderBar`, `BottomNavigation`, `Card`, `Button`, `IconButton`, `Avatar`, `StatusBadge`
   - Build utility hooks (e.g., `useTheme`, `useToast`)
3. **Form Infrastructure**
   - Create `FormField`, `AmountInput`, `ScheduleInputs`, `SplitAmountEditor`
   - Setup form validation helpers (Formik/Zod or custom)
4. **Data Models & Services**
   - Define TypeScript interfaces for transactions, splits, contacts
   - Scaffold API service layer (REST client or React Query setup)
   - Create mock data for initial UI assembly
5. **Page-Level Components**
   - Home: `HomeSummary`, `QuickActions`, `TransactionsList`, `TransactionsFilters`
   - Transactions: detailed view, filter integration
   - Request flow pages: contact search, amount entry, form, success state
   - Split flow pages: amount entry, friend selection, confirm, detail view
6. **Interactions & State**
   - Implement navigation linking between flows
   - Handle reminder toasts, form submissions, state persistence between steps
   - Wire up action handlers (reject, acknowledge, pay, remind)
7. **Enhancements & Polish**
   - Add `NotificationMenu`, `BottomSheet`, `TransitionWrapper`, `ThemeToggle`
   - Introduce skeleton loaders and error boundaries
   - Optimize for accessibility (focus states, ARIA roles)
8. **Testing & QA**
   - Component unit tests (button variants, cards, forms)
   - Flow integration tests (request and split journeys)
   - Visual regression snapshots
   - Performance checks (lazy load heavy assets)

9. **Deployment Readiness**
   - Configure environment variables for API base URLs
   - Setup CI/CD, linting, formatting, type checks
   - Prepare documentation for future contributors
