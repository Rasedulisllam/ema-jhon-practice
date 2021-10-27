
import initializeAuthentication from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication()

const googleProvider=new GoogleAuthProvider();
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [err,setErr]=useState({})
    const auth= getAuth();

    const googleSignIn=()=>{
       return signInWithPopup(auth,googleProvider)
           
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
        })
    },[])

    const logOut=()=>{
        signOut(auth)
            .then(()=>{
                setUser({})
            })
            .catch(err=> setErr(err.message))
    }

    return {
        user,
        err,
        googleSignIn,
        logOut
    }
};

export default useFirebase;
