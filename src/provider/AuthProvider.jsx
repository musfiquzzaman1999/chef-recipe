import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContex = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => {
            setChefs(data);
        })
        .catch(error => {
            console.log("Error fetching chefs: ", error);
        });
    }, []);
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null);
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
           
        })
        return ()=>{
          return unSubscrib()
        }
    },[])

    const logOut =()=>{
        signOut(auth)
    }
  

    const authinfo ={chefs,createUser,signIn,logOut,loading,user}
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;