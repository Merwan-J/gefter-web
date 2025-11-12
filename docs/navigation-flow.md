# Navigation Flow

## Site Map

```
Home (/)
├── Transactions (/transactions)
│   ├── Transaction Detail (/transactions/:id)
│   │   ├── [Pending - Owed to User] → Actions: Reject, Acknowledge
│   │   ├── [Pending - User Owes] → Actions: Reject, Acknowledge, Send Reminder
│   │   ├── [Acknowledged] → Action: Pay Now
│   │   ├── [Paid] → Read-only
│   │   └── [Rejected] → Read-only
│   └── Filter Tabs: All, Requests, Payments, Splits
│
├── Request Payment Flow
│   ├── Request From (/request/select-contact)
│   ├── Enter Amount (/request/amount)
│   ├── Request Payment Form (/request/create)
│   │   └── Optional: Date, Time
│   └── Success Confirmation (/request/success)
│
├── Split Bill Flow
│   ├── Enter Bill Amount (/split/amount)
│   ├── Select Friends (/split/select-friends)
│   ├── Confirm Split (/split/confirm)
│   │   └── Edit Amounts (/split/edit-amounts)
│   └── Split Details (/split/:id)
│       └── Actions: Remind Pending, Pay Your Share
│
├── Pay Flow
│   └── [Initiated from Transaction Detail or Quick Action]
│
├── Groups (/groups)
│   └── [Not detailed in designs]
│
└── Profile (/profile)
    └── [Not detailed in designs]
```

## User Flows

### Flow 1: Request Payment
**Goal**: User wants to request money from a contact

1. **Home** → Click "Request" quick action button
2. **Request From** (`/request/select-contact`)
   - Search contacts
   - Select contact from list
   - Click contact card
3. **Enter Amount** (`/request/amount`)
   - Enter bill amount (large input)
   - Enter description
   - Click "Next" button
4. **Request Payment Form** (`/request/create`)
   - Pre-filled: Recipient, Amount, Description
   - Optional: Date, Time inputs
   - Click "Send Request" button
5. **Success Confirmation** (`/request/success`)
   - Shows success message
   - Displays transaction details
   - Click "Done" button → Returns to Home

**Data Flow**:
- Contact selection → Passes contact ID/name
- Amount entry → Passes amount and description
- Form submission → Creates transaction with: recipient, amount, description, optional date/time

---

### Flow 2: Split Bill
**Goal**: User wants to split a bill among multiple friends

1. **Home** → Click "Split" quick action button
2. **Enter Bill Amount** (`/split/amount`)
   - Enter total bill amount (large input)
   - Enter description
   - Click "Next" button
3. **Select Friends** (`/split/select-friends`)
   - Search friends
   - Select friends via checkboxes
   - Footer shows: Total bill, Selected count
   - Click "Next" button
4. **Confirm Split** (`/split/confirm`)
   - Shows total amount and description
   - Lists all participants with amounts
   - Options: "Split Equally" or "Edit Amounts"
   - Click "Send Requests" button
   - **OR** Click "Edit Amounts" → **Edit Amounts** page
5. **Edit Amounts** (`/split/edit-amounts`) [Optional]
   - Shows total bill and remaining amount
   - Editable amount inputs for each participant
   - "Split Evenly" button to reset
   - Click "Done" button → Returns to Confirm Split
6. **Split Details** (`/split/:id`)
   - View split bill details
   - See participant statuses (Paid/Pending)
   - Actions: "Remind Pending" or "Pay Your Share"

**Data Flow**:
- Bill amount → Passes total amount and description
- Friend selection → Passes array of selected friend IDs
- Amount editing → Updates individual amounts per participant
- Split creation → Creates split transaction with: total amount, description, participants array with amounts

---

### Flow 3: View Transactions
**Goal**: User wants to browse all transactions

1. **Home** → Click "See all" link in Transactions section
   - **OR** Click bottom nav "Transactions" button
2. **Transactions List** (`/transactions`)
   - Filter tabs: All, Requests, Payments, Splits
   - Scrollable list of transactions
   - Click any transaction card
