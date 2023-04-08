import Axios from 'axios'
export const Axiosuser = Axios.create({
    baseURL: 'http://3.26.144.127'
})

export const Axiosturf = Axios.create({
    baseURL: 'http://3.27.116.175'
})

export const AxiosAdmin = Axios.create({
    baseURL: 'http://3.106.126.248'
})  
