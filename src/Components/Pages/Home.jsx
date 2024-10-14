import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavBar from "../Share/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer>

            </Footer>
        </div>
    );
};

export default Home;