import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const faqData = [
  {
    question: "Do I need an appointment or can I walk in?",
    answer: "Walk-ins are welcome, but appointments are recommended to ensure availability.",
    category: "General",
  },
  {
    question: "How long does a typical haircut take?",
    answer: "A typical haircut takes about 30 to 45 minutes, depending on the style.",
    category: "Services",
  },
  {
    question: "What form of payment do you accept?",
    answer: "We accept cash, all major credit cards, and mobile payments.",
    category: "Pricing",
  },
  {
    question: "Do you offer any loyalty programs or discounts?",
    answer: "Yes, we offer a loyalty card and seasonal discounts. Ask in-store for details.",
    category: "Support",
  },
  {
    question: "What hair products do you use and sell?",
    answer: "We use and sell high-quality grooming products from trusted brands.",
    category: "Services",
  },
];

const categories = ["All Questions", "General", "Services", "Pricing", "Support"];

const FaqSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqData.filter((faq) => {
    const matchCategory =
      selectedCategory === "All Questions" || faq.category === selectedCategory;
    const matchSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[#024350] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold">Common Questions</p>
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-2">
            Answers to common questions about our barbershop services.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-6">
          <FaSearch className="absolute top-3.5 left-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for questions..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 border border-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl px-4 py-3 cursor-pointer border border-gray-700"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{faq.question}</p>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {expandedIndex === index && (
                <p className="text-gray-400 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">No matching questions found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
