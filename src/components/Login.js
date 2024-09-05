import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch} from "react-redux";
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true);
  const [errorMessage, setErrorMessage]= useState(null);
  
  const dispatch = useDispatch();

  const name =useRef(null);
  const email =useRef(null);
  const password = useRef(null);

  const handleButtonClick =()=>{
    
    const message= checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm)
    {
      //sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
        }).catch((error) => {
          // An error occurred
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage+"  Error Code: "+errorCode);
        });
        
       
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage+"  Error Code: "+ errorCode);
      });

    }
    else
    {
      //sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage+"  Error Code: "+errorCode);
      });
    }
  }

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div >
      <div ><Header/></div>
      <div className="absolute">
        <img 
            className='h-screen  md:w-screen md:h-screen '
            src={BG_URL}
            alt="logo"
        />
      </div>
      <form 
        onSubmit={(e)=>e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-80 ">
        <h1 className="font-bold text-3xl py-3">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        <h3 className="text-2xl text-yellow-200">Notice : Use Only Airtel Network</h3>
        <h5 className="text-base">TMDB API and OpenAI API, used in this project are blocked by Jio and NITP </h5>
        {!isSignInForm && <input 
          ref={name}
          type="text" 
          placeholder="Full Name" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />}
        <input 
          ref={email}
          type="text" 
          placeholder="Email Address" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input 
          ref={password}
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-lg font-bold py-2 text-red-500">{errorMessage}</p>
        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">Submit</button>
        <p className="py-4 cursor-pointer hover:underline" onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? Sign Up Now":"Already Registed? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
