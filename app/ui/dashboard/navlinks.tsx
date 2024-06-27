'use client'

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// @ts-ignore
import clsx from 'clsx'

const links = [
    { name: 'Dashboard', href: '/dashboard', 
    icon: HomeIcon 
    },
    {
    name: 'Trade',
    href: '/dashboard/trade',
    icon: DocumentDuplicateIcon,
    },
    { name: 'Wallet', href: '/dashboard/wallet', 
    icon: UserGroupIcon 
    },
    { name: 'Account', href: '/dashboard/account', 
    icon: UserGroupIcon 
    },
];

export default function NavLinks() {
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 text-red-500" />
            <p className="hidden md:block text-black">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
