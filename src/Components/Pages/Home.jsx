import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer>

            </Footer>
        </div>
    );
};

export default Home;