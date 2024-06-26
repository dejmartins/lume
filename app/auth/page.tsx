import { dmSans } from "../ui/fonts"
import LoginForm from "../ui/login-form"

export default function LoginPage() {
    return (
        <div className={`${dmSans.className} antialiased min-h-screen`}>
            <img src="/props/left-top-corner.png" alt="Top Left Prop" className="absolute top-0 left-0 hidden md:block" />

            <div className="flex flex-col justify-center items-center min-h-screen -mt-14">
                <div className="w-full max-w-[400px]">
                    <img src="/props/lume-logo.png" alt="Lume Logo" className="h-24 mx-auto" />
                    <LoginForm />
                </div>
            </div>

            <img src="/props/right-bottom-corner.png" alt="Bottom Right Prop" className="absolute bottom-0 right-0 hidden md:block" />
        </div>
    )
}