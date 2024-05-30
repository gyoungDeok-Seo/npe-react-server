import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/Home";
import QnA from "./pages/qna/QnA";

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
      path: "/qnas",
      element: <QnA />,
      children: [],
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
