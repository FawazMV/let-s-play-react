import { Provider } from "react-redux"
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/USER/Layout/Navbar"
import store from "../../utils/Redux/store";
import { TokenCheckUser } from "../RoutesProtect/UserProtect";

const ApplayoutUser = () => {
    return (
        <>
            <Provider store={store}>
                <TokenCheckUser />
                <Navbar />
                <Outlet />
            </Provider>
        </>
    )
}

export default ApplayoutUser