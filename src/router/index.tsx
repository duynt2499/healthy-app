import { createBrowserRouter } from "react-router-dom";
import Column from "../pages/Column";
import Home from "../pages/Home";
import MyRecord from "../pages/MyRecord";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-record",
    element: <MyRecord />,
  },
  {
    path: "/column",
    element: <Column />,
  },
]);

export default router;
