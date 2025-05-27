// // import React, { useEffect} from 'react';
// // import './index.css';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';



// // const MakeHealthierChoices = () => {
// //       useEffect(() => {
// //     AOS.init({ duration: 1000, easing: 'ease-out', once: true });
// //   }, []);

// //   return (
// //     <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center px-4 py-10" id='plan' data-aos="fade-up">
// //         <div >
// //       {/* Circles + Heading */}
// //       <div className="relative mb-10">
// //         {/* Gold Rings */}
// //         <svg className="absolute left-[-140px] top-1/3 transform -translate-y-1/2" width="300" height="300" viewBox="0 0 200 200" fill="none">
// //           <circle cx="100" cy="100" r="40" stroke="#FFD700" strokeWidth="2" />
// //           <circle cx="100" cy="100" r="60" stroke="#FFD700" strokeWidth="2" />
// //           <circle cx="100" cy="100" r="80" stroke="#FFD700" strokeWidth="2" />
// //         </svg>

// //         {/* Title */}
// //         <h1 className="font-anton text-white text-[7vw] leading-tight z-10 relative">
// //           MAKE HEALTHIER<br />CHOICES
// //         </h1>
// //       </div>

// //       {/* Subtitle */}
// //       <p className="text-white text-lg max-w-xl mb-12">
// //         Flexible plans tailored for every fitness goal — from beginners to pros.<br />
// //         Choose your path and train your way, anytime, anywhere.
// //       </p>

// //       {/* Buttons */}
// //       <div className="flex flex-col md:flex-row gap-6">
// // {["WORKOUT PLAN", "ALL-YEAR PASS", "ONE-ON-ONE"].map((text, i) => (
// //   <button
// //     key={i}
// //     className="font-anton text-white text-lg py-4 px-8 transition rounded-none shadow-md"
// //     style={{
// //       backgroundImage: "linear-gradient(to right, #1a1307, #c89311)",
// //     }}
    
// //   >
// //     {text}
// //   </button>
// // ))}
       
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default MakeHealthierChoices;


import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MakeHealthierChoices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out", once: true });
  }, []);

  return (
    <div
      className="bg-black min-h-screen flex flex-col items-center justify-center text-center px-4 py-10"
      id="plan"
      data-aos="fade-up"
    >
      <div className="relative mb-10 max-w-4xl w-full">
       
        {/* Title */}
        <h1 className="font-anton text-white text-[8vw] sm:text-[5vw] md:text-[4vw] leading-tight relative z-10">
          MAKE HEALTHIER
          <br />
          CHOICES
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-white text-base sm:text-lg max-w-xl mb-12 px-2 sm:px-0 leading-relaxed">
        Flexible plans tailored for every fitness goal — from beginners to pros.
        <br />
        Choose your path and train your way, anytime, anywhere.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 max-w-md w-full justify-center px-4 sm:px-0">
        {["WORKOUT PLAN", "ALL-YEAR PASS", "ONE-ON-ONE"].map((text, i) => (
          <button
            key={i}
            className="font-anton text-white text-lg py-4 px-8 rounded-none shadow-md w-full sm:w-auto transition hover:brightness-110"
            style={{
              backgroundImage: "linear-gradient(to right, #1a1307, #c89311)",
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MakeHealthierChoices;

