import { Outlet } from "react-router-dom";
import NavBar from "./Components/Share/NavBar";
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
            <div className="pt-3">
              <Outlet />
            </div>
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
