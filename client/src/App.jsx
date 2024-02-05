// Useful components 
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/home/Home";
import AddUser from "./pages/addUser/AddUser";
//Routing 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home /> 
  }, 
  {
    path: "/adicionar",
    element: <AddUser /> 
  }
]);


export default function App() {
  return (
    <>
        <Topbar /> 
        <RouterProvider router={router} /> 
        <Footer /> 
    </>
  )
}
