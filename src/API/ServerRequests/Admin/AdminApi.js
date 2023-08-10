import { AxiosAdmin as axios } from "../../Axiosinstance";

export const TurfsRequsted = (token) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-requests', { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data }) => resolve(data))
            .catch((err) => reject(err))
    })
}

export const RequstAccept = (id, token) => {
    return new Promise((resolve, reject) => {
        axios.put('/turf-accept', { id }, { headers: { Authorization: `Bearer ${token}` } })
            .then((data) => resolve())
            .catch((err) => reject(err))
    })
}
export const RequstCancel = (id, token) => {
    return new Promise((resolve, reject) => {
        axios.delete('/turf-cancel', { data: { id } }, { headers: { Authorization: `Bearer ${token}` } })
            .then((data) => resolve())
            .catch((err) => reject(err))
    })
}

export const TurfsAccepted = (token) => {
    return new Promise((resolve, reject) => {
        axios.get('/turf-accepted', { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data }) => resolve(data))
            .catch((err) => reject(err))
    })
}



export const ManageTurf = (id, status, token) => {
    return new Promise((resolve, reject) => {
        axios.put('/turf-manage', { id, status }, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => resolve())
            .catch((err) => reject(err))
    })
}


export const getUsers = (token) => {
    return new Promise((resolve, reject) => {
        axios.get('/show-users', { headers: { Authorization: `Bearer ${token}` } })
            .then(({ data }) => resolve(data))
            .catch((err) => reject(err))
    })
}

export const getTurfsReport = async (token) => {
    try {
        const response = await axios.get('/all-booking-report', { headers: { Authorization: `Bearer ${token}` } })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getPaymentRequests = async (token) => {
    try {
        const response = await axios.get('/payment-requests', { headers: { Authorization: `Bearer ${token}` } })
        return response
    } catch (error) {
        return error?.response
    }
}

export const confirmPaymentRequest = async (token, id) => {
    try {
        const response = await axios.put('/payment-confirm', { id }, { headers: { Authorization: `Bearer ${token}` } })
        return response
    } catch (error) {
        return error?.response
    }
}


//Admin dashboard

export const dashboardGraphDetails = async (token) => {
    try {
        const response = await axios.get('/dashboard/graph-details', { headers: { Authorization: `Bearer ${token}` } })
        return response
    } catch (error) {
        return error?.response
    }
}


export const usersCount = async (token) => {
    try {
        const response = await axios.get('/dashboard/get-user-count', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const turfsCount = async (token) => {
    try {
        const response = await axios.get('/dashboard/get-turf-count', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const profitCalculate = async (token) => {
    try {
        const response = await axios.get('/dashboard/get-profit', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}