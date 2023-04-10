import TodayBookings from './Components/TodayBookings'
import TotalProfit from './Components/TotalProfit'
import TurfGraph from './Components/TurfGraph'
const Turf_Dashboard = () => (
    <div className='pt-20 bg-slate-800 min-h-screen text-gray-300'>
        <div className='sm:flex px-10 justify-evenly pt-10'> <TotalProfit /> <TodayBookings /></div>
        <TurfGraph />
    </div>
)


export default Turf_Dashboard











