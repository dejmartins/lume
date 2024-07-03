import { fetchRecentActivites } from "@/app/lib/data"
import { LatestActivity } from "@/app/lib/definitions"

export default function LatestActivities(){
    const latestActivites: LatestActivity[] = fetchRecentActivites();
    return (
        <div className="bg-black rounded-[10px] w-full rounded-md h-40">
            <p>Activities Card</p>
            <div>
                {latestActivites.map((activity, i) => {
                    return (
                        <div key={activity.id} className="flex">
                            <p>{activity.activity} -</p>
                            <p> {activity.amount}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}