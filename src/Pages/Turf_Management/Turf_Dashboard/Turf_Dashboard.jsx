import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getPaymentDetails, getTurfBookingCount, getTurfGraphData } from '../../../API/ServerRequests/Turf/TurfsApi'
import LineGraph from '../../Components/LineGraph'
const Turf_Dashboard = () => {

    return (
        <div className='pt-20 bg-slate-800 min-h-screen text-gray-300'>
            <div className='sm:flex px-10 justify-evenly pt-10'> <TotalProfit /> <TodayBookings /></div>
            <TurfGraph />
        </div>
    )
}

export default Turf_Dashboard



const TurfGraph = () => {
    const token = useSelector((store) => store.turfAuth.token)
    const [data, setData] = useState([])
    useEffect(() => {
        token && getGraphData()
    }, [token])

    const getGraphData = async () => {
        const response = await getTurfGraphData(token)
        if (response.status === 200) setData(response?.data?.monthlyReport)
        console.log(response.data)
    }

    return <LineGraph data={data} />
}




const TotalProfit = () => {
    const [balance, setBalance] = useState(0)
    const [profit, setProfit] = useState(0)
    const token = useSelector((store) => store.turfAuth.token)
    useEffect(() => {
        getPayment()
    }, [])
    const getPayment = async () => {
        const response = await getPaymentDetails(token)
        if (response?.status === 200) {
            if (response?.data?.balance)
                setBalance(response?.data?.balance)
            if (response?.data?.totalWithdrawn)
                setProfit(response?.data?.totalWithdrawn)
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
                    <button to='/' className='text-center p-2 bg-green-600 font-semibold text-sm tracking-wider uppercase  hover:bg-green-500 transition rounded-2xl'>Withdraw</button>
                </div>
            </div>
        </div>
    )
}


const PaymentForm = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvc, setCvc] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Submit form to server using Stripe API
        try {
            const response = await axios.post('/api/stripe/card-transfer', {
                cardNumber,
                expiryMonth,
                expiryYear,
                cvv,
                amount,
            });
            console.log(response.data);
            // Clear form fields
            setCardNumber('');
            setExpiryMonth('');
            setExpiryYear('');
            setCvv('');
            setAmount('');
        } catch (error) {
            console.log(error.response.data);
        }
    };
    return (
        <div className='flex'>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="amount" className="mb-1">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="p-2 bg-gray-800 rounded-lg"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="currency" className="mb-1">
                            Currency
                        </label>
                        <select
                            id="currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="p-2 bg-gray-800 rounded-lg"
                            required
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 bg-gray-800 rounded-lg"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 bg-gray-800 rounded-lg"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="cardNumber" className="mb-1">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>
    )
}


import { Link } from 'react-router-dom'
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