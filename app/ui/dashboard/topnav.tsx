import {
    BellAlertIcon,
    UserCircleIcon,
    UserIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline';

export default function TopNav() {
    return (
        <div className="w-full h-28 flex items-center px-5">
            <div className="flex justify-between items-center w-full">
                <div>
                    <p className="text-2xl">Hello, <span className="font-bold">John!</span></p>
                    <p className="text-sm text-gray-400">April 20, 2024</p>
                </div>

                <div className="flex">
                    <div className="mr-5 flex items-center gap-x-2">
                        <BellAlertIcon className="size-5 text-white" />
                        <p>Notification</p>
                    </div>
                    <div className="mr-5 flex items-center gap-x-2">
                        <UserIcon className="size-5 text-white" />
                        <p>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}