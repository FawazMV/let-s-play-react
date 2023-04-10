import { useRef, useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import Times from './Components/Times';
const BookingCalendar = ({ bookings }) => {
    const { openingTime, closingTime, Price, Holiday } = bookings;
    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)
    const isDateDisabled = ({ date }) => {
        return date.getDay() === 0;
    };
    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth() - 1, today.getDate());
    const movingdiv = useRef(null);
    const move = () => {
        setShowTime(true)
        movingdiv?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className='flex'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center w-full px-5'>
                        <Calendar maxDate={maxDate} tileDisabled={isDateDisabled} minDate={new Date()} onChange={setDate} onClickDay={() => move()} />
                    </div>
                </div>
                <div className=' hidden lg:flex justify-center overflow-hidden text-2xl font-bold text-center lg:w-1/2 h-full py-20'>
                    <div>Choose your date & <br /> book your slot
                        <div className="relative w- pt-5 ">
                            <div className=" absolute w-full h-full" style={{ animation: "slide 2s ease-in-out infinite alternate" }}>
                                <span>
                                    <svg width="30" height="30" fill="currentColor" className="font-extrabold text-indigo-600" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Times mDiv={movingdiv} startTime={openingTime} price={Price} endTime={closingTime} showTime={showTime} date={date} />
        </>
    );
}

export default BookingCalendar






