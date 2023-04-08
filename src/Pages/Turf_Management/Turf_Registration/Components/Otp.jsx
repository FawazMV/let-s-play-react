import { useState } from "react";
import { OTP, Resend } from "../../../../API/ServerRequests/Turf/TurfAuth";

const OtpForm = ({ number, modal, Registration }) => {
    const [otp, setOTP] = useState(["", "", "", ""]);
    const [err, setErr] = useState('')
    const [resend, setResend] = useState(true);

    const onDigitChange = (event, index) => {
        const updatedOTP = [...otp];
        updatedOTP[index] = event.target.value;
        setOTP(updatedOTP);
        if (event.target.value.length === 1 && index < 3) {
            document.getElementsByTagName("input")[index + 1].focus();
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const joinedOTP = otp.join("");
        OTP(joinedOTP, number).then(() => {
            Registration()
            modal(false)
        }).catch((err) => setErr(err))
        setOTP(['', '', '', ''])
    };
    return (
        <div className="bg-white mb-3 pb-5 px-10 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div
                className="flex justify-end pt-3 ml-3"
                onClick={() => modal(false)}>
                <span className="text-5xl font-extrabold cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 6">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </div>
            <div className="flex justify-evenly">
                <h2 className="text-2xl font-[Poppins] font-bold pt-5 pb-3 sm:p-6 sm:pb-4">
                    Enter the OTP send to your number <br /><span className="text-blue-800 ml-[108px]">{number} </span> </h2>
            </div>
            <form onSubmit={onFormSubmit} className="flex justify-evenly">
                {otp.map((digit, index) => (
                    <div key={index} className="mr-2 rounded-3xl">
                        <input type="text" value={digit} onChange={(event) => onDigitChange(event, index)} maxLength={1}
                            className="w-11 h-11 border border-gray-400 rounded text-center text-xl font-medium focus:outline-none" />
                    </div>
                ))}
                <div>
                    <button type="submit" className="bg-indigo-500 text-white font-medium py-2 px-5 ml-5 rounded hover:bg-indigo-600">Submit</button>
                </div>

            </form>
            {resend ? <div className="text-blue-600 my-2 flex w-full justify-evenly" onClick={() => {
                Resend(number).then(() => setResend(false))
                    .catch((err) => console.log(err))
            }}> <p>Resend OTP</p></div> : ''}
            <div className="text-red-500 flex w-full justify-evenly"> <p>{err}</p></div>
        </div>
    )
}




const Otp = ({ number, Registration, modal }) => (
    <div className="fixed bottom-40 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center transition sm:justify-center">
        <div className="fixed inset-0 transition-opacity" onClick={() => document.getElementsByTagName("input")[0].focus()}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <OtpForm number={number} modal={modal} Registration={Registration} />
    </div >
)
export default Otp


