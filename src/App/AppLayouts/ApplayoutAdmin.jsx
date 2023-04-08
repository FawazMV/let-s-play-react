import { Outlet } from "react-router-dom"
import AdminNavbar from '../../Pages/Suepr_Admin/Layout/Navbar'

 const ApplayoutAdmin = () => (
    <>
        <AdminNavbar />
        <Outlet />
    </>
)

export default ApplayoutAdmin