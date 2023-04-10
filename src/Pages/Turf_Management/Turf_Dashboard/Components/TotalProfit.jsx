import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getPaymentDetails, withdrawalRequest } from "../../../../API/ServerRequests/Turf/TurfsApi"
import { successSwal } from "../../../../utils/Helpers/Swal"

const TotalProfit = () => {
    const [balance, setBalance] = useState(0)
    const [profit, setProfit] = useState(0)
    const token = useSelector((store) => store.turfAuth.token)
    useEffect(() => {
        getPayment()
    }, [balance])
    const getPayment = async () => {
        const response = await getPaymentDetails(token)
        if (response?.status === 200) {
            if (response?.data?.balance)
                setBalance(response?.data?.balance)
            if (response?.data?.totalWithdrawn)
                setProfit(response?.data?.totalWithdrawn)
        }
    }

    const WithdrawRequest = async () => {
        const response = await withdrawalRequest(token)
        if (response?.status === 200) {
            setBalance(0)
            successSwal('Payment request submitted successfully')
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
                        <p className="text-3xl font-semibold leading-none">₹ {balance + profit}</p>
                        <p className="capitalize">Total Profit</p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 p-2">
                    <div className="pb-4 text-sm tracking-wider flex items-center justify-between uppercase  text-violet-400">Balance <span>:</span>   <span className=' text-gray-300'>₹ {balance}</span> </div>
                    <button disabled={balance === 0} onClick={WithdrawRequest} className='text-center p-2 disabled:opacity-50 disabled:hover:bg-green-600 disabled:cursor-not-allowed bg-green-600 font-semibold text-sm tracking-wider uppercase  hover:bg-green-500 transition rounded-2xl'>Withdraw</button>
                </div>
            </div>
        </div>
    )
}
 
export default TotalProfit