import 'boxicons/css/boxicons.min.css';

export default function Footer() {
	return (
		<footer className="w-full flex flex-col pb-1 justify-between border-t border-gray-400 bg-[#001F3F] text-white">
			<div className="flex flex-wrap justify-between items-start p-2 pt-14">
				<div className="ml-2 max-w-[30%] flex flex-col justify-between">
					<h2 className="text-4xl text-[#98DED9] mb-2">CodeCortex</h2>
					<p className="text-gray-40 text-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum,
						corrupti vitae tempora placeat nemo beatae atque nobis ea facere
						neque optio dolorem nisi consequatur minus corporis architecto alias
						iste!
					</p>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Quick Access</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-[#98DED9] hover:text-[#6A9DF0]">Home</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-[#98DED9] hover:text-[#6A9DF0]">Education</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-[#98DED9] hover:text-[#6A9DF0]">Services</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#testimonials" className="text-[#98DED9] hover:text-[#6A9DF0]">Testimonials</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Help &amp; Support</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-[#98DED9] hover:text-[#6A9DF0]">Contact Us</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-[#98DED9] hover:text-[#6A9DF0]">Services</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-[#98DED9] hover:text-[#6A9DF0]">Hire Us</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Socials</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-[#98DED9] hover:text-[#6A9DF0]">Facebook</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-[#98DED9] hover:text-[#6A9DF0]">LinkedIn</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-[#98DED9] hover:text-[#6A9DF0]">Instagram</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#" className="text-[#98DED9] hover:text-[#6A9DF0]">Discord</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Legal</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-[#98DED9] hover:text-[#6A9DF0]">License (EULA)</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-[#98DED9] hover:text-[#6A9DF0]">Privacy Policy</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-[#98DED9] hover:text-[#6A9DF0]">Terms &amp; Conditions</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#" className="text-[#98DED9] hover:text-[#6A9DF0]">Brand Guideline</a>
						</li>
					</ul>
				</div>
			</div>
			<hr className="w-full border-gray-400 mt-1" />
			<p className="text-gray-40 text-center text-sm mt-2 pt-5 pb-5">
				&copy; 2024 KOK&trade; is a registered trademark. All Rights Reserved.
			</p>
		</footer>
	);
}
