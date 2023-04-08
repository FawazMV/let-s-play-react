import ProfitTotal from "./ProfitTotal"
import TurfCount from "./TurfCount"
import UserCount from "./UserCount"

const CountView = () => (
    <div className="md:flex justify-evenly p-5">
        <UserCount />
        <TurfCount />
        <ProfitTotal />
    </div>
)
export default CountView