import { Axiosturf } from "../../Axiosinstance";

export const register = (formData) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/turf-registration', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(({data}) => resolve())
            .catch((err) => reject(err?.response?.data?.message))
    })

}

export const OTP = (otp,mobile) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/otp', {otp,mobile}).then(() => resolve())
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const EmailCheck = (email, mobile) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/send-otp', { email, mobile }).then(() => resolve())
            .catch((err) => reject(err?.response?.data?.message))
    })
}

export const Resend = (mobile) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/otp-resend', { mobile }).then(() => resolve())
            .catch((err) => reject(err.message))
    })
}


export const turfLogin = (data) => {
    return new Promise((resolve, reject) => {
        Axiosturf.post('/turf-login', data).then(({ data }) => resolve(data.token))
            .catch(err => reject(err?.response?.data?.message))
    })
}