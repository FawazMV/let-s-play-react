import { Axiosuser } from "../../Axiosinstance"

export const registerUser = async (data) => {
    try {
        const response = await Axiosuser.post('/register-user', data)
        return response
    }
    catch (error) {
        return error?.response
    }
}

export const userLogin = async (form) => {
    try {
        const response = await Axiosuser.post('/login', form)
        return response
    } catch (error) {
        return error?.response
    }
}

export const otpCall = async (data) => {
    try {
        const response = await Axiosuser.post('/otp-send', data)
        return response
    } catch (error) {
        return error?.response
    }
}

export const otpVerification = async (data) => {
    try {
        const response = await Axiosuser.post('/verify-otp', data)
        return response
    } catch (error) {
        return error?.response
    }
}



export const otpResend = async (mobile) => {
    try {
        const response = await Axiosuser.post('/otp-resend', { mobile })
        return response
    } catch (error) {
        return error?.response
    }
}
