import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getBookedDetails } from "../../../API/ServerRequests/Turf/TurfsApi"

const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const token = useSelector(store => store.turfAuth.token)

    const [showAllBookings, setShowAllBookings] = useState(false);
    const toggleShowAllBookings = () => {
        setShowAllBookings(!showAllBookings);
    }
    useEffect(() => {
        token && getBookedTurfs()
    }, [token])
    const getBookedTurfs = async () => {
        const response = await getBookedDetails(token)
        if (response?.status === 200) setBookings(response.data)
        else console.log(response.data)
    }

    return (
        <div className="bg-slate-800 min-h-screen  md:px-10 lg:px-24 pt-20">

            <h1 className="text-white text-3xl font-bold p-5"> Bookings</h1>


            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase text-gray-400">
                        <tr className=" border-b border-gray-70">
                            <th scope="col" className="px-6 pl-10 py-3 bg-gray-800">
                                User
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Booking Id
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3 bg-gray-800">
                                Date
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 pl-10 py-3">
                                Mobile
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.filter(booking => new Date() < new Date(booking.bookDate) || showAllBookings).map(booking => (
                            <tr key={booking._id} className="border-b border-gray-700">
                                <th scope="row" className={`px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800 ${new Date(booking.bookDate).getDate() < new Date().getDate() - 1 ? 'opacity-50' : ''}`}>
                                    {booking.user.username}
                                </th>
                                <td className="px-6 py-4">
                                    {booking._id}
                                </td>
                                <td className="px-6 py-4 bg-gray-800">
                                    {new Date(booking?.bookDate).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    {booking.time}
                                </td>
                                <td className="px-6 py-4">
                                    {booking.user.mobile}
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                <div className="flex  justify-center sm:px-20 lg:justify-end">
                    <div className="cursor-pointer  flex items-center text-gray-600 text-xs">
                        <span className="mr-1">
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d={!showAllBookings ? "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" :
                                    "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"} />

                            </svg>
                        </span>
                        <button className="mr-5 my-2" onClick={toggleShowAllBookings}>{showAllBookings ? 'Hide previous bookings' : 'Previous bookings'}</button>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Bookings

