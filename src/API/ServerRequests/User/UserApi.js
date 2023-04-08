import { Axiosuser as axios } from "../../Axiosinstance"

export const getUserDetails = async (token) => {
    try {
        const response = await axios.get('/profile/user-details', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const updateProfile = async (data, token) => {
    try {
        const response = await axios.put('/profile/update', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const bookSlot = async (data, token) => {
    try {
        const response = await axios.post('/book/slot', data, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const getUserBookings = async (token) => {
    try {
        const response = await axios.get('/book/details', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}

export const reviewSubmit = async (token, data) => {
    try {
        const response = await axios.post('/user/review-submit', data, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
    } catch (error) {
        return error?.response
    }
}



//payment

export const payementAction = async (token, book_id) => {
    try {
        const response = await axios.get('/book/payment', {
            params: { book_id },
            headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const bookingSuccess = async (token, id) => {
    try {
        const response = await axios.patch('/book/booking-success', { id }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response
    } catch (error) { return error?.response }
}

export const bookingFailed = async (token, id) => {
    try {
        const response = await axios.patch('/book/booking-failed', { id }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response
    } catch (error) { return error?.response }
}