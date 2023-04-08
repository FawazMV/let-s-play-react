import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { bookingSuccess } from "../../../API/ServerRequests/User/UserApi"

const SuccessPage = () => {
    const [details, setDetails] = useState({})
    const { id } = useParams()
    const token = useSelector((store)=>store?.auth?.token)
    useEffect(() => {
        token && updateSuccess()
    }, [token])
    const updateSuccess = async () => {
        const result = await bookingSuccess(token, id)
        if (result?.status === 200) {
            setDetails(result?.data)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-2xl">
                <svg className="w-16 h-16 text-green-500 mb-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18.707 5.293a1 1 0 00-1.414 0L8 14.586 3.707 10.293A1 1 0 102.293 11.707l5 5a1 1 0 001.414 0l11-11a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Your booking is confirmed!</h1>
                <div className="bg-gray-200 p-4 mx-5 text-center shadow-2xl  text-lg justify-center rounded-lg mb-6">
                    <p>Booking ID: <span className="font-bold">{details._id}</span></p>
                    <p>Booked Date: <span className="font-bold">{new Date(details?.bookDate).toLocaleDateString()}</span></p>
                    <p>Booked Time: <span className="font-bold">{details.time}</span></p>
                </div>
                <p className="text-lg text-gray-800 mb-4 text-center">A receipt has been sent to <span className="font-bold">{details?.user?.email}</span>.</p>
                <Link to={'/'}>   <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg block mx-auto">Go Back to Home</button></Link>
                <p className="text-gray-600 text-sm mt-2 text-center">For More Informations -  Contact us at <a href="mailto:mvfawazmfz@gmail.com" className="text-green-500 hover:underline">mvfawazmfz@gmail.com</a>.</p>
            </div>
        </div>
    );

}

export default SuccessPage