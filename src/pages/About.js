import React from 'react'
import Navbar from '../components/Navbar';
import {Routes,Route} from "react-router-dom"



export const About = () =>{
  return (
    <>
    <Routes>
<Route path="/" element={<Navbar/>}/>
</Routes>
<div className="bg-red-200 h-200%"> 
    <div className="pt-8 sm:pt-16 pd:pt-24 text-center  h-screen ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Key Features and Functionalities 🚀
        </h1>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Fetched Data from json file which I created manually
          </li>
          <li className="mb-2">
            React Router DOM: Smooth routing and navigation.
          </li>
          <li className="mb-2">
            Reusable Functional Components: Building efficiency into the
            application.
          </li>
          
          <li className="mb-2">React Carousel: Dynamic food item display.</li>
         
          <li className="mb-2">
            Tailwind CSS: Stylish and interactive user interface.
          </li>
          <li className="mb-2">
            Custom Hooks: Optimizing code splitting and chunking.
          </li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}