3. **Transaction Detail** (`/transactions/:id`)
   - View full transaction details
   - Status-specific actions available

**Data Flow**:
- Filter selection → Filters transaction list by type
- Transaction selection → Passes transaction ID
- Transaction detail → Loads full transaction data

---

### Flow 4: Respond to Payment Request (User Owes)
**Goal**: User receives a payment request and needs to respond

1. **Home** → Click transaction card showing "You owe"
   - **OR** Navigate via Transactions list
2. **Transaction Detail** (`/transactions/:id`) [Pending Status]
   - View transaction details
   - Status: Pending
   - Actions available:
     - **Reject** → Updates status to Rejected
     - **Acknowledge** → Updates status to Acknowledged
     - **Send Reminder** → Sends notification (if user is owed)
3. **Transaction Detail** (`/transactions/:id`) [Acknowledged Status]
   - Status: Acknowledged
   - Action: **Pay Now** → Initiates payment flow

**Data Flow**:
- Transaction selection → Loads transaction with current status
- Reject action → Updates transaction status to "rejected"
- Acknowledge action → Updates transaction status to "acknowledged"
- Pay Now → Initiates payment process (external payment integration)

---

### Flow 5: Manage Pending Request (User is Owed)
**Goal**: User wants to manage a payment request they sent

1. **Home** → Click transaction card showing "owes you"
   - **OR** Navigate via Transactions list
2. **Transaction Detail** (`/transactions/:id`) [Pending Status]
   - View transaction details
   - Status: Pending
   - Action: **Send Reminder** → Sends notification to recipient
   - Shows success toast: "Reminder sent successfully!"
3. **Transaction Detail** (`/transactions/:id`) [Marked as Paid Status]
   - Status: Marked as Paid
   - Actions: **Reject** or **Acknowledge**
   - Acknowledge → Confirms payment received

**Data Flow**:
- Send Reminder → Triggers notification API call
- Acknowledge → Updates transaction status to "paid"

---

### Flow 6: View Split Bill Details
**Goal**: User wants to view details of a split bill

1. **Home** → Click split transaction card
   - **OR** Navigate via Transactions list (Split filter)
   - **OR** Click bottom nav "Split" button
2. **Split Details** (`/split/:id`)
   - View bill summary (total, description, date, time)
   - View all participants with statuses
   - Actions:
     - **Remind Pending** → Sends reminders to pending participants
     - **Pay Your Share** → If user owes, initiates payment

**Data Flow**:
- Split selection → Loads split transaction with all participants
- Remind action → Sends notifications to pending participants
- Pay action → Initiates payment for user's share

---

### Flow 7: Quick Actions from Home
**Goal**: User wants quick access to main actions

1. **Home** (`/`)
   - View balance overview
   - View recent transactions
   - Quick action buttons:
     - **Request** → Flow 1 (Request Payment)
     - **Pay** → [Payment flow - not detailed]
     - **Split** → Flow 2 (Split Bill)
   - Click transaction card → Flow 3 or 4
   - Click "See all" → Flow 3 (View Transactions)

---

## Interactive Elements Map

