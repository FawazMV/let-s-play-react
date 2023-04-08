import { useState } from "react";
import { useSelector } from "react-redux";
import AllReviews from "./Components/AllReviews";
import ReviewModal from "./Components/ReviewModal";

const ReviewTab = () => {
    const [open, setOpen] = useState(false)
    const [update, setUpdate] = useState(false)
    const token = useSelector((store) => store?.auth?.token);
    return (
        <>
            <div className={`sm:flex flex-col ${token && 'sm:flex-row-reverse'} justify-between`}>
                {token && <button type="button" onClick={() => setOpen(true)} className="w-full mb-7 sm:mb-0 sm:w-auto justify-center sm:px-5 flex float-right py-3 font-semibold border rounded border-gray-100 text-gray-100">
                    <span>
                        <svg fill="currentColor" className="mr-2 w-6 h-6" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </span>
                    Add Your Review
                </button>}

                <h2 className="text-xl px-2 font-semibold sm:px-5 sm:pt-3 text-gray-100"> Reviews & Rating</h2>


            </div>
            {open && <ReviewModal setUpdate={setUpdate} update={update} onClose={() => setOpen(false)} open={open} />}
            <div className="px-5"><AllReviews update={update} /></div> 
        </>
    )
}
export default ReviewTab