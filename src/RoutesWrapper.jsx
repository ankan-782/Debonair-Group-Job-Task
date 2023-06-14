import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout";
import UserDetails from "./pages/dashboard/UserDetails";
import UsersList from "./pages/dashboard/UsersList";

export default function RoutesWrapper() {
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/users" />, index: true },
                { path: 'usersList', element: <UsersList /> },
                { path: 'userDetails', element: <UserDetails /> },
            ]
        }
    ]);

    return routes;
}
