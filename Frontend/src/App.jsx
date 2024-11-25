import { Outlet } from "react-router-dom";
import Navbar from '../src/components/navbar'
import Footer from "./components/Footer";
export default function App() {
  return (
   <>
   <div className="bg-bgPrimary min-h-screen flex flex-col ">
    <Navbar/>
    <div className="flex-grow">
      <Outlet/>
    </div>
     <Footer/>
   </div>
   </>
  )
}