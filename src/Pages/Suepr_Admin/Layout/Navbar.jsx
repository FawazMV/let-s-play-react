import { useState } from 'react'
import Logo from '../../../assets/pngwing.com.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeAdminToken } from '../../../utils/Redux/AdminAuthSlice'


const AdminNavbar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const path = location.pathname;
    const Menus = [
        {
            link: '/admin',
            text: 'Dashboard'
        },
        {
            link: '/admin/users',
            text: 'Users'
        },
        {
            link: '/admin/turf-requests',
            text: 'Turf Requests'
        },
        {
            link: '/admin/turfs',
            text: 'Turfs'
        },
        {
            link: '/admin/all-reports',
            text: 'Reports'
        },
        {
            link: '/admin/payment-requests',
            text: 'Payment Requests'
        }


    ]

    const logout = () => {
        dispatch(removeAdminToken())
        localStorage.removeItem('admintoken');
        navigate('/admin-login')
    }

    return (

        <nav className="absolute w-full border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Let's Play</span>
                </a>
                <div className="flex lg:order-2">
                    <button onClick={logout} type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Logout</button>
                    <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm  rounded-lg lg:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${open ? '' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta`}>
                    <ul className="flex flex-col p-4 mt-4 border  rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg: bg-gray-800 lg:bg-gray-900 border-gray-700">
                        {Menus.map((x, index) => (
                            <li key={index}> <Link to={x.link} className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${x.link === path ? 'bg-blue-700  lg:bg-transparent lg:text-blue-700  text-white' : 'lg:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700'}`}>{x.text}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default AdminNavbar