import { useEffect, useState } from "react"
import { getUserBookings } from "../../../../API/ServerRequests/User/UserApi"
import BookingList from "./BookingList"

const BookingDetails = ({token}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        token && getUserBookingDetails()
    }, [token])
    const getUserBookingDetails = async () => {
        const response = await getUserBookings(token)
        if (response?.status === 200) setData(response.data)
    }

    return (
        <>{
            data.length ?
                <div className='mt-10 bg-gray-800'>
                    <section className="mx-auto sm:p-4 container flex flex-col md:p-10 bg-gray-800 text-gray-50">
                        <fieldset className="grid grid-cols-4 gap-6 p-14 rounded-md shadow-sm bg-gray-900">
                            <span className='col-span-full text-center text-3xl font-bold'>Your Bookings</span>
                            <div className="col-span-full w-full overflow-x-auto">
                                <BookingList data={data} />
                            </div>
                        </fieldset>
                    </section>
                </div> : ''}
        </>
    )
}

export default BookingDetails