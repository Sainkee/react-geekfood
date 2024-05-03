import LayOut from "./components/LayOut.jsx";
import Qoute from "./components/Qoute.jsx";
import HomePage from "./components/HomePage.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "/", element: <HomePage /> },

      { path: "qoute", element: <Qoute /> },
    ],

    errorElement: <h1>Not Found</h1>,
  },
]);
export default router;
