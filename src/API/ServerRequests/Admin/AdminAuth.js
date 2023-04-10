import { AxiosAdmin } from "../../Axiosinstance"

export const adminLogin = async (data) => {
    try {
        const response = await AxiosAdmin.post('/admin-login', data)
        return response
    } catch (error) {
        return error?.response
    }

}