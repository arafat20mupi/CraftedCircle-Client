import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const users = [];

  const createUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      if (email && password) {
        users.push({ email, password });
        setUser({ email });
        resolve({ email });
      } else {
        reject(new Error("User creation failed"));
      }
    });
  };

  const signIn = async (email, password) => {
    return new Promise((resolve, reject) => {
      const existingUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        setUser({ email });
        resolve({ email });
      } else {
        reject(new Error("Sign in failed: Invalid email or password"));
      }
    });
  };

  const checkUserExists = async (email) => {
    return new Promise((resolve) => {
      const userExists = users.some((user) => user.email === email);
      resolve(userExists);
    });
  };

  const value = {
    user,
    createUser,
    signIn,
    checkUserExists,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
