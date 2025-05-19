import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const barbers = [
	{
		name: "Jason Rodriguez",
		title: "Owner & Master Barber",
		description:
			"With over 15 years of experience, Jason founded Fama Barber Shop and Beauty Salon to bring premium men's grooming services to Denton. Specializing in classic cuts and beard trims.",
		image: "assets/staff1.webp",
	},
	{
		name: "Marcus Williams",
		title: "Senior Barber",
		description:
			"Marcus brings 8 years of experience to Fama Barber Shop and Beauty Salon. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal client base.",
		image: "assets/staff2.webp",
	},
	{
		name: "Terrence Jackson",
		title: "Barber & Stylist",
		description:
			"Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look.",
		image: "assets/gallery1.webp",
	},
];

const BarbersSection = () => {
	return (
		<section className="bg-[#024950] text-white py-20 px-6">
			<div className="max-w-7xl mx-auto text-center">
				<p className="text-yellow-500 font-semibold uppercase mb-2">
					Expert Stylists
				</p>
				<h2 className="text-4xl font-bold mb-4">
					Meet{" "}
				Our Barbers
				</h2>
				<p className="text-gray-400 mb-12 max-w-2xl mx-auto">
					Our team of skilled barbers is dedicated to providing you with the
					perfect cut and grooming experience.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{barbers.map((barber, index) => (
						<div
							key={index}
							className="relative group bg-[#264045] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl border border-gray-700 hover:border-yellow-500"
							style={{ minHeight: "430px" }}
						>
							{/* Card Shine Effect */}
							<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<div className="w-full h-full bg-gradient-to-tr from-yellow-400/20 via-transparent to-yellow-500/10 blur-2xl"></div>
							</div>
							<img
								src={barber.image}
								alt={barber.name}
								className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="p-6 text-center relative z-10">
								<div className="w-10 h-1 bg-yellow-500 mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
								<h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors duration-300">
									{barber.name}
								</h3>
								<p className="text-yellow-500 font-medium mb-3">
									{barber.title}
								</p>
								<p className="text-gray-300 text-sm mb-4">
									{barber.description}
								</p>
								<div className="flex justify-center gap-4 text-white text-lg">
									<a
										href="#"
										aria-label="Instagram"
										className="hover:text-white transition-colors duration-200"
									>
										<FaInstagram />
									</a>
									<a
										href="#"
										aria-label="Facebook"
										className="hover:text-white transition-colors duration-200"
									>
										<FaFacebookF />
									</a>
								</div>
							</div>
							{/* Glow border effect */}
							<div className="absolute inset-0 rounded-xl border-2 border-yellow-400 opacity-0 group-hover:opacity-60 pointer-events-none transition-opacity duration-500 blur-sm"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BarbersSection;
