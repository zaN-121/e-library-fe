import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/pagenotfound/PageNotFound"
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "../pages/dashboard/Dashboard"
import authRoute from "./routes/authRoute";

const navigationConfigs = createBrowserRouter([
    {path: "*", element: <PageNotFound /> },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [{index: true, element: <Dashboard />}]
    },
    authRoute
])

export default navigationConfigs