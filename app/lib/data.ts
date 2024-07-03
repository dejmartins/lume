import { formatCurrency } from "./utils"

const recentActivities = [
    {
        "amount": 100000,
        "activity": "Buy Gold",
        "date": "TUE 23 Nov, 2024",
        "id": "UWEHS772"
    },
    {
        "amount": 20024,
        "activity": "Sell Gold",
        "date": "TUE 23 Nov, 2024",
        "id": "USUDS772"
    },
    {
        "amount": 100000,
        "activity": "Buy Gold",
        "date": "TUE 23 Nov, 2024",
        "id": "SDIHS772"
    },
]


export function fetchRecentActivites() {
    const activities = recentActivities.map(activity => ({
        ...activity, 
        "amount": formatCurrency(activity.amount)
    }));

    return activities
}