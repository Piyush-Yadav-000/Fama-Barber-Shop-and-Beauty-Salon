import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Haircut",
    "Beard Trim",
    "Hair & Beard Combo",
    "Shave",
    "Other",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.date) newErrors.date = "Preferred date is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-[#024950] text-white py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Box */}
        <div className="bg-[#0fa4af] p-6 rounded-xl space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="font-semibold text-black">Address</h4>
              <p className="text-white">
                518 Acme St unit 101, Denton, TX 76205, United States
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="font-semibold text-black">Phone</h4>
              <p className="text-white">+1 940-808-1569</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaClock className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="font-semibold text-black">Business Hours</h4>
              <p className="text-white">
                Mon-sat: 9:00 AM - 7:00 PM<br />
                Open ⋅ Closes 7 pm<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#003135] p-6 rounded-xl">
          <div className="text-center mb-6">
            <p className="text-yellow-500 font-medium">Book Your Appointment</p>
            <h2 className="text-3xl font-bold">
              Contact Us
            </h2>
            <p className="text-gray-400 mt-1">
              Ready for a fresh look? Book your appointment or contact us!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white"
              >
                <option value="">Select an option</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
            </div>

            <div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white"
              />
              {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your style preferences or any questions you have"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-400 text-sm mt-2">
                Your appointment request has been submitted!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
