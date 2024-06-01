import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Home } from "./components/Home";
import { Calculator } from "./components/splitpage/calculator/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/", element: <Calculator /> }],
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  // wrap Contexts around the router, here
  return <RouterProvider router={router} />;
}
