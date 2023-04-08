import Dashboard from "../../Pages/Suepr_Admin/Dashboard/Dashboard"
import Users from "../../Pages/Suepr_Admin/Users/Users"
import Turf_Requests from "../../Pages/Suepr_Admin/Turf_Requests/Turf_Requests"
import Turfs_Accepted from "../../Pages/Suepr_Admin/Turfs_Accepted/Turfs_Accepted"
import EarningReport from "../../Pages/Suepr_Admin/EarningReport/EarningReport"

const AdminRoutes = [

    { path: '', element: <Dashboard /> },
    { path: 'users', element: <Users /> },
    { path: 'turf-requests', element: <Turf_Requests /> },
    { path: 'turfs', element: <Turfs_Accepted /> },
    { path: 'all-reports', element: <EarningReport /> }
]

export default AdminRoutes