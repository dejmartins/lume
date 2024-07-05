import TopNav from "@/app/ui/account/topnav";

export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <div>
            <div>
                <TopNav />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}