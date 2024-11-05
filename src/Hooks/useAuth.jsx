import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
    const {user}= useContext(AuthContext)
    return user
};

export default useAuth;