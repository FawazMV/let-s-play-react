import Payment from "./Payment"

const Modal = ({ setModal, date, time }) => (
    <>
        <div className='fixed inset-x-0 sm:inset-0  transition'></div>
        <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-80 transition"></div>
        </div>
        <div className='w-full grid place-items-center'>
            <div className='absolute  shadow-xl transform transition-all'>
                <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
                    <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-4 fill-current shrink-0 text-violet-400">
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            <rect width="32" height="136" x="240" y="112"></rect>
                            <rect width="32" height="32" x="240" y="280"></rect>
                        </svg> {date.toLocaleDateString()}  <span className='mx-3 font-extrabold'>-</span>{time}
                    </h2>
                    <p className="flex-1 text-gray-400">You have selected the time slot of {time} for one hour on {date.toLocaleDateString()}. Please complete the payment to finalize your booking. </p>
                    <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                        <button onClick={() => setModal(false)} className="px-6 py-2 hover:opacity-50'} rounded-sm">Cancel</button>
                        <Payment date={date} time={time} setModal={setModal} />
                    </div>
                </div>
            </div>
        </div>
    </>
)


export default Modal