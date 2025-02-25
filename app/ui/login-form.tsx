import Link from 'next/link'
import { Button } from './buttons'
import { dmSans } from './fonts'

export default function LoginForm() {
    return (
        <form>
            <div className={`${dmSans.className} mt-5 px-5 md:2`}>
                <h1 className='antialiased text-xl font-bold'>
                    Login
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
                    <div>
                        <label className="mb-3 block text-sm font-medium" htmlFor="password" >
                            Password
                        </label>
                        <div className="relative">
                        <input
                            className="peer block w-full rounded-md border bg-[var(--background-input)] border-[var(--background-input-outline)] p-[9px] text-sm outline-2 placeholder:text-gray-500"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            minLength={6}
                        />
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                                Minimum Length: 6
                            </p>
                        </div>
                    </div>
                </div>
                <LoginButton />
                
                <p className='text-center mt-5 text-sm font-bold'>Don't have an account? 
                    <Link href='/signup'>
                        <span className='text-[var(--lume-yellow)] font-semibold ml-1 underline underline-offset-auto'>Click here</span>
                    </Link>
                </p>
            </div>
        </form>
    )
}

export function LoginButton() {
    return (
        <Button className='mt-6 w-full hover:bg-[#F8BE4F] hover:text-black font-semi-bold flex justify-center border bg-transparent text-white border-[var(--lume-yellow)]'>Login</Button>
    )
}