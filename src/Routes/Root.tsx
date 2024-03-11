import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import Categories from "../Pages/Categories"

const Root = () => {
    return (
        <>
        <div>
            <Navbar />
           
            <Outlet/>
        </div>
        <div>
        <Categories/>
            <Footer />

        </div>
        </>
    )
}

export default Root