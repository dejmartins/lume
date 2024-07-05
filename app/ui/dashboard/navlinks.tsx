'use client'

import { Square3Stack3DIcon, WalletIcon, BanknotesIcon, UserIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// @ts-ignore
import clsx from 'clsx'

const links = [
    { name: 'Dashboard', href: '/dashboard', 
    icon: Square3Stack3DIcon 
    },
    {
    name: 'Trade',
    href: '/dashboard/trade',
    icon: BanknotesIcon,
    },
    { name: 'Wallet', href: '/dashboard/wallet', 
    icon: WalletIcon 
    },
    { name: 'Account', href: '/dashboard/account/bank', 
    icon: UserIcon 
    },
];

export default function NavLinks({ isCollapsed }: { isCollapsed: Boolean }) {
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex h-[48px] grow items-center bg-black justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-[var(--lume-yellow)] hover:text-[var(--lume-yellow)]': pathName === link.href,
              }
            )}
          >
            <LinkIcon className={clsx("w-6", 
              {
                'text-[var(--lume-yellow)]': pathName === link.href
              }
            )} />
            <p className="hidden md:block">
              {!isCollapsed && <span className="ml-3">{link.name}</span>}
            </p>
          </Link>
        );
      })}
    </>
  );
}
