import { Button } from './buttons'
import { dmSans } from './fonts'

export default function LoginForm() {
    return (
        <form>
            <div className="mt-5 px-5 md:2">
                <h1 className={`${dmSans.className} text-xl`}>
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
                            required
                            minLength={6}
                        />
                        </div>
                    </div>
                </div>
                <LoginButton />
                {/* <button className="mt-4 w-full border border-gray-200 rounded p-2 mt-10">Login</button> */}
            </div>
        </form>
    )
}

export function LoginButton() {
    return (
        <Button className='mt-10 w-full hover:bg-[#F8BE4F] hover:text-black font-semi-bold flex justify-center border bg-transparent text-white border-[var(--lume-yellow)]'>Login</Button>
    )
}