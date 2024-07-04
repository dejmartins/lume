import { Button } from "../buttons"

export default function Purchase(){
    return (
        <div className="bg-black w-full rounded-[22px] p-6 min-h-60 text-white py-10">
            <div>
                <form>
                    <div className="flex justify-between items-center w-48 mx-auto mb-5">
                        <BuyButton />
                        <SellButton />
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label>Order Type</label>
                        <select className="w-20 bg-transparent border border-[#676767] rounded-md py-1 px-2 text-white">
                            <option>Buy</option>
                            <option>Sell</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <label>Currency</label>
                        <input placeholder="Naira" className="w-20 bg-transparent border border-[#676767] rounded-md py-1 px-2 text-white" />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <label>Amount</label>
                        <input placeholder="N0.00" className="w-20 bg-transparent border border-[#676767] rounded-md py-1 px-2 text-white" />
                    </div>

                    <div className="flex justify-between items-center my-5">
                        <p>Approx. Quantity</p>
                        <p>0</p>
                    </div>
                </form>

                <p className="text-center mt-12 text-sm">N0.0 purchasing power available</p>
            </div>
        </div>
    )
}

export function PurchaseButtons() {
    return (
        <div className="flex flex-col my-5 items-center w-full md:hidden">
            <div className="flex w-full space-between font-bold text-2xl text-gray-400">
                <button className="w-full border border-0 border-r-[1px] py-4">Buy</button>
                <button className="w-full">Sell</button>
            </div>
        </div>
    )
}

export function SellButton() {
    return (
        <Button 
            className='w-20 rounded-[22px] hover:bg-[#F8BE4F] hover:text-black font-semi-bold flex justify-center border bg-transparent text-white border-[var(--lume-yellow)]'>
                Sell
        </Button>
    )
}

export function BuyButton() {
    return (
        <Button 
            className='w-20 rounded-[22px] hover:bg-[#F8BE4F] hover:text-black font-semi-bold flex justify-center border bg-gradient-to-t from-[#FFD98F] via-[#BD810E] to-[#FFFFFF] text-white border-[var(--lume-yellow)]'>
                Buy
        </Button>
    )
}

