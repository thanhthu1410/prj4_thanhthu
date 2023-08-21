import Navbar from "@/components/navbars/Navbar"
import "./home.scss"
import { Outlet } from "react-router-dom"
import Footer from "@/components/footers/Footer"

export default function Home() {
  return (
    <div className="home_page">
     <div className="hoome_page_content">
     <Navbar />
         Home
      <div className="content_body">
      <Outlet />
      </div>
      <Footer />
     </div>
    </div>
  )
}
