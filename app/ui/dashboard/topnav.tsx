export default function TopNav() {
    return (
        <div className="w-full h-28 flex items-center px-5">
            <div className="flex justify-between items-center w-full">
                <div>
                    <p className="text-2xl">Hello, John</p>
                    <p className="text-xs">April 20, 2024</p>
                </div>

                <div className="flex">
                    <p className="mr-5">Notification</p>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    )
}