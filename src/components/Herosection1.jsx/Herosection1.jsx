import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import './glowbtn.css';

const HeroSection1 = () => {
  // Animation: fade-in on mount
  React.useEffect(() => {
    const hero = document.getElementById('home');
    if (hero) {
      hero.classList.add('fade-in-hero');
    }
    return () => {
      if (hero) hero.classList.remove('fade-in-hero');
    };
  }, []);

  return (
    <section className="bg-[#003135] min-h-screen pt-40 text-white py-12 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center fade-in-hero-init" id="home">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-xl flex flex-col items-start">
          <p className="text-yellow-400 font-medium mb-2 text-base sm:text-lg">
            Premium Barber Services in Denton
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-2">
            Classic Cuts, Modern Style
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 underline decoration-yellow-400 mb-6">
            Premium Barber Shop
          </h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            At Fama Barber Shop and Beauty Salon, we combine traditional barbering techniques with
            modern styling to give you the perfect look. Our experienced barbers
            deliver precision cuts, beard grooming, and relaxing hot towel
            shaves in a classic barbershop atmosphere.
          </p>

          {/* Location Button */}
          <div className="mb-6 w-full sm:w-auto">
            <button className="flex items-center bg-transparent border border-gray-600 text-white px-4 py-2 rounded-full space-x-2 hover:border-yellow-400 w-full sm:w-auto justify-center">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Denton, TX</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4  sm:w-auto">
            <button className="flex items-center justify-center px-6 py-3 border border-gray-600 rounded-md space-x-2 w-full sm:w-auto glass-btn blue-btn">
              <FaPhoneAlt />
              <span>Our Services</span>
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white border-gray-600 border font-semibold rounded-md space-x-2 w-full sm:w-auto blue-btn glass-btn ">
              <FaPhoneAlt />
              <span>Book Now</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.05}
            transitionSpeed={1000}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#024950"
            glarePosition="all"
            glareBorderRadius="2x"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <div className="w-full border-4 border-double rounded-md overflow-hidden shadow-lg">
              <img
                src="src/assets/hero1-img.webp"
                alt="Barber Team"
                className="rounded-md w-full object-cover"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
