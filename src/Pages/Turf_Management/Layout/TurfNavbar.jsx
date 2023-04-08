import { useState } from 'react'
import Logo from '../../../assets/pngwing.com.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { removeTurfToken } from '../../../utils/Redux/TurfAuthSlice.js'
import { useDispatch } from 'react-redux'


const TurfNavbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const path = location.pathname;
    const Menus = [
        {
            link: '/turf-admin',
            text: 'Dashboard'
        },
        {
            link: '/turf-admin/profile',
            text: 'Profile'
        },
        {
            link: '/turf-admin/bookings',
            text: 'Bookings'
        },
        {
            link: '/turf-admin/earning-report',
            text: 'Earning Reports'
        }
        // , {
        //     link: '/admin/turfs',
        //     text: 'Turfs'
        // },

    ]

    const logout = () => {
        dispatch(removeTurfToken())
        localStorage.removeItem('turftoken');
        navigate('/turf-admin/login')
    }
    return (

        <nav className="absolute z-10 shadow-lg w-full border-gray-200 px-2 sm:px-4 py-2.5  bg-slate-800">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Let's Play</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" onClick={logout} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Logout</button>
                    <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${open ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1" id="navbar-cta`}>
                    <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md: bg-gray-800 md:bg-slate-800 border-gray-700">
                        {Menus.map((x, index) => (
                            <li key={index}> <Link to={x.link} className={`block py-2 pl-3 pr-4 rounded md:p-0 ${x.link === path ? 'bg-blue-700  md:bg-transparent md:text-blue-700  text-white' : 'md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700'}`}>{x.text}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default TurfNavbar