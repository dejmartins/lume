import Adverts from "../ui/dashboard/advertisments";
import Card from "../ui/dashboard/asset-cards";
import LatestActivities from "../ui/dashboard/latest-activities";
import PortfolioPerformance from "../ui/dashboard/portfolio-performance";
import Profile from "../ui/dashboard/profile-card";
import Purchase, { PurchaseButtons } from "../ui/dashboard/purchase";

export default function Page() {
    return (
        <div className="flex overflow-hidden h-[80vh] md:h-full">
            <div className="flex-grow overflow-auto md:mr-5">
                <Card />

                <div className="grid-cols-2 my-3 gap-3 min-h-40 pt-5 hidden md:grid">
                    <LatestActivities />
                    <Adverts />
                </div>

                <div>
                    <PurchaseButtons />
                    <PortfolioPerformance />
                </div>
            </div>

            <div className="w-80 h-full hidden md:block overflow-auto">
                <Profile />
                <Purchase />
            </div>
        </div>
    )
}



