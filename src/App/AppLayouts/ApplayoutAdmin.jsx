import { Provider } from "react-redux";
import { Outlet } from "react-router-dom"
import AdminNavbar from '../../Pages/Suepr_Admin/Layout/Navbar'
import store from "../../utils/Redux/store";
import { AdminProtection } from "../RoutesProtect/AdminProtect";

const ApplayoutAdmin = () => (
    <>
        <Provider store={store}>
            <AdminProtection />
            <AdminNavbar />
            <Outlet />
        </Provider>
    </>
)

export default ApplayoutAdmin