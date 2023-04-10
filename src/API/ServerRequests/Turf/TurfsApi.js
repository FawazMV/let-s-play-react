import { Axiosturf as axios } from "../../Axiosinstance";

export const getTurfs = () => {
    return new Promise((resolve, reject) => {
        axios.get('/turfs').then(({ data }) => {
            resolve(data)
        })
            .catch((err) => reject(err));
    })
}


export const getLocationWiseTurfs = (distric) => {
    return new Promise((resolve, reject) => {
        axios.get('/turfs-location', { params: { distric } }).then(({ data }) => {
            resolve(data)
        })
            .catch((err) => reject(err));
    })
}

export const getTurfProfile = async (token) => {
    try {
        const response = await axios.get('/turf-profile', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }

}

export const updateTurfDetails = async (data, token) => {
    try {
        const response = await axios.patch('/update-turf-profile', data, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getTurfDetails = (id) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-details', { params: { id } }).then(({ data }) => resolve(data))
            .catch(err => reject(err?.response?.data?.message))
    })
}

export const getBookedDetails = async (token) => {
    try {
        const response = await axios.get('/booked-details', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getEarningReport = async (token) => {
    try {
        const response = await axios.get('/earning-report', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getPaymentDetails = async (token) => {
    try {
        const response = await axios.get('/profit-details', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getTurfGraphData = async (token) => {
    try {
        const response = await axios.get('/turf-graph-data', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getTurfBookingCount = async (token) => {
    try {
        const response = await axios.get('/turf-bookings-count', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}


export const withdrawalRequest = async (token) => {
    try {
        const response = await axios.get('/turf-payment-request', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

///booked slots

export const getBookedSlots = async (date, id) => {
    try {
        const response = await axios.get('/booked-slots', { params: { date, id } })
        return response
    } catch (error) {
        return error?.response
    }
}

//reviews

export const getTurfView = async (id) => {
    try {
        const response = await axios.get('/get-review', { params: { id } })
        return response
    } catch (error) {
        return error?.response
    }
}


