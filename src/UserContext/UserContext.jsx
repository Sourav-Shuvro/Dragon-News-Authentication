import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {

    const [users, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign up New User 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in Existing User 
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sigin with Google 
    const googleSignin = () =>{
        return signInWithPopup(auth, provider)
    }

    // Logout Existing User 
    const logOut = () =>{
        return signOut(auth)
    }

    // Manage Existing User 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currntUser =>{
            setUser(currntUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {createUser, loginUser, googleSignin, logOut, users, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;