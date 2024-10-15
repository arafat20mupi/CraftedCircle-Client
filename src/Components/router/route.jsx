import { createBrowserRouter } from "react-router-dom";
import SignupForm from "../Signup/Signup";
import CraftedAi from "../Pages/CraftedAi/CraftedAi";
import App from "../../App";
import Home from "../Pages/Home/Home";
import Groups from "../Pages/Groups/Groups";
import MerketPlace from "../Pages/MerketPlace/MerketPlace";
import Video from "../Pages/Video/Video";
import Signin from "../Signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/signup",
        element: <SignupForm></SignupForm>
      },
      {
        path: '/craftrdAi',
        element: <CraftedAi></CraftedAi>
      },
      {
        path: '/group',
        element: <Groups></Groups>
      },
      {
        path: "/merketPlace",
        element: <MerketPlace></MerketPlace>
      },
      {
        path: '/video',
        element: <Video></Video>
      }
    ]
  },
]);

export default router;