import React, {useEffect} from "react";
import plan from './assets/plan.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function FullBodyFitness() {
          useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out', once: true });
      }, []);
    
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white" id="work" data-aos="fade-up">
        <div></div>
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start px-10 py-20 md:w-1/2 ms-20" >
        <h1 className="text-white text-6xl md:text-6xl font-semibold  font-anton leading-none mb-8">
          FULL-BODY<br />FITNESS
        </h1>
        <p className="text-lg max-w-md mb-10">
          Ignite every muscle group with dynamic, full-body workouts built to boost strength,
          endurance, and agility—all in one session.
        </p>
        <button className=" px-6 py-3 text-white text-lg font-bold uppercase"  style={{
      backgroundImage: "linear-gradient(to right, #1a1307, #c89311)",
    }}>
          Sign Up Today
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2">
        <img
          src={plan}
          alt="Full Body Fitness"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
