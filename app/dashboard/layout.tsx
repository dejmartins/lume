import SideNav from "../ui/dashboard/sidenav";
import TopNav from "../ui/dashboard/topnav";

export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <div className="flex bg-[#0A0A0A] h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto ">
                <TopNav />
                <div className="p-6 md:px-5">
                    {children}
                </div>
            </div>
        </div>
    )
}