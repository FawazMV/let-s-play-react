import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"
import { TurfProtection } from "../RoutesProtect/TurfProtect"
import TurfNavbar from '../../Pages/Turf_Management/Layout/TurfNavbar'
import store from "../../utils/Redux/store"


const ApplayoutTurf = () => (
    <>
        <Provider store={store}>
            <TurfProtection />
            <TurfNavbar />
            <Outlet />
        </Provider>
    </>
)

export default ApplayoutTurf
