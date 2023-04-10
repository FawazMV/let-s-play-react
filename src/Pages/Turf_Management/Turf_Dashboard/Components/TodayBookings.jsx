import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTurfBookingCount } from '../../../../API/ServerRequests/Turf/TurfsApi'
const TodayBookings = () => {
    const [today, setToday] = useState(0)
    const [total, setTotal] = useState(0)
    const token = useSelector((store) => store.turfAuth.token)
    useEffect(() => {
        getBookingCount()
    }, [])
    const getBookingCount = async () => {
        const response = await getTurfBookingCount(token)
        if (response?.status === 200) {
            setToday(response?.data?.today)
            setTotal(response?.data?.total)
        }
    }
    return (
        <div className='py-2 sm:py-0'>
            <div className="flex flex-col bg-gray-900 p-2 rounded-xl">
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                            <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                            <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center items-center align-middle">
                        <p className="text-3xl font-semibold leading-none"> {today}</p>
                        <p className="capitalize">Today's Bookings</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 p-2">
                    <div className="pb-4 text-sm tracking-wider flex items-center justify-between uppercase  text-violet-400">Total Bookings <span>:</span>   <span className=' text-gray-300'> {total}</span> </div>
                    <Link className='p-2 bg-green-600 font-semibold text-sm tracking-wider uppercase text-center  hover:bg-green-500 transition rounded-2xl' to='/turf-admin/bookings'> All Bookings</Link>
                </div>
            </div>
        </div>
    )
}

export default TodayBookings