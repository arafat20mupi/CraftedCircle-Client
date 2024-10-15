import { Outlet } from "react-router-dom";
import NavBar from "./Components/Share/NavBar";
import Footer from "./Components/Share/Footer";

const App = () => {
    return (
        <div>
             <div>
            <NavBar></NavBar>


            {/* <div style={{ padding: '0 5rem', minHeight: `calc(100vh - 62px)` }}> */}
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default App;