import React, { useState } from "react";

const galleryImages = [
  {
    src: "assets/gallery1.webp",
    alt: "Haircut close-up",
  },
  {
    src: "assets/gallery2.webp",
    alt: "Barbershop exterior",
  },
  {
    src: "assets/gallery3.webp",
    alt: "Awards and trophies",
  },
];

const BarbershopGallery = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const prevImage = () => setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#003135] text-white py-20 px-6" id="gallery">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold uppercase mb-2">Our Work & Shop</p>
        <h2 className="text-4xl font-bold mb-4 hover:border-b-4 border-yellow-500 inline-block">
          Our Barbershop Gallery
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>

        {/* Carousel for mobile, grid for larger screens */}
        <div className="block sm:hidden relative max-w-xs mx-auto">
          <div className="overflow-hidden rounded-lg">
            <img
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              className="w-full h-64 object-cover transition-transform duration-300"
            />
          </div>
          {/* Carousel controls */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
            aria-label="Next"
          >
            &#8594;
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${current === idx ? 'bg-yellow-400' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbershopGallery;
