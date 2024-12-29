import { Outlet } from "react-router-dom";
import NavBar from "./Components/Share/NavBar";
import { AuthContext } from "./provider/AuthProvider";
import { useContext } from "react";
import SignIn from "./Components/signin/Signin";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="p-6">
        <Skeleton count={1} height={50} />
        <div className="mt-4">
          <Skeleton count={4} height={30} style={{ marginBottom: "10px" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      {user ? (
        <div>
          <NavBar />
          <div className="pt-3">
            <Outlet />
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default App;
