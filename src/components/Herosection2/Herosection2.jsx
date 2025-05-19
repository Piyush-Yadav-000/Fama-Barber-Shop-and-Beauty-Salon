import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const HeroSection2 = () => {
  return (
    <section className="bg-[#003135]  text-white py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-yellow-400 font-semibold">Our Story</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          About Fama Barber Shop and Beauty Salon
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Established in 2018, PFama Barber Shop and Beauty Salon  has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img
            src="src\assets\gallery2.webp"
            alt="PMC Storefront"
            className="rounded-xl"
          />
          {/* Badge */}
          <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md shadow-md">
            5+ years
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="border-l-4 border-yellow-400 pl-6 text-gray-300">
            Established in 2018, Fama Barber Shop and Beauty Salon has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </div>

          <div className="bg-[#2a2a2a] p-6 rounded-md text-gray-300 relative">
            <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
            <p>
              We take pride in our attention to detail and personalized service,
              ensuring each client leaves looking and feeling their best. Our
              skilled barbers combine traditional techniques with modern trends
              to create custom styles that suit each individual's personality
              and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
