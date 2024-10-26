import { createBrowserRouter } from "react-router-dom";
import CraftedAi from "../Pages/CraftedAi/CraftedAi";
import App from "../../App";
import Home from "../Pages/Home/Home";
import Groups from "../Pages/Groups/Groups";
import MerketPlace from "../Pages/MerketPlace/MerketPlace";
import Video from "../Pages/Video/Video";
import Signin from "../Signin/Signin";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/craftrdAi",
        element: <CraftedAi></CraftedAi>,
      },
      {
        path: "/group",
        element: <Groups></Groups>,
      },
      {
        path: "/merketPlace",
        element: <MerketPlace></MerketPlace>,
      },
      {
        path: "/video",
        element: <Video></Video>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      
    ],
  },
]);

export default router;
