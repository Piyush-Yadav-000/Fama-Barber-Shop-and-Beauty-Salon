import React from 'react';
import { FaStar, FaRegStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Review.css'; // Assuming you have a CSS file for styles

const testimonials = [
	{
		name: 'Mike Johnson',
		text: "I've been getting my hair cut at Fama Barber Shop and Beauty Salon for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
		rating: 5,
	},
	{
		name: 'David Martinez',
		text:  "Costly compared to other barbershops with better haircuts.",
		rating: 5,
	},
	{
		name: 'Chris Taylor',
		text: "The hot towel shave experience at Fama Barber Shop and Beauty Salon is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
		rating: 5,
	},
];

const Testimonials = () => {
	return (
		<section className="bg-[#003135] text-white py-20 px-4">
			<div className="max-w-7xl mx-auto text-center">
				<p className="text-yellow-500 uppercase tracking-widest mb-2">
					Testimonials
				</p>
				<h2 className="text-4xl font-bold mb-10">
					What Our Clients Say
					<div className="h-1 w-24 bg-yellow-500 mx-auto mt-2 rounded-full"></div>
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="tilt-card relative cursor-pointer transition-transform duration-300 hover:-translate-y-2"
						>
							<div className="glow opacity-0 transition-opacity duration-300"></div>
							<div className="bg-[#024950] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-gray-700 tilt-card-content h-full">
								<FaQuoteLeft className="text-yellow-600 text-2xl mb-4" />
								<p className="italic mb-4">{testimonial.text}</p>
								<div className="flex items-center justify-between mt-4 border-t border-gray-700 pt-4">
									<div className="flex items-center gap-1">
										{/* 4 full stars, 1 half star, and rating text */}
										<span className="flex text-yellow-400">
											<FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
											{/* Half star, left side filled yellow, right side gray */}
											<svg width="16" height="16" viewBox="0 0 24 24" className="inline-block">
												<defs>
													<linearGradient id={`half-yellow-${index}`} x1="0" x2="1" y1="0" y2="0">
														<stop offset="50%" stopColor="#facc15" />
														<stop offset="50%" stopColor="#374151" />
													</linearGradient>
												</defs>
												<path d="M12 17.27L7.24 20.14c-.62.33-1.35-.2-1.23-.9l.82-4.8-3.49-3.4c-.51-.49-.23-1.35.47-1.45l4.82-.7 2.16-4.37c.18-.3.5-.45.82-.45v11.14z" fill="#facc15"/>
												<path d="M12 17.27V6.13c.32 0 .64.15.82.45l2.16 4.37 4.82.7c.7.1.98.96.47 1.45l-3.49 3.4.82 4.8c.12.7-.61 1.23-1.23.9L12 17.27z" fill={`url(#half-yellow-${index})`}/>
											</svg>
										</span>
										<span className="ml-2 text-sm text-gray-200 font-semibold">4.6</span>
										<span className="ml-2 text-xs text-gray-400">(116+ reviews)</span>
									</div>
									<p className="font-semibold ml-2">{testimonial.name}</p>
								</div>
								<FaQuoteRight className="text-yellow-600 text-right text-2xl mt-2 self-end" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
