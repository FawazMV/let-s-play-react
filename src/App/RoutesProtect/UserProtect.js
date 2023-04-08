import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { TokenValidationUser } from "../../utils/Helpers/TokenValidations";




export const TokenCheckUser = () => {
    TokenValidationUser()
    const location = useLocation()
    const authToken = useSelector((store) => store.auth.token);
    if ((location.pathname === '/signup' || location.pathname === '/login') && authToken) {
        return < Navigate to='/' replace />
    }

    if (location.pathname === '/profile' && !authToken) {
        return < Navigate to='/login' replace />
    }
}

