// 'use client'
// import SideNav from "../ui/dashboard/sidenav";
// import TopNav from "../ui/dashboard/topnav";
// import { dmSans } from "../ui/fonts";
// import { useState } from 'react';

// export default function Layout({ children }: { children: React.ReactNode }) {
//     const [isCollapsed, setIsCollapsed] = useState(false);

//     return (
//         <div className={`${dmSans.className} md:flex bg-[#0A0A0A] h-full md:h-screen md:flex-row md:overflow-y-auto`}>
//             <div className={`transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex-none hidden md:block`}>
//                 <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
//             </div>
//             <div className="md:flex-grow overflow-auto">
//                 <TopNav />
//                 <div className="p-6 md:px-5">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client'
import SideNav from "../ui/dashboard/sidenav";
import TopNav from "../ui/dashboard/topnav";
import { dmSans } from "../ui/fonts";
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`${dmSans.className} md:flex bg-[#0A0A0A] h-screen`}>
            <div className={`transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex-none hidden md:block`}>
                <SideNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
            <div className="flex-grow flex flex-col overflow-hidden">
                <TopNav />
                <div className="flex-grow overflow-auto p-6 md:px-5">
                    {children}
                </div>
            </div>
        </div>
    )
}



