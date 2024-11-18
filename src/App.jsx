import { Outlet } from "react-router-dom";
import NavBar from "./Components/Share/NavBar";
import Footer from "./Components/Share/Footer";
import { AuthContext } from "./provider/AuthProvider";
import { useContext } from "react";
import SignIn from "./Components/signin/Signin";

const App = () => {
  const { user } = useContext(AuthContext)
  // console.log(user)
  return (
    <div className="bg-gray-100">
      {
        user ? (
          <div>
            <NavBar />
            <div className="py-6">
              <Outlet />
            </div>
            <Footer />
          </div>
        ) :
          (
            <SignIn />
          )
      }
    </div>
  );
};

export default App;
