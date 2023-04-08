import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { turfsCount } from "../../../../API/ServerRequests/Admin/AdminApi"

const TurfCount = () => {
    const [count, setCount] = useState('0')
    useEffect(() => {
        getTurfsCounts()
    }, [])

    const getTurfsCounts = async () => {
        const response = await turfsCount('token')
        if (response.status === 200) setCount(response.data)
    }
    return (
        <div className="flex flex-col bg-gray-900 p-2 md:my-0 my-5 rounded-xl">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                <div className="flex items-center justify-center px-4 rounded-lg bg-violet-400 text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                        <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                        <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                        <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                    </svg>
                </div>
                <div className="flex flex-col justify-center items-center align-middle">
                    <p className="text-[33px] font-semibold leading-none"> {count}</p>
                    <p className="capitalize text-sm">Play Grounds</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 p-2">
                <Link to='/admin/turfs' className='p-2 bg-cyan-200 font-semibold text-sm tracking-wider uppercase  hover:opacity-80 transition rounded-2xl text-center' ><button>All Turfs</button></Link>
            </div>
        </div>
    )
}
export default TurfCount