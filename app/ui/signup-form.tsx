'use client'
import Link from 'next/link'
import { dmSans } from './fonts'
import { Button } from './buttons'
import { useState } from 'react';
import OtpModal from './modals/otp';

export default function SignupForm(){
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

    const openOtpModal = (e: any) => {
        e.preventDefault();
        setIsOtpModalOpen(true);
    };
    const closeOtpModal = () => setIsOtpModalOpen(false);

    return (
        <>
            <form>
                <div className={`${dmSans.className} mt-5 px-5 md:2`}>
                    <h1 className='antialiased text-xl font-bold'>
                        Sign Up
                    </h1>
                    <div className='w-full'>
                        <div>
                            <label className="mb-3 mt-5 block text-sm font-medium" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border bg-[var(--background-input)] border-[var(--background-input-outline)] p-[9px] text-sm outline-2 placeholder:text-gray-500"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                />
                                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                                    Please provide a valid email address.
                                </p>
                            </div>
                        </div>
                    </div>
                    <SignUpButton openOtpModal={openOtpModal} />
                    
                    <p className='text-center mt-5 text-sm font-bold'>Already a member? 
                        <Link href='/login'>
                            <span className='text-[var(--lume-yellow)] font-semibold ml-1 underline underline-offset-auto'>Click here</span>
                        </Link>
                    </p>
                </div>
            </form>
            <OtpModal isOpen={isOtpModalOpen} onClose={closeOtpModal} />
        </>
    ) 
}

export function SignUpButton({ openOtpModal }: { openOtpModal: any }) {
    return (
        <Button 
            className='mt-6 w-full hover:bg-[#F8BE4F] hover:text-black font-semi-bold flex justify-center border bg-transparent text-white border-[var(--lume-yellow)]' 
            onClick={openOtpModal}>
                Continue
        </Button>
    )
}

// export function SignUpButton({ openOtpModal }: { openOtpModal: any }) {
//     return (
//         <button 
//             type="button"
//             className='mt-6 w-full hover:bg-[#F8BE4F] hover:text-black font-semi-bold flex justify-center border bg-transparent text-white border-[var(--lume-yellow)]' 
//             onClick={openOtpModal}
//         >
//             Continue
//         </button>
//     )
// }