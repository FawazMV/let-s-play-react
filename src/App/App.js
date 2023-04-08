import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom"
import ApplayoutTurf from "./AppLayouts/ApplayoutTurf";
import ApplayoutUser from "./AppLayouts/ApplayoutUser";
import AdminRoutes from "./Routers/AdminRoutes";
import TurfRoutes from "./Routers/TurfRoutes";
import UserRoutes from "./Routers/UserRoutes";
import ApplayoutTurf from "./AppLayouts/ApplayoutTurf"

const ApplayoutAdmin = lazy(() => import("./AppLayouts/ApplayoutAdmin"))

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <ApplayoutUser />,
        children: UserRoutes
    },

    {
        path: '/admin',
        element: (<Suspense> <ApplayoutAdmin /> </Suspense>),
        children: AdminRoutes
    },

    {
        path: '/turf-admin',
        element: (<Suspense><ApplayoutTurf /> </Suspense>),
        children: TurfRoutes

    },
])

export default AppRouter


