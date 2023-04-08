import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookedSlots } from "../../../../../../API/ServerRequests/Turf/TurfsApi";
import { getTimeSlot } from "../../../../../../utils/Helpers/functions";
import Booked from "./Booked";
import BookNow from "./BookNow";

const Times = ({ showTime, date, startTime, endTime, price, mDiv }) => {
    const [bookedTimes, setBookedTimes] = useState([])
    const gap = 60
    const timeSlots = getTimeSlot(startTime, endTime, gap)
    const { id } = useParams()
    useEffect(() => {
        date && bookedSlots(date)
    }, [date])

    const bookedSlots = async (date) => {
        const response = await getBookedSlots(date, id)
        if (response?.status === 200) {
            const bookedTimes = response.data.map((x) => x.time)
            setBookedTimes(bookedTimes)
        }
    }

    return (
        <>
            {showTime && (
                <div className="w-full  md:px-20 py-5">
                    <div className='text-3xl tracking-widest py-9 font-bold w-full   text-center'>
                        <hr className='bg-indigo-600 mb-3 h-[2px]  animate-pulse border-0' />
                        Available Time Slots
                        <hr className='bg-indigo-600 mt-3 h-[2px] animate-pulse border-0' />
                    </div>
                    <div ref={mDiv} className='flex px-3 mb-2 justify-between text-gray-400'>
                        <p> Time Slots </p> <p> Price </p> <p> Available </p>
                    </div>
                    {timeSlots.map((times, index) => (
                        <div key={index}>
                            {!bookedTimes.includes(times) ?
                                <BookNow date={date} time={times} price={price} /> :
                                <Booked times={times} price={price} />
                            }
                        </div>
                    ))}
                </div >
            )}
        </>
    )
}

export default Times

