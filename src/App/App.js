import { createBrowserRouter } from "react-router-dom"
import ApplayoutUser from "./AppLayouts/ApplayoutUser";
import AdminRoutes from "./Routers/AdminRoutes";
import TurfRoutes from "./Routers/TurfRoutes";
import UserRoutes from "./Routers/UserRoutes";
import Error from "../Pages/Components/Error";
import ApplayoutTurf from "./AppLayouts/ApplayoutTurf"
import ApplayoutAdmin from "./AppLayouts/ApplayoutAdmin"

const AppRouter = createBrowserRouter([
    {
        path: '',
        element: <ApplayoutUser />,
        errorElement: <Error />,
        children: UserRoutes
    },

    {
        path: 'admin',
        element: (<ApplayoutAdmin />),
        children: AdminRoutes
    },

    {
        path: 'turf-admin',
        element: (<ApplayoutTurf />),
        children: TurfRoutes

    },
])

export default AppRouter


