import React from 'react';
import myprofile from '../pages/sim/myprofile.jpg'
import SocialLinks from './SocialLinks';
import Navbar from '../components/Navbar';
import {Routes,Route} from "react-router-dom"




export const Profile = () => {
  return (
    <>
    <Routes>
<Route path="/" element={<Navbar/>}/>
</Routes>
<div className="bg-red-200 h-200%"> 
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="text-center  mt-[30px] ">
        <img className="rounded-full w-[250px] object-cover" src={myprofile} alt="My Profile" />
        <h2 className="text-xl font-semibold mt-4">Shailesh Gaikwad</h2>
        <h2 className="text-lg">Front End Developer</h2>
        <h2 className="text-black">+91 8010778440</h2>
        <h2 className="text-black">2020bec049@sggs.ac.in</h2>
        <SocialLinks  />
      </div>
    </div>
    </div>
    </>
  );
}



