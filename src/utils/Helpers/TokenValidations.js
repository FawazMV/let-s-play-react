import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setToken } from "../Redux/AuthSlice.js";
import { setTurfAuth } from "../Redux/TurfAuthSlice";
import { setAdminToken } from "../Redux/AdminAuthSlice.js";

export const tokenValidationTurf = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('turftoken');
    if (token && token != 'undefined') {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) dispatch(setTurfAuth(token));
    }
}

export const TokenValidationUser = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    if (token && token != 'undefined') {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) dispatch(setToken(token))
    }
}

export const tokenValidationAdmin = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('admintoken');
    if (token && token != 'undefined') {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) dispatch(setAdminToken(token));
    }
}