| Element | Location | Action | Destination | Data Passed |
|---------|----------|--------|-------------|-------------|
| **Navigation** |
| "Home" (Bottom Nav) | All pages | Navigate | `/` (Home) | - |
| "Transactions" (Bottom Nav) | All pages | Navigate | `/transactions` | - |
| "Split" (Bottom Nav) | All pages | Navigate | `/split` or split list | - |
| "Profile" (Bottom Nav) | All pages | Navigate | `/profile` | - |
| "Groups" (Bottom Nav) | Some pages | Navigate | `/groups` | - |
| Back Button | Detail pages | Navigate back | Previous page | - |
| **Home Page** |
| "Request" Quick Action | Home | Navigate | `/request/select-contact` | - |
| "Pay" Quick Action | Home | Navigate | Payment flow | - |
| "Split" Quick Action | Home | Navigate | `/split/amount` | - |
| "See all" Link | Home | Navigate | `/transactions` | - |
| Transaction Card | Home | Navigate | `/transactions/:id` | Transaction ID |
| Notification Button | Home | Open notifications | Notifications modal | - |
| **Request Flow** |
| Contact Card | Request From | Select contact | `/request/amount` | Contact ID, Name |
| "Next" Button | Enter Amount | Continue | `/request/create` | Amount, Description |
| "Send Request" Button | Request Form | Submit | `/request/success` | Full request data |
| "Done" Button | Success | Return | `/` (Home) | - |
| **Split Flow** |
| "Next" Button | Enter Bill Amount | Continue | `/split/select-friends` | Amount, Description |
| Friend Checkbox | Select Friends | Toggle selection | Same page (state) | Friend ID |
| "Next" Button | Select Friends | Continue | `/split/confirm` | Selected friends, amounts |
| "Split Equally" Button | Confirm Split | Reset amounts | Same page (state) | - |
| "Edit Amounts" Button | Confirm Split | Navigate | `/split/edit-amounts` | Split data |
| "Send Requests" Button | Confirm Split | Submit | `/split/:id` | Split transaction data |
| "Done" Button | Edit Amounts | Return | `/split/confirm` | Updated amounts |
| "Remind Pending" Button | Split Details | Send reminders | Same page (API call) | Split ID |
| "Pay Your Share" Button | Split Details | Pay | Payment flow | Amount, Split ID |
| **Transactions** |
| Filter Tab (All) | Transactions List | Filter | Same page (state) | Filter type |
| Filter Tab (Requests) | Transactions List | Filter | Same page (state) | Filter type |
| Filter Tab (Payments) | Transactions List | Filter | Same page (state) | Filter type |
| Filter Tab (Splits) | Transactions List | Filter | Same page (state) | Filter type |
| Transaction Card | Transactions List | Navigate | `/transactions/:id` | Transaction ID |
| **Transaction Details** |
| "Reject" Button | Transaction Detail (Pending) | Reject request | Same page (update) | Transaction ID |
| "Acknowledge" Button | Transaction Detail (Pending) | Acknowledge | `/transactions/:id` (update) | Transaction ID |
| "Send Reminder" Button | Transaction Detail (Pending) | Send reminder | Same page (toast) | Transaction ID |
| "Pay Now" Button | Transaction Detail (Acknowledged) | Pay | Payment flow | Transaction ID, Amount |
| "Reject" Button | Transaction Detail (Marked as Paid) | Reject payment | Same page (update) | Transaction ID |
| "Acknowledge" Button | Transaction Detail (Marked as Paid) | Confirm payment | Same page (update) | Transaction ID |
| Menu Button | Split Details | Open menu | Menu overlay | - |

---

## Data Flow

### Transaction Data Structure
```typescript
Transaction {
  id: string
  type: 'request' | 'payment' | 'split'
  status: 'pending' | 'acknowledged' | 'paid' | 'rejected' | 'marked_as_paid'
  amount: number
  currency: 'ETB'
  description: string
  date: string (ISO date)
  time: string (ISO time)
  sender: {
    id: string
    name: string
    avatar: string
  }
  receiver: {
    id: string
    name: string
    avatar: string
  }
  createdAt: string (ISO timestamp)
  updatedAt: string (ISO timestamp)
}
```

### Split Transaction Data Structure
```typescript
SplitTransaction {
  id: string
  totalAmount: number
  currency: 'ETB'
  description: string
  date: string
  time: string
  participants: [
    {
      id: string
      name: string
      avatar: string
      amount: number
      status: 'paid' | 'pending'
    }
  ]
  createdAt: string
  updatedAt: string
}
```

### Form Data Flow

#### Request Payment Form
**Required Fields**:
- Recipient (contact ID)
- Amount (number)
- Description (string)

**Optional Fields**:
- Date (date picker)
- Time (time picker)

**Submission Path**:
1. User fills form
2. Click "Send Request"
3. POST `/api/transactions/request`
4. Response: Transaction object
5. Navigate to success page with transaction data

#### Split Bill Form
**Step 1 - Enter Amount**:
- Amount (number, required)
- Description (string, required)

**Step 2 - Select Friends**:
- Selected friends array (required, min 1)

