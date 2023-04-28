import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { usersCount } from "../../../../API/ServerRequests/Admin/AdminApi"

const UserCount = () => {
    const [count, setCount] = useState('0')
    const token = useSelector(store => store.adminAuth.token)
    useEffect(() => {
        token && getUsersCount()
    }, [token])

    const getUsersCount = async () => {
        const response = await usersCount(token)
        if (response?.status === 200) setCount(response.data)
    }
    return (
        <div className=" flex flex-col bg-gray-900 p-2 rounded-xl">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                <div className="flex items-center justify-center px-4 rounded-lg bg-violet-400 text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                        <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center align-middle">
                    <p className="text-[33px] font-semibold leading-none"> {count}</p>
                    <p className="capitalize text-sm">Active Users</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 p-2">
                <Link to='/admin/users' className='p-2 bg-cyan-200 font-semibold text-sm tracking-wider uppercase  hover:opacity-80 transition rounded-2xl text-center' ><button>All Users</button></Link>
            </div>
        </div>
    )
}
export default UserCount