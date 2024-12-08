import { createBrowserRouter } from "react-router-dom";
import CraftedAi from "../Pages/CraftedAi/CraftedAi";
import App from "../../App";
import Home from "../Pages/Home/Home";
import Groups from "../Pages/Groups/Groups";
import MerketPlace from "../Pages/MerketPlace/MerketPlace";
import Video from "../Pages/Video/Video";
import Signin from "../signin/Signin";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../signup/Signup";
import EditProfile from "../Pages/Profile/EditProfile/EditProfile";
import Animation from "../Pages/Animation/Animation";
import JobsSection from "../Pages/JobPost/JobsSection";
import JobPosting from "../Pages/JobPost/JobPost";
import ProductDetails from "../Pages/MerketPlace/products/productDetails";
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
        path: "/craftedAi",
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
        path: "/ProductDetails/:id",
        element: <ProductDetails />,
        loader:({params})=>fetch(`https://fakestoreapi.com/ProductDetails/${params.id}`)


      },
      {
        path: "/video",
        element: <Video></Video>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/animation",
        element: <Animation />,
      },
      {
        path: "/jobs",
        element: <JobsSection />,
      },
      {
        path: "/jobPost",
        element: <JobPosting />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
