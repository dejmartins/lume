'use client'
import SideNav from "../ui/dashboard/sidenav";
import TopNav from "../ui/dashboard/topnav";
import { dmSans } from "../ui/fonts";
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`${dmSans.className} w-screen flex bg-[#0A0A0A] h-screen flex-col md:flex-row md:overflow-hidden`}>
            <div className={`transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex-none`}>
                <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
            <div className="flex-grow md:overflow-y-auto">
                <TopNav />
                <div className="p-6 md:px-5">
                    {children}
                </div>
            </div>
        </div>
    )
}

