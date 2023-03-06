import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cover from "./components/Cover";
import ReactDOM from "react-dom/client"
import Patient from "./components/Patient";
import Doctor from "./components/Doctor";
import DoctorHome from "./components/DoctorHome";

const router1 = createBrowserRouter([
  {
    path:"/",
    element:<Cover/>
  },
  {
    path:"/patient",
    element:<Patient/>
  },
  {
    path:"/doctor",
    element:<Doctor/>
  },
  {
    path:"/doctor-home",
    element:<DoctorHome/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router1}/>
);