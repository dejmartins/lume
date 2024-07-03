import { fetchRecentActivites } from "@/app/lib/data"
import { LatestActivity } from "@/app/lib/definitions"
import clsx from "clsx";

export default function LatestActivities(){
    const latestActivites: LatestActivity[] = fetchRecentActivites();
    return (
        <div className="bg-black rounded-[10px] w-full flex flex-col justify-center rounded-md p-4">
            <p className="text-center font-semibold">Activities</p>
            <div className="flex justify-between py-[5px] border-white text-[15px] font-semibold">
                <p>Recent Transaction</p>
                <p className="text-sm underline cursor-pointer text-[#B3B3B3]">View All</p>
            </div>
            <div>
                {latestActivites.map((activity, i) => {
                    return (
                        <div key={activity.id} className="flex justify-between items-end border-0 border-t-[1px] border-[#454545] text-[13px] py-[5px]">
                            <div>
                                <p className="font-semibold">{activity.amount}</p>
                                <p className={clsx('text-green-500', {'text-red-600': activity.activity == 'Sell Gold'})}>{activity.activity}</p>
                            </div>
                            <div>
                                <p className="text-[#B3B3B3] text-[11px]">{activity.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}