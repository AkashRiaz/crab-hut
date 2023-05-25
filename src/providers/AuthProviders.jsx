import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)
   

    const createUser = (email, password, name, photo) => {
        setLoading(true)
           createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: name,
              photoURL: photo
            }).then(() => {
              // Profile updated successfully
              setUser(user);
              setError('')
              return user;
            }).catch((error) => {
                setError( error.message);
              return null;
            });
          }).catch((error) => {
            setError(error.message);
            return null;
          });
      }
    const emailSignIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const gitHubSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const logOut =()=>{
        return signOut(auth);
    }


    const authInfo ={
        createUser,
        loading,
        user,
         emailSignIn,
         googleSignIn,
         gitHubSignIn,
         logOut,
         error
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;