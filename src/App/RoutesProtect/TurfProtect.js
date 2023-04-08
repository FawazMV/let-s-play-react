import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { tokenValidationTurf } from "../../utils/Helpers/TokenValidations.js"



export const TurfProtection = () => {
    tokenValidationTurf()
    const authToken = useSelector((store) => store.turfAuth.token)
    return authToken ? <></> : <Navigate to='/turf-admin/login' />;
}

export const ProtectTurfLogin = ({ Component }) => {
    tokenValidationTurf()
    const authToken = useSelector((store) => store.turfAuth.token)
    return authToken ? <Navigate to='/turf-admin' replace /> : <Component />;
}