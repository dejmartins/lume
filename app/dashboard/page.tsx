import Adverts from "../ui/dashboard/advertisments";
import Card from "../ui/dashboard/asset-cards";
import LatestActivities from "../ui/dashboard/latest-activities";
import PortfolioPerformance from "../ui/dashboard/portfolio-performance";
import Profile from "../ui/dashboard/profile-card";
import Purchase from "../ui/dashboard/purchase";

export default function Page(){
    return (
        <div className="flex">
            <div className="w-full mr-5">
                <p>Dashboard</p>

                <Card />

                <div className="grid grid-cols-2 my-3 gap-3">
                    <LatestActivities />
                    <Adverts />
                </div>

                <div className="">
                    <PortfolioPerformance />
                </div>
            </div>

            <div className="w-64 h-full grow">
                <Profile />
                <Purchase />
            </div>
        </div>
    )
}
