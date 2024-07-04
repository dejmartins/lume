import Link from "next/link";
import NavLinks from "./navlinks";
import { PowerIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function SideNav({ isCollapsed, setIsCollapsed }: any) {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 relative">
            <Link
                className={`flex h-20 mb-2 items-end justify-start rounded-md bg-black bg-[#000000] p-4 md:h-32 ${isCollapsed ? 'justify-center' : ''}`}
                href="/login"
            >
                <img src="/props/dashboard-logo.png" alt="Lume Logo" className={`h-16 mx-auto ${isCollapsed ? 'hidden' : ''}`} />
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks isCollapsed={isCollapsed} />
                <div className="hidden h-auto w-full grow rounded-b-md bg-black md:block"></div>
                <form>
                    <button className={`flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-black p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center ${isCollapsed ? 'justify-center' : ''}`}>
                        <PowerIcon className="w-6" />
                        <div className={`${isCollapsed ? 'hidden' : ''}`}>Sign Out</div>
                    </button>
                </form>
            </div>
            <button 
                className="absolute bottom-[50%] right-[-8px] border border-gray-600 p-[5px] bg-black rounded-full focus:outline-none" 
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <ChevronRightIcon className="w-6 text-gray-400" /> : <ChevronLeftIcon className="w-6 text-gray-400" />}
            </button>
        </div>
    );
}





