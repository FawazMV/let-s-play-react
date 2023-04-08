import { useDispatch } from 'react-redux'
import { removeToken } from '../../../../utils/Redux/AuthSlice'
import {useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch(removeToken())
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <div className="col-span-full flex justify-end pt-3">
            <button onClick={logout} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 md:px-4 w-full md:w-auto   justify-center rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default LogoutButton