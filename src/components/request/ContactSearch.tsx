'use client';

import { useMemo, useState } from 'react';
import type { Route } from 'next';
import Link from 'next/link';

type ContactSearchProps = {
  contacts: string[];
  baseHref: Route;
};

export function ContactSearch({ contacts, baseHref }: ContactSearchProps) {
  const [query, setQuery] = useState('');

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => contact.toLowerCase().includes(query.toLowerCase()));
  }, [contacts, query]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
          search
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name"
          className="w-full rounded-full border border-gray-200 bg-card-light py-2.5 pl-10 pr-4 text-base text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <ul className="divide-y divide-gray-100">
        {filteredContacts.map((contact) => (
          <li key={contact}>
            <Link
              href={`${baseHref}?contact=${encodeURIComponent(contact)}` as Route}
              className="flex items-center gap-4 py-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card-light-alt text-sm font-semibold text-text-secondary">
                {contact
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <p className="flex-1 text-base font-medium text-text-primary">{contact}</p>
              <span className="material-symbols-outlined text-text-secondary">chevron_right</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
