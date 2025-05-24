// import React from "react";
// import logo from './assets/logo.png'

// const Navbar = () => {
//   return (
//     <nav className="w-full  h-20 flex items-center  justify-center px-6">
        
//       {/* Logo + Brand */}
//       <div className="flex items-center font-bold gap-8 mr-10">
//         <img src={logo} alt="Logo" className="h-10 w-auto" />
//         <span className="text-white text-2xl font-bold">
//           BLOOD-<span className="text-red-500">BUMS</span>
//         </span>
//       </div>

//       {/* Menu Items */}
//       <div className="flex gap-10 justify-center text-center items-center text-white font-bold text-2xl">
//         <a href="#home" className="hover:text-red-500 transition duration-200">HOME</a>
//         <a href="#plan" className="hover:text-red-500 transition duration-200">OUR PLAN</a>
//         <a href="#about" className="hover:text-red-500 transition duration-200">ABOUT</a>
//         <a href="#work" className="hover:text-red-500 transition duration-200">WORKOUTS</a>
//         <a href="#client" className="hover:text-red-500 transition duration-200">CLIENT WORDS</a>
//         <a href="#contact" className="hover:text-red-500 transition duration-200">CONTACT US</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import logo from './assets/logo.png'
// import home from './assets/home.jpg'



// const HeroSection = () => {
//   return (
//     <div
//       className="w-full min-h-screen bg-cover bg-center"
//        style={{ backgroundImage: `url(${home})` }}
//     >
//       {/* Navbar */}
//       <nav className="flex justify-center items-center h-24">
//         <div className="flex items-center gap-16">
//           {/* Logo + Brand */}
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Logo" className="h-12 w-auto" />
//             <span className="text-white text-3xl font-bold">
//               BLOOD-<span className="text-red-500">BUMS</span>
//             </span>
//           </div>

//           {/* Nav Links */}
//           <div className="flex gap-10 text-white font-bold text-xl">
//             <a href="#" className="hover:text-red-500 transition">HOME</a>
//             <a href="#" className="hover:text-red-500 transition">OUR PLAN</a>
//             <a href="#" className="hover:text-red-500 transition">ABOUT</a>
//             <a href="#" className="hover:text-red-500 transition">WORKOUTS</a>
//             <a href="#" className="hover:text-red-500 transition">CLIENT WORDS</a>
//             <a href="#" className="hover:text-red-500 transition">CONTACT US</a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Text */}
//       <div className="flex flex-col justify-center pl-20 pt-20 text-left">
//         <h1 className="text-yellow-400 font-extrabold text-[7vw] leading-[1.1] uppercase">
//           Prepare <br />
//           To Change
//         </h1>
//         <h1 className="text-white font-extrabold text-[7vw] leading-[1.1] uppercase">
//           For The Better.
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react';
import './index.css'; // Make sure this includes the font import
import logo from './assets/logo.png'
import home from './assets/home.jpg'


const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home})` }} // replace with your image path
    >
      {/* Navbar */}
      <nav className="flex justify-center items-center h-24">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span className="text-white text-3xl font-bold">
              BLOOD-<span className="text-red-500">BUMS</span>
            </span>
          </div>
          <div className="flex gap-10 text-white font-bold text-xl">
            <a href="#home">HOME</a>
            <a href="#plan">OUR PLAN</a>
            <a href="#about">ABOUT</a>
            <a href="#work">WORKOUTS</a>
            <a href="#client">CLIENT WORDS</a>
            <a href="#contact">CONTACT US</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center pl-20 pt-20 text-left mt-50" id='home'>
        <h1 className="font-anton texty text-yellow-400 text-[7vw] uppercase leading-[1.1]">
          Prepare <br /> To Change
        </h1>
        <h1 className="font-anton  text-white text-[7vw] uppercase leading-[1.1]">
          For The Better.
        </h1>
      </div>
    </div>
  );
};

export default App;

