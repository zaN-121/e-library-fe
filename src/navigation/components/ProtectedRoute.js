import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "../../util/token"

const ProtectedRoute = () => {
    const token = getToken()
    if (!token) {
        return <Navigate to={"/auth/login"} replace />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute