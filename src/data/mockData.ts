export type TransactionStatus = 'pending' | 'acknowledged' | 'paid' | 'rejected' | 'markedAsPaid';

export type Transaction = {
  id: string;
  counterpart: string;
  counterpartAvatar?: string;
  amount: number;
  direction: 'incoming' | 'outgoing';
  status: TransactionStatus;
  description: string;
  date: string;
  time: string;
  relativeTime: string;
};

export type SplitParticipant = {
  id: string;
  name: string;
  avatar?: string;
  amount: number;
  status: 'paid' | 'pending';
};

export type Split = {
  id: string;
  title: string;
  description: string;
  totalAmount: number;
  date: string;
  time: string;
  participants: SplitParticipant[];
};

export const transactions: Transaction[] = [
  {
    id: 't1',
    counterpart: 'Hana',
    counterpartAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7yuU8J2uC31Yq9a06xk3MATJRWWgoXhT43b36Uee7vmygPA5gflhmqZ_KsJnsJJa02N3SRfJ2qgtB2ZjdAfqUKFXyO5Wz5p_tBNDJi9RZ2n9W3qOOnrvBD9GZEKVXuHGkMgqhO5KiUc7BHR00tMUD3eIxMI_SxYTR-cpQvlCCdili8b2TdYloCjcmTpxLaq3d65mnET1I10uFjVEtl8jY-cct8Iy7hcjoVLrMAbzgaz4TgX7DI6iRvEdFqmgustEzxHyauOcFnc',
    amount: 500,
    direction: 'incoming',
    status: 'paid',
    description: 'Pizza night',
    date: 'Jun 12, 2024',
    time: '18:45',
    relativeTime: '1h ago',
  },
  {
    id: 't2',
    counterpart: 'Abebe',
    counterpartAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2StQM8FWnuvfsD-oKL9_NwOp4roKJBqi4QAcSDN4zNK25xrIMYN3z7iKfMZrgwR62UpQwsfIZo6S-rZgrzTULKZIIaMBLWPQuR7s0p9QIo7gu8X_fAX6ivHgo4bzUpnku-T4N0h5bkdKx4smIb-DcwoIJyJ7-uVa7xewOwToB_dECkEncDd26lE3C1pQaW1cQeNdMrZDvRrVPt_z59cWZ02FX71lozu2mepFby08owSJuNQFjziH3rDLgQfKjLGcH7TBoDPQXHpw',
    amount: 300,
    direction: 'outgoing',
    status: 'pending',
    description: 'Coffee',
    date: 'Jun 12, 2024',
    time: '13:30',
    relativeTime: 'Yesterday',
  },
  {
    id: 't3',
    counterpart: 'Trip to Adama',
    amount: 750,
    direction: 'incoming',
    status: 'pending',
    description: 'You are owed',
    date: 'Jun 10, 2024',
    time: '09:00',
    relativeTime: 'Oct 10',
  },
];

export const splits: Split[] = [
  {
    id: 's1',
    title: 'Dinner at Romina',
    description: 'Monthly Netflix',
    totalAmount: 600,
    date: 'October 26, 2023',
    time: '8:45 PM',
    participants: [
      {
        id: 'p1',
        name: 'You',
        amount: 200,
        status: 'paid',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB-IBz83ifsYbvaKzArxE86S8wnkG41Xg9cYrSwB1ayLcQJDY4z9YWvrO48PbxDK6-3hN10FA3yi933X5VGphk_q5MrIc_bL8GytSDPJwEFu_MT9A0Qo06Q25ZPvgjxZrvhqYtQRZaAwlVEVzOz5qdw_h3SSTwDoN41Q544rm_lVwpP7cKPJ52o38huzBwTXL0XA6DACtBiozUSFx-6BOWnjt-ne0IwCYE3NzardkVcLUaRlNeMvxG_fR2y4WELbkrUipgnRzekCpo',
      },
      {
        id: 'p2',
        name: 'Hana',
        amount: 200,
        status: 'pending',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDF7yuU8J2uC31Yq9a06xk3MATJRWWgoXhT43b36Uee7vmygPA5gflhmqZ_KsJnsJJa02N3SRfJ2qgtB2ZjdAfqUKFXyO5Wz5p_tBNDJi9RZ2n9W3qOOnrvBD9GZEKVXuHGkMgqhO5KiUc7BHR00tMUD3eIxMI_SxYTR-cpQvlCCdili8b2TdYloCjcmTpxLaq3d65mnET1I10uFjVEtl8jY-cct8Iy7hcjoVLrMAbzgaz4TgX7DI6iRvEdFqmgustEzxHyauOcFnc',
      },
      {
        id: 'p3',
        name: 'Abebe',
        amount: 200,
        status: 'pending',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB2StQM8FWnuvfsD-oKL9_NwOp4roKJBqi4QAcSDN4zNK25xrIMYN3z7iKfMZrgwR62UpQwsfIZo6S-rZgrzTULKZIIaMBLWPQuR7s0p9QIo7gu8X_fAX6ivHgo4bzUpnku-T4N0h5bkdKx4smIb-DcwoIJyJ7-uVa7xewOwToB_dECkEncDd26lE3C1pQaW1cQeNdMrZDvRrVPt_z59cWZ02FX71lozu2mepFby08owSJuNQFjziH3rDLgQfKjLGcH7TBoDPQXHpw',
      },
    ],
  },
];

export const contacts = [
  'Abebe Bikila',
  'Hana Tesfaye',
  'Kebede Michael',
  'Lidya Solomon',
  'Samuel Bekele',
  'Sara Gebre',
  'Tirunesh Dibaba',
  'Yonas Alemayehu',
  'Meseret Defar',
  'Daniel Tadesse',
];
