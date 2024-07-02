export default function Profile() {
    return (
        <div className="w-full rounded-[10px] h-64 bg-[#000000] mb-5 p-5 text-white flex flex-col items-center justify-center">
            <div className="relative mb-3">
                <div className="w-20 h-20 border-2 border-[var(--lume-yellow)] rounded-full">
                    <div className="w-6 h-6 bg-[#000000] absolute top-5 left-0"/>
                    <div className="w-6 h-6 bg-[#000000] absolute top-1 right-0"/>
                    <div className="w-6 h-6 bg-[#000000] absolute bottom-0 right-3"/>
                </div>

                <div className="w-20 h-20 absolute inset-0 z-10 p-1">
                    <img src="/props/avi.jpg" alt="Profile Image" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>
            <p className="text-lg font-semibold mb-4">John Smith</p>
            <button className="px-6 py-2 bg-gradient-to-t from-[#81682A] to-[#EAB83E] text-black rounded-full hover:from-green-400 hover:to-[var(--lume-yellow)]">
                View Account
            </button>
        </div>
    );
}
