import { Outlet } from "react-router-dom";
import NavBar from "./Components/Share/NavBar";
import Footer from "./Components/Share/Footer";

const App = () => {
  return (
      <div className="bg-gray-100">
        <div>
          <NavBar />
          <div className="py-6">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
  );
};

export default App;
