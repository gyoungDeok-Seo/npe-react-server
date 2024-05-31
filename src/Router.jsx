import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/Home";
import QnA from "./pages/qna/QnA";
import Profiles from "./pages/Profiles";
import ProfileUpdate from "./pages/ProfileUpdate";
import CareerCreate from "./pages/CareerCreate";

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
  {
    path: "/profiles",
    element: <Profiles />,
    children: [],
  },
  {
    path: "/profiles/update",
    element: <ProfileUpdate />,
    children: [],
  },
  {
    path: "/profiles/careers/create",
    element: <CareerCreate />,
    children: [],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
