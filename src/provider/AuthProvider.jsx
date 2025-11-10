import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // New User Add

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User with Email and Password

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in or Sign up with Google

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    login,
    googleLogin,
  };
  return <AuthContext value={authData}> {children}</AuthContext>;
};

export default AuthProvider;
