import { useState } from "react"
import Modal from "./Modal"

const BookNow = ({ time, date, price }) => {
    const [modal, setModal] = useState(false)
    const booking = () => {
        setModal(true)
    }
    return (
        <> {modal && <Modal date={date} time={time} setModal={setModal} />}
            <div className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 " >
                <p> {time} </p>
                <p>₹ {price}</p>
                <button className='bg-green-500 h-full p-[10px] rounded-md' onClick={booking}>Book Now</button>
            </div>
        </>
    )
}

export default BookNow