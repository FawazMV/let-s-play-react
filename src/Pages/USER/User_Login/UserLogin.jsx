import React, { useState } from 'react'
import LoginPage from '../../Components/LoginPage';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from "../../../utils/Redux/AuthSlice.js";
import { userLogin } from '../../../API/ServerRequests/User/UserAuth';
import { errorSwal } from '../../../utils/Helpers/Swal';

const UserLogin = () => {
    const title = 'full features'
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [apiError, setApiError] = useState()
    const userLoginapicall = async (formData) => {
        const data = await userLogin(formData)
        if (data?.status === 401) setApiError(data.data.message)
        else if (data?.status === 200) {
            const token = data.data.token
            dispatch(setToken(token))
            localStorage.setItem('token', token);
            navigate(-1)
        } else if (data?.status === 500) errorSwal(data.data.error)

    }
    return <LoginPage title={title} signup='/signup' submit={userLoginapicall} apiError={apiError} />
}

export default UserLogin


