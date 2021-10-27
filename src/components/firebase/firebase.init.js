import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";


const initializeAuthentication=()=>{
    return initializeApp(firebaseConfig);
}

export default initializeAuthentication;