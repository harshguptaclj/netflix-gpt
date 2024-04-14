import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux"
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const user= useSelector(store=> store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth , (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when components unmount
    return ()=>unsubscribe();
  },[])

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
       />
       {user && <div className="flex p-2">
        <img
          className="w-14 h-14 rounded-md my-2"
          alt="userIcon"
          src={user?.photoURL}
          ></img>
        <button onClick={handleSignOut} className="font-bold text-white h-12 mx-5 my-3 p-2 bg-red-500 rounded-xl">Sign Out</button>
        
       </div>}
    </div>
  )
}

export default Header