**Step 3 - Confirm/Edit**:
- Individual amounts per participant (calculated or edited)
- Total must equal bill amount

**Submission Path**:
1. User completes all steps
2. Click "Send Requests"
3. POST `/api/transactions/split`
4. Response: Split transaction object
5. Navigate to split details page

### State Management

#### Persistent State
- **User Session**: Stored in localStorage/sessionStorage or cookies
  - User ID
  - Authentication token
  - User profile data

- **Transaction Filters**: Stored in URL query params or state
  - Current filter: `?filter=all|requests|payments|splits`

- **Form Progress**: For multi-step forms (Split flow)
  - Stored in component state or sessionStorage
  - Allows back navigation without losing data

#### Temporary State
- **Selected Contacts**: Component state (Request flow)
- **Selected Friends**: Component state (Split flow)
- **Amount Calculations**: Component state (Split flow)
- **Toast Notifications**: Component state (auto-dismiss)

### API Endpoints (Inferred)

#### Transactions
- `GET /api/transactions` - List all transactions
  - Query params: `?filter=all|requests|payments|splits`
- `GET /api/transactions/:id` - Get transaction details
- `POST /api/transactions/request` - Create payment request
- `POST /api/transactions/split` - Create split bill
- `PATCH /api/transactions/:id/status` - Update transaction status
  - Body: `{ status: 'acknowledged|rejected|paid' }`
- `POST /api/transactions/:id/remind` - Send reminder notification

#### Contacts/Friends
- `GET /api/contacts` - List all contacts
  - Query params: `?search=query` (for search)
- `GET /api/friends` - List all friends
  - Query params: `?search=query` (for search)

#### Notifications
- `POST /api/notifications/send` - Send notification
  - Body: `{ recipientId, type, transactionId }`

#### Payments
- `POST /api/payments/initiate` - Initiate payment
  - Body: `{ transactionId, amount }`
- `GET /api/payments/:id/status` - Check payment status

---

## Navigation Patterns

### Deep Linking
- Transaction details: `/transactions/:id`
- Split details: `/split/:id`
- All detail pages support direct URL access

### Back Navigation
- Standard browser back button supported
- Header back button returns to previous page
- Multi-step forms maintain state on back navigation

### Modal Overlays
- Amount editing modal (in Confirm Split)
- Notifications modal (from notification button)
- Menu overlay (from menu button)

### Toast Notifications
- Success messages (auto-dismiss after 3-5 seconds)
- Error messages (manual dismiss)
- Position: Fixed above bottom navigation

### Loading States
- Form submissions show loading state
- API calls show loading indicators
- Transaction lists support pull-to-refresh (inferred)

---

## User Journey Summary

### Primary Journeys
1. **Request Money**: Home → Request → Select Contact → Enter Amount → Send Request → Success
2. **Split Bill**: Home → Split → Enter Amount → Select Friends → Confirm → Split Details
3. **View Transactions**: Home → Transactions List → Transaction Detail
4. **Respond to Request**: Transaction Detail → Reject/Acknowledge → Pay (if acknowledged)
5. **Manage Split**: Split Details → Remind Participants → Pay Share

### Secondary Journeys
- Edit split amounts before sending
- Send reminders for pending transactions
- Filter transactions by type
- View transaction history

### Error Handling
- Invalid form data: Show inline validation errors
- API errors: Show error toast notification
- Network errors: Show retry option
- Missing data: Show empty states

---

## External Services

### Payment Integration
- Payment gateway integration for "Pay Now" actions
- Payment status polling
- Payment confirmation webhooks

### Notification Service
- Push notifications for reminders
- In-app notification badges
- Email/SMS notifications (optional)

### Image Storage
- Profile images: Google user photos (from URLs in designs)
- Avatar fallbacks: Initials or default avatar

---

## Accessibility Considerations

### Navigation
- Keyboard navigation support
- Focus management in modals
- Screen reader announcements for status changes

### Forms
- Label associations
- Error announcements
- Required field indicators

### Interactive Elements
- Minimum touch target sizes (44x44px)
- Clear focus indicators
- Loading state announcements

