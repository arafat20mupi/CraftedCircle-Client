/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    updateProfile,
    GithubAuthProvider,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateProfileData = async (name, img) => {
        try {
            setLoading(true);
            await updateProfile(auth.currentUser, { displayName: name } ,{ photoURL : img});
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const provider = new GoogleAuthProvider();

    const signGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const gitProvider = new GithubAuthProvider();

    const signGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            
        });

        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        signGoogle,
        updateProfileData, 
        signGithub,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
