import React, {useEffect} from "react";
import about from './assets/about.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function WorkoutRoutines() {
        useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out', once: true });
      }, []);
    
  return (
    <div className="relative w-screen min-h-screen bg-black text-white font-bold text-lg " data-aos="fade-up" id="about">
        <div className="py-20" >
      <div className="absolute inset-0">
        <img
          src={about}
          alt="Workout Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between px-8 py-12 max-w-7xl mx-auto ">
        {/* Left Column */}
        <div className="lg:w-1/3 mb-10 lg:mb-0">
          <h1 className="text-yellow-300 text-6xl leading-none font-anton texty">
            OUR<br />WORKOUT<br />ROUTINES
          </h1>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 space-y-16">
          {/* Block 1 */}
          <div className="flex gap-4">
            <h2 className=" text-3xl font-anton texty min-w-[150px]">SLOW AND<br />STEADY</h2>
            <p className="text-white max-w-xl">
              Perfect for beginners or those returning after a break. Focus on foundational movements, building endurance, and developing consistent habits — at your own pace, with long-term results in mind.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex gap-4">
            <h2 className=" text-3xl font-anton texty min-w-[150px]">TRAIN LIKE A<br />CHAMP</h2>
            <p className="text-white max-w-xl">
              Take your training to the next level with high-intensity routines that challenge your strength, agility, and mindset. Designed for athletes and goal-getters who want to push limits and see serious gains.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex gap-4">
            <h2 className=" text-3xl  font-anton texty min-w-[150px]">MAINTAIN<br />THE GAIN</h2>
            <p className="text-white max-w-xl">
              Stay in peak form with sustainable routines that help you preserve your progress. Balance strength, cardio, and flexibility while preventing burnout or plateaus.
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-white text-3xl  me-100 max-w-xl">
            Every body is different, so we make sure you can choose a plan that works best for you.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
