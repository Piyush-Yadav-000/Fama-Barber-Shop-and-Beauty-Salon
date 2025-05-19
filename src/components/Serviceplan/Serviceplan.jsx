import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const pricingPlans = [
  {
    title: "Classic Services",
    price: 25,
    features: [
      "Men’s Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)",
    ],
    buttonText: "Book Now",
    highlight: true,
  },
  {
    title: "Premium Services",
    price: 35,
    features: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel",
    ],
    buttonText: "Book Now",
  },
  {
    title: "Packages",
    price: 50,
    features: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom’s Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program",
    ],
    buttonText: "Inquire",
  },
];

const ServicePrices = () => {
  return (
    <section className="bg-[#003135] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold uppercase mb-2">
          Quality Barbering at Fair Prices
        </p>
        <h2 className="text-4xl font-bold mb-4 hover:border-b-4 border-yellow-500 inline-block">
          Our Service Prices
        </h2>
        <p className="text-gray-400 mb-12">
          Choose from our range of professional barbering services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 border hover:scale-110 transition-all 1s ${
                plan.highlight ? "border-yellow-500" : "border-gray-700"
              } bg-[#0fa4af] flex flex-col font-semibold justify-between relative`}
            >
              {plan.highlight && (
                <span className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-2 py-1 rounded-bl">
                  Most Popular
                </span>
              )}
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-yellow-500 text-3xl font-bold mr-1">${plan.price}</span>
                  <span className="text-sm text-gray-950">/mo</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheckCircle className="text-yellow-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 w-full py-2 rounded ${
                  plan.highlight
                    ? "bg-yellow-500 text-black font-semibold"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePrices;
