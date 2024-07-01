export default function Card(){
    return (
        <div className="border border-white w-full rounded-md h-40 p-3 flex gap-x-5">
            <div className="flex-1 bg-gradient-to-r from-[#81682A] to-[#EAB83E] rounded-[20px] p-5">
                <p>Your total asset portfolio</p>
                <p>N203,935</p>
            </div>

            <div className="w-2/5 rounded-[20px] p-5 shadow-[0_9px_50px_-15px_rgba(246,196,0,0.75)]">
                <p className="text-xl">253g</p>
                <p>Your Gold Vault</p>
            </div>
        </div>
    )
}