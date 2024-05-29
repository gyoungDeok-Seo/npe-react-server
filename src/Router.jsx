import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/Home";
import Profiles from "./pages/Profiles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [],
    },
    {
        path: "/home",
        element: <HomePage />,
        children: [],
    },
    {
        path: "/profiles",
        element: <Profiles />,
        children: [],
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
