import { NavLink } from "react-router-dom"

function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <NavLink to="/dashboard" className="text-2xl font-bold">Login</NavLink>
        </div>
    )
}

export default LoginPage
