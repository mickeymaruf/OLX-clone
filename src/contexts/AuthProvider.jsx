import React, { createContext, useContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = (email, password) => {
        setLoading(true);
        return signOut(auth);
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const value = {
        user,
        loading,
        login,
        logOut,
        googleLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;