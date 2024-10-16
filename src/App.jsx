import { Outlet } from "react-router-dom";
import NavBar from "./Components/Share/NavBar";
import Footer from "./Components/Share/Footer";

const App = () => {
    return (
        <div className="bg-gray-100">
             <div>
            <NavBar></NavBar>
            <div className="py-6">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default App;