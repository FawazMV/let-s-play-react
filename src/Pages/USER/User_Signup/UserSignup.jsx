import React, { useState } from 'react'
import { otpCall, otpVerification, registerUser } from '../../../API/ServerRequests/User/UserAuth';
import { useNavigate } from 'react-router-dom'
import SignupPage from './Components/SignupPage';
import { errorSwal } from '../../../utils/Helpers/Swal';

const UserSignup = () => {
    const navigate = useNavigate()
    const [apiError, setApiError] = useState()
    const [otpPage, setOtpPage] = useState(false)
    const [otpErr, setOtpErr] = useState('')
    const [formData, setFormData] = useState({})

    const otpCallApi = async (data) => {
        const result = await otpCall({ mobile: data.mobile, email: data.email })
        if (result?.status === 200) {
            setOtpPage(true)
            setFormData(data)
        } else if (result?.status === 409) {
            setApiError(result?.data?.message)
        } else if (result?.status === 500) errorSwal(result?.data?.error)


    }
    const otpCheckApi = async (mobile, otp) => {
        const verify = await otpVerification({ mobile, otp })
        if (verify.status === 200) {
            setOtpPage(false)
            const data = await registerUser(formData)
            if (data.status === 201) navigate('/login')
            else if (data.status === 500) errorSwal(data.data.error)
        } else if (verify.status === 400) setOtpErr(verify.data.message)
        else if (verify.status === 500) errorSwal(verify.data.error)
    }


    return (<SignupPage otpSubmit={otpCheckApi} submit={otpCallApi}
        apiError={apiError} otpErr={otpErr} modal={setOtpPage} otpPage={otpPage} />)
}

export default UserSignup





