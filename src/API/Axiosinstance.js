import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'https://let-s-play-user-service.onrender.com'
})

export const Axiosturf = Axios.create({
    baseURL: 'https://let-s-play-turf-service.onrender.com'
})

export const AxiosAdmin = Axios.create({
    baseURL: 'https://let-s-play-admin-service.onrender.com'
})  
