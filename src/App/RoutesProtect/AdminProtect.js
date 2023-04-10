import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { tokenValidationAdmin } from "../../utils/Helpers/TokenValidations"



export const AdminProtection = () => {
    tokenValidationAdmin()
    const authToken = useSelector((store) => store.adminAuth.token)
    return authToken ? <></> : <Navigate to='/admin-login' />;
}

export const ProtectAdminLogin = ({ Component }) => {
    tokenValidationAdmin()
    const authToken = useSelector((store) => store.adminAuth.token)
    return authToken ? <Navigate to='/admin' replace /> : <Component />;
}