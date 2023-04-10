import { useState } from "react";
import WriteReview from "./WriteReview";

const ReviewModal = ({ onClose, setUpdate,update }) => {
    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => onClose(), 1500);
    };

    return (
        <>
            <div className="fixed  inset-0 bg-gray-800 bg-opacity-50 transition-opacity "></div>
            <div className={`fixed top-[20%] left-1/2 transform -translate-x-1/2  translate-y-0  rounded-md p-8 transition-transform duration-[1500ms] ${isClosing ? 'translate-y-[600px]' : ''}`} >
                <span onClick={handleClose}>
                    <svg fill="currentColor" className="opacity-60 cursor-pointer absolute right-14 top-14 w-8 h-8" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
                <WriteReview setUpdate={setUpdate} update={update} handleClose={handleClose} />
            </div>
        </>
    );
};

export default ReviewModal