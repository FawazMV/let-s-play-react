import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { reviewSubmit } from "../../../../../../API/ServerRequests/User/UserApi";

const WriteReview = ({ handleClose, setUpdate, update }) => {
    const [rating, setRating] = useState(-1)
    const [text, setText] = useState('')
    const { id } = useParams()
    const token = useSelector((store) => store?.auth?.token);
    const submitReview = async () => {
        const response = await reviewSubmit(token, { rating, text, id })
        if (response?.status === 200) {
            handleClose()
            setUpdate(!update)
        }
    }
    return (
        <div className="flex z-20 pt-16 pb-10 flex-col max-w-xl px-8 shadow-sm rounded-xl lg:px-12 bg-gray-900 text-gray-100">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                    <div className="flex space-x-3">

                        {Array(5).fill('').map((e, index) => (
                            <button key={index} type="button" onClick={() => setRating(index + 1)} title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg viewBox="0 0 20 20" fill="currentColor" className={`w-10 h-10 ${index < rating ? 'text-yellow-500' : 'text-gray-600'} text-gray-600`}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <textarea onChange={(e) => setText(e.target.value)} value={text} rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"></textarea>
                    <button onClick={submitReview} type="button" className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400">Leave feedback</button>
                </div>
            </div>

        </div>
    )
}

export default WriteReview