'use client'
import { SquaresPlusIcon, DocumentIcon, ShieldCheckIcon, CogIcon, CubeTransparentIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// @ts-ignore
import clsx from 'clsx'

const links = [
    {
        name: 'Bank Details', 
        href: '/dashboard/account/bank', 
        icon: SquaresPlusIcon 
    },
    {
        name: 'Document and Reports',
        href: '/dashboard/account/document',
        icon: DocumentIcon,
    },
    { 
        name: 'Security and Privacy', 
        href: '/dashboard/account/security', 
        icon: ShieldCheckIcon 
    },
    { 
        name: 'Settings', 
        href: '/dashboard/account/settings', 
        icon: CogIcon 
    },
    { 
        name: 'Support', 
        href: '/dashboard/account/support', 
        icon: CubeTransparentIcon 
    }
];

export default function NavLinks() {
  const pathName = usePathname()
  return (
    <div className='flex justify-between items-center'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('w-full flex flex-col items-center justify-center gap-2 p-3 text-sm font-medium hover:text-blue-600 md:flex-row md:justify-start md:p-2 md:pb-3 md:px-3',
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
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
