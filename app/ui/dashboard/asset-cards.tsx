export default function Card() {
    return (
      <div className="relative w-full h-44 p-1 rounded-md overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A5A5A] to-[#C0C0C0]"></div>
        <div className="absolute inset-0 bg-black rounded-md m-1"></div>
        <div className="relative z-10 flex gap-x-5 h-full p-3">
          <div className="flex-1 flex flex-col justify-center bg-gradient-to-r from-[#81682A] to-[#EAB83E] rounded-[20px] p-5 pl-7">
            <p className="text-xl">Your total asset portfolio</p>
            <p className="text-4xl font-bold">N203,935</p>
          </div>
  
          <div className="w-2/5 flex flex-col justify-center text-center items-center relative">
            <div className="h-12 w-12 rounded-full bg-[#000000] z-10 relative flex flex-col items-center justify-center">
                <img src="/props/gold-money.png" alt="gold bars" />
            </div>
            <div className="w-full rounded-[20px] mt-[-22px] bg-[#000000] p-5 shadow-[0_9px_50px_-15px_rgba(246,196,0,0.75)] relative z-0">
              <p className="text-xl text-white">253g</p>
              <p className="text-white">Your Gold Vault</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  