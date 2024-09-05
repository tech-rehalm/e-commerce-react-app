import {Outlet} from "react-router-dom"
import Navigation from "./pages/Auth/Navigation"
import {ToastContainer}
 from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Navigation/>
      <div className="py-3">
        <Outlet/>
      </div>
    </div>
  )
}