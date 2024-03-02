import React from "react";
import Link from "next/link";
						
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-green-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
					<p className="text-gray-800 font-bold text-3xl pb-6">
						Reach&nbsp;<span className="text-blue-600">Us</span>
					</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaEnvelope className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				
				<div className="p-5 ">
					<ul>
						<p className="text-gray-600 font-bold text-2xl pb-4">Company</p>
						<Link href="/about" className="text-black-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" >
							About Us
						</Link>
						<li className="text-black-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms and Conditions
						</li>
						<li className="text-black-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Privacy Policy
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-600 font-bold text-2xl pb-4">Support</p>
						<Link href="/contact"className="text-black-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact-Us
						</Link>
						<li className="text-black-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Web-Accesibility
						</li>
						<li className="text-black-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							FAQ
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-green-100">
				<h2 className=" text-gray-500 ">
					© 2023-2024 All rights reserved PCOS-Fertilicare
					<span className="hover:text-blue-600 cursor-pointer">
						
					</span>
				</h2>
			</div>
		</>
	);
}

export default Footer;

