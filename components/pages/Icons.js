import React from 'react';
import {
	FaInstagram,
	FaWhatsapp,
	FaGithub,
	FaLinkedinIn,
	FaTelegram,
} from 'react-icons/fa';

function Icons() {
	return (
		<div className="flex items-center justify-evenly mt-6">
			<div className=" w-10 h-10 transition ease-in-out delay-150  duration-300  bg-[#ec1839] rounded-full flex justify-center items-center cursor-pointer hover:scale-110  hover:-translate-2">
				<FaGithub size={20} color="#fff" />
			</div>
			<div className=" w-10 h-10 transition ease-in-out delay-150  duration-300  bg-[#ec1839] rounded-full flex justify-center items-center cursor-pointer hover:scale-110  hover:-translate-2">
				<FaInstagram size={20} color="#fff" />
			</div>
			<div className=" w-10 h-10 transition ease-in-out delay-150  duration-300  bg-[#ec1839] rounded-full flex justify-center items-center cursor-pointer hover:scale-110  hover:-translate-2">
				<FaWhatsapp size={20} color="#fff" />
			</div>
			<div className=" w-10 h-10 transition ease-in-out delay-150  duration-300  bg-[#ec1839] rounded-full flex justify-center items-center cursor-pointer hover:scale-110  hover:-translate-2">
				<FaLinkedinIn size={20} color="#fff" />
			</div>
			<div className=" w-10 h-10 transition ease-in-out delay-150  duration-300  bg-[#ec1839] rounded-full flex justify-center items-center cursor-pointer hover:scale-110  hover:-translate-2">
				<FaTelegram size={20} color="#fff" />
			</div>
		</div>
	);
}

export default Icons;
