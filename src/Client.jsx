import React, {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';




export default function FullBodyFitness() {
            useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out', once: true });
      }, []);

  return (
    <div className="bg-black text-white py-10" data-aos="fade-up" id="client">


      {/* Testimonials Section */}
      <div className="py-20 px-10 bg-black text-white text-center">
        <h2 className="text-6xl font-bold mb-16 font-anton">CLIENT WORDS</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Testimonial 1 */}
          <div className="text-left md:w-1/3">
            <div className="text-red-600 text-4xl mb-4">&#8220;&#8221;</div>
            <p className="text-lg mb-4">
              “Training with Michael has been a game-changer. I’ve never felt stronger, more confident, or more motivated!”
            </p>
            <p className="font-anton texty text-xl ">- SHARLENE ROSE</p>
          </div>

          {/* Testimonial 2 */}
          <div className="text-left md:w-1/3">
            <div className="text-red-600 text-4xl mb-4">&#8220;&#8221;</div>
            <p className="text-lg mb-4">
              “Each session is challenging but rewarding. I finally found a routine that fits my lifestyle and keeps me coming back.”
            </p>
            <p className="font-anton texty text-xl ">- KIAN GRAHAM</p>
          </div>

          {/* Testimonial 3 */}
          <div className="text-left md:w-1/3">
            <div className="text-red-600 text-4xl mb-4">&#8220;&#8221;</div>
            <p className="text-lg mb-4">
              “The personalized attention and results-driven workouts exceeded my expectations. Highly recommended!”
            </p>
            <p className="font-anton texty text-xl ">- JIN AE SOO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
