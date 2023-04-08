import { useState } from "react";

const BookingList = ({ data }) => {
    const [showAllBookings, setShowAllBookings] = useState(false);
    const toggleShowAllBookings = () => {
        setShowAllBookings(!showAllBookings);
    }
    return (
        <div className="w-full overflow-x-auto">
            <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-gray-700">
                    <tr className="text-gray-100 text-left">
                        <th className="font-semibold text-sm uppercase px-24 py-4">Booking ID</th>
                        <th className="font-semibold text-sm uppercase px-14 py-4">Turf</th>
                        <th className="font-semibold text-sm uppercase px-5 py-4">Booked Date</th>
                        <th className="font-semibold text-sm uppercase px-4 py-4">Booked Time</th>
                        <th className="font-semibold text-sm uppercase px-12 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="">
                    {data.filter(booking => new Date() < new Date(booking.bookDate) || showAllBookings).map(booking => (
                        <tr key={booking._id} className="hover:bg-gray-600 border-b border-opacity-60 border-gray-400 bg-gray-800">
                            <td className="px-6 py-4">#{booking._id}</td>
                            <td className="px-6 py-4">{booking.turf.courtName}</td>
                            <td className="px-6 py-4">{new Date(booking.bookDate).toLocaleDateString()}</td>
                            <td className="px-6 py-4">{booking.time}</td>
                            <td className="px-6 py-4">
                                {booking.payment === "Success" ? (
                                    <span className="inline-block bg-green-500 text-gray-100 rounded-full px-4 py-1 font-semibold">
                                        Successful
                                    </span>
                                ) : (
                                    <span className="inline-block bg-red-500 text-gray-100 rounded-full px-8 py-1 font-semibold">
                                        Failed
                                    </span>
                                )}
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
    )
};


export default BookingList