
// // import React from 'react';
// // import './index.css'; // Make sure this includes the font import
// // import logo from './assets/logo.png'
// // import home from './assets/home.jpg'


// // const App = () => {
// //   return (
// //     <div
// //       className="min-h-screen bg-cover bg-center"
// //       style={{ backgroundImage: `url(${home})` }} // replace with your image path
// //     >
// //       {/* Navbar */}
// //       <nav className="flex justify-center items-center h-24">
// //         <div className="flex items-center gap-16">
// //           <div className="flex items-center gap-3">
// //             <img src={logo} alt="Logo" className="h-12 w-auto" />
// //             <span className="text-white text-3xl font-bold">
// //               BLOOD-<span className="text-red-500">BUMS</span>
// //             </span>
// //           </div>
// //           <div className="flex gap-10 text-white font-bold text-xl">
// //             <a href="#home">HOME</a>
// //             <a href="#plan">OUR PLAN</a>
// //             <a href="#about">ABOUT</a>
// //             <a href="#work">WORKOUTS</a>
// //             <a href="#client">CLIENT WORDS</a>
// //             <a href="#contact">CONTACT US</a>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <div className="flex flex-col justify-center pl-20 pt-20 text-left mt-50" id='home'>
// //         <h1 className="font-anton texty text-yellow-400 text-[7vw] uppercase leading-[1.1]">
// //           Prepare <br /> To Change
// //         </h1>
// //         <h1 className="font-anton  text-white text-[7vw] uppercase leading-[1.1]">
// //           For The Better.
// //         </h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";
// import "./index.css"; // your font import, styles
// import logo from "./assets/logo.png";
// import home from "./assets/home.jpg";

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${home})` }}
//     >
//       {/* Navbar */}
//       <nav className="flex justify-between items-center h-24 px-6 sm:px-20 bg-transparent">
//         {/* Logo + Brand */}
//         <div className="flex items-center gap-3">
//           <img src={logo} alt="Logo" className="h-12 w-auto" />
//           <span className="text-white text-3xl font-bold select-none">
//             BLOOD-<span className="text-red-500">BUMS</span>
//           </span>
//         </div>

//         {/* Hamburger Button (mobile only) */}
//         <button
//           className="text-white sm:hidden focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Menu Items */}
//         <div
//           className={`
//             absolute top-full left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm
//             sm:static sm:bg-transparent sm:flex sm:items-center sm:w-auto
//             transition-max-height duration-300 ease-in-out overflow-hidden
//             ${isMenuOpen ? "max-h-96" : "max-h-0"}
//             sm:max-h-full
//           `}
//         >
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-white font-bold text-xl px-6 py-4 sm:p-0">
//             {["home", "plan", "about", "work", "client", "contact"].map(
//               (section) => (
//                 <a
//                   key={section}
//                   href={`#${section}`}
//                   className="hover:text-red-500 transition duration-200"
//                   onClick={() => setIsMenuOpen(false)} // close menu on click (mobile)
//                 >
//                   {section.toUpperCase()}
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div
//         className="flex flex-col justify-center pl-6 sm:pl-20 pt-20 text-left mt-50"
//         id="home"
//       >
//         <h1 className="font-anton texty text-yellow-400 text-[7vw] uppercase leading-[1.1]">
//           Prepare <br /> To Change
//         </h1>
//         <h1 className="font-anton text-white text-[7vw] uppercase leading-[1.1]">
//           For The Better.
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import "./index.css"; // Your CSS including Tailwind + fonts
import logo from "./assets/logo.png";
import home from "./assets/home.jpg";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center h-24 px-6 sm:px-20 bg-transparent">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-white text-3xl font-bold select-none">
            BLOOD-<span className="text-red-500">BUMS</span>
          </span>
        </div>

        {/* Hamburger Button: Visible only on small screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // X Icon when open
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon when closed
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-24 left-0 w-full bg-transparent bg-opacity-70 sm:bg-transparent sm:static sm:flex sm:items-center sm:w-auto`}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 text-white font-bold text-xl px-6 py-4 sm:p-0">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
              HOME
            </a>
            <a href="#plan" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
              OUR PLAN
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
              ABOUT
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
              WORKOUTS
            </a>
            <a href="#client" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
              CLIENT WORDS
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
              CONTACT US
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center pl-6 sm:pl-20 pt-20 text-left mt-50" id="home">
        <h1 className="font-anton texty text-[15vw] sm:text-[7vw] uppercase leading-[1.1]">
          Prepare <br /> To Change
        </h1>
        <h1 className="font-anton text-white text-[15vw] sm:text-[7vw] uppercase leading-[1.1]">
          For The Better.
        </h1>
      </div>
    </div>
  );
};

export default App;
