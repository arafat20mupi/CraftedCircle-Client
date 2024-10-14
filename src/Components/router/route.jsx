import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SignInForm from "../signin/Signin";
import SignupForm from "../signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/signin",
        element: <SignInForm></SignInForm>
      },
      {
        path: "/signup",
        element: <SignupForm></SignupForm>
      },
    ]
  },
]);

export default router;