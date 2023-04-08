import React from 'react'
import React, { useState } from 'react'
import LoginPage from '../../Components/LoginPage';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTurfAuth } from "../../../utils/Redux/TurfAuthSlice";
import { turfLogin } from '../../../API/ServerRequests/Turf/TurfAuth';

const Turf_Login = () => {
    const title = 'Turf Dashboard'
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [apiError, setApiError] = useState()
    const turfLoginapicall = async (formData) => {
        const data = await turfLogin(formData).catch(error => setApiError(error));
        if (data) {
            dispatch(setTurfAuth(data))
            localStorage.setItem('turftoken', data);
            navigate('/turf-admin')
        }

    }
    return <LoginPage title={title} signup='' submit={turfLoginapicall} apiError={apiError} />
}
export default Turf_Login



