import type { Route } from 'next';
import { BottomNavItem } from '@/components/navigation/BottomNavigation';

export const defaultBottomNavItems: BottomNavItem[] = [
  { label: 'Home', icon: 'home', href: '/' as Route },
  { label: 'Transactions', icon: 'swap_horiz', href: '/transactions' as Route },
  { label: 'Split', icon: 'receipt_long', href: '/split' as Route },
  { label: 'Profile', icon: 'person', href: '/profile' as Route },
];
