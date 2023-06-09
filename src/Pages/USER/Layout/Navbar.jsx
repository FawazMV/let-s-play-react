import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/pngwing.com.png'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from "../../../utils/Redux/AuthSlice";
import jwtDecode from 'jwt-decode'


const Title = () => (
  <img className='w-[55px] mx-2' src={Logo} />
)


const Navbar = () => {
  const islogin = useSelector((store) => store.auth.token);
  const location = useLocation();
  const path = location.pathname;
  let Links = [
    { name: "HOME", link: "/" },
    { name: "TURF BOOKING", link: "/turfs" },
    { name: "TURF REGISTRATION", link: "/register-turf" },
    // { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/contact-us" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-lg w-full fixed z-30 top-0 left-0'>
      <div className='lg:flex items-center justify-between bg-slate-800 py-4 lg:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>

          <Title />
          Let's Play
        </div>

        <div onClick={() => setOpen(!open)} className='text-9xl font-extrabold text-white absolute right-8 top-6 cursor-pointer lg:hidden'>
          {open ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule='evenodd' d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0  1-.5-.5z" />
          </svg>}
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-slate-800 lg:z-auto z-[-1] left-0 w-full  lg:w-auto lg:pl-0   pl-9  transition-all duration-500 ease-in ${open ? 'top-[67px] ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-sm lg:ml-8 lg:my-0 my-7'>
                <Link to={link.link} onClick={() => setOpen(false)} className='text-gray-800 lg:text-white hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))
          }
          {path === '/register-turf' ? <NavbarButton route='/turf-admin/login' name='Dashboard' /> : islogin ? <ProfileButon /> : <NavbarButton route='/login' name='Get Started' />}
        </ul>
      </div>
    </div>
  )
}

export default Navbar


const ProfileButon = () => (
  <span className='text-sm lg:ml-8 lg:my-0 my-7'>  <Link to='/profile'>
    <span className=' text-gray-800 lg:hidden hover:text-gray-400 duration-500'>PROFILE</span>
    <svg width="30" height="30" fill="currentColor" className="bi bi-person-circle hidden lg:block  text-white" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
    </svg></Link></span>
)

const NavbarButton = ({ name, route }) => {
  const navigate = useNavigate()
  return (<button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500" onClick={() => navigate(route)} > {name}</button >)
}