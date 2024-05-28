import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
