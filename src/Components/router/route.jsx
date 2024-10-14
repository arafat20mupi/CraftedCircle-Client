import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignInForm from "../signin/signin";
import SignupForm from "../signup/Signup";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
