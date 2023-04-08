
const Booked = ({ times, price }) => (
    <div className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 " >
        <p> {times} </p>
        <p>₹ {price}</p>
        <button className='bg-red-500 cursor-not-allowed h-full px-5 p-[10px] rounded-md'>Booked</button>
    </div>
)

export default Booked