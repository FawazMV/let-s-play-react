import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'https://let-s-play-server.onrender.com'
})

export const Axiosturf = Axios.create({
    baseURL: 'https://turf.hexashop.cloud'
})

export const AxiosAdmin = Axios.create({
    baseURL: 'http://3.106.126.248'
})  
