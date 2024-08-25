import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import {useDispatch} from "react-redux"
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { deleteGptMovieResult, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
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

  const handleGptSearchClick =()=>{
    //Toggle GPT Search button
    dispatch(toggleGptSearchView());
    if(showGptSearch){
      dispatch(deleteGptMovieResult());
    }

  }

  const handleLanguageChange =(e)=>{
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between my-0 ">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
       />
       
       {user && <div className="flex justify-between p-2">
        {showGptSearch && <select onChange={handleLanguageChange} className='p-2 my-3 bg-gray-900 text-white rounded-lg '>
        {SUPPORTED_LANGUAGES.map((lang)=>(
          <option key={lang.identifier} value={lang.identifier}>
          {lang.name}
          </option>
        ))}
          
        </select>}
        <button className="py-2 px-4 mx-5 my-3 bg-purple-800 text-white rounded-lg font-bold"
         onClick={handleGptSearchClick}>{!showGptSearch?"🔍 GPT Search":"Home"}</button>
        <img
          className=" hidden md:inline-block w-14 h-12 my-3 rounded-md "
          alt="userIcon"
          src={USER_AVATAR}
          ></img>
        <button onClick={handleSignOut} className="font-bold text-white h-12 w-14 sm:w-24 mx-5 my-3 md:p-2 bg-red-600 rounded-xl">Sign Out</button>
        
       </div>}
       
    </div>
  )
}

export default Header
