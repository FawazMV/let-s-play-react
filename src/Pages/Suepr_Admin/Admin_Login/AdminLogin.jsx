import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { adminLogin } from "../../../API/ServerRequests/Admin/AdminAuth"
import { setAdminToken } from "../../../utils/Redux/AdminAuthSlice"
import LoginPage from "../../Components/LoginPage"

const AdminLogin = () => {
    const title = 'Admin Dashboard'
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [apiError, setApiError] = useState()
    const adminLoginapicall = async (formData) => {
        const response = await adminLogin(formData)
        if (response?.status === 200) {
            dispatch(setAdminToken(response?.data?.token))
            localStorage.setItem('admintoken', response?.data?.token);
            navigate('/admin')
        } else if (response?.status === 401) {
            setApiError(response?.data?.message)
        }

    }
    return <LoginPage title={title} signup='' submit={adminLoginapicall} apiError={apiError} />
}

export default AdminLogin