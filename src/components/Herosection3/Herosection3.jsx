import React from "react";
import { FaCut, FaHotTub, FaUserAlt } from "react-icons/fa";
import './card.css'

const services = [
  {
    title: "Haircuts",
    icon: <FaCut className="text-teal-400 text-2xl" />,
    description:
      "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    items: ["Classic Cuts", "Modern Styles"],
    highlight: false,
  },
  {
    title: "Beard Services",
    icon: <FaHotTub className="text-yellow-400 text-2xl" />,
    description:
      "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    items: ["Beard Trims", "Beard Shaping"],
    highlight: true,
  },
  {
    title: "Premium Services",
    icon: <FaUserAlt className="text-teal-400 text-2xl" />,
    description:
      "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    items: ["Hair Coloring", "Scalp Treatments"],
    highlight: false,
  },
];

const HeroSection3 = () => {
  return (
    <section className="bg-[#003135] text-white py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-yellow-400 font-semibold">Premium Grooming</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Our Barber Services
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Professional barbering services to keep you looking sharp for everyday
          confidence or special occasions.
        </p>
      </div>
      <div className="box flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="card flex-1 min-w-[260px] max-w-xs mx-auto sm:mx-0"
            style={{ flexBasis: '300px' }}
          >
            {/* Face 1 */}
            <div className="face face1">
              <div className="content">
                <div className="bg-[#f4eeee] w-12 h-12 flex items-center justify-center rounded-md mb-4">
                  {service.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${service.highlight ? "text-yellow-400" : "text-white"}`}>
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Face 2 */}
            <div className="face face2">
              <div className="content">
                <p className="text-sm mb-4">{service.description}</p>
                <ul className="text-sm text-gray-800 list-disc list-inside space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HeroSection3;
