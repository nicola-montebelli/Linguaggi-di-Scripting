import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
export default function ProtectedRoute({redirectTo, children}) {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if(!user)
        return <Navigate to={redirectTo} replace state={{from: location}} />

    return <>{children}</>
}