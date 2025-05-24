import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from './assets/contact.png'; // Make sure this path is correct

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <div className="relative text-white font-sans min-h-screen" id="contact" data-aos="fade-up"git remote>
      {/* Background Image */}
      <img
        src={contact}
        alt="Fitness Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-10 py-20">
        {/* Top Heading */}
        <h1 className="text-white text-6xl md:text-7xl font-bold text-center mb-20 font-anton">
          CONTACT US
        </h1>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start ms-50">
          {/* Left Content */}
          <div className="md:w-1/2 text-left">
            <h2 className=" text-7xl font-extrabold font-anton texty leading-tight mb-6">
              LET'S<br />DISCUSS<br />FITNESS
            </h2>

            {/* Arrows */}
            <div className="flex items-center gap-2 mb-10">
              {[...Array(3)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M10 6l6 6-6 6" />
                </svg>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-white text-base leading-7 space-y-2">
              <p>
                <span className="font-bold">Blood-Burns gym</span><br />
                Bangalore.<br />-125
              </p>
              <p><span className="font-bold">Phn.</span> +91 8072354417</p>
              <p><span className="font-bold">Email:</span> velanjayashankar@gmail.com</p>
              <p><span className="font-bold">Social:</span> @Velan J</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
