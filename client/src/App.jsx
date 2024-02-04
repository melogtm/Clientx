// Useful components 
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/home/Home";
import AddUser from "./pages/addUser/AddUser";

export default function App() {
  return (
    <>
        <Topbar /> 
        <Home /> 
        <Footer /> 
    </>
  )
}
