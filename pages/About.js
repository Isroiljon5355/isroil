import React from 'react';

function About() {
	return (
		<div className=" container m-auto mt-16 lg:px-20 lg:py-20 border-2 border-solid border-white ">
			<div>
				<div>
					<h2 className="text-3xl font-bold">About me</h2>
					<div className="mt-2">
						<div className=" w-20 h-[4px]  bg-white rounded-xl"></div>
						<div className=" w-12 h-[4px] mt-1 bg-white rounded-xl"></div>
					</div>
				</div>
				<div className="mt-16">
					<h1 className="text-3xl font-medium">
						Isroiljon Musajonov{' '}
						<span className="text-blue-400">Frontend Developer</span>
					</h1>
					<p className="text-lg font-normal mt-3">
						Hello. My name is Isroiljon. I am a frontend developer. I have been
						programming for more than 2 years, and on the front-end for years. I
						can create all sorts of <span className="text-blue-400">HTML</span>{' '}
						layouts and <span className="text-blue-400">ReactJS </span>SPA.{' '}
					</p>
					<h1>salom</h1>
				</div>
				<div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
