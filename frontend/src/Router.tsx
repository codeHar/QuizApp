import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyCollections from "./pages/MyCollections";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./pages/MainLayout";
import CreateCollection from "./pages/CreateCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-collections",
        element: <MyCollections />,
      },
      {
        path: "/create-collection",
        element: <CreateCollection />,
      },
    ],
  },
]);

export default router;
