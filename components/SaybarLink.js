import React from 'react';
import Link from 'next/link';
import { IconName, FiHome } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
function SaybarLink(props) {
	console.log(props.darkmode);
	return (
		<div
			style={{
				background: props.darkmodes ? '#fff' : '#1f2937',
				color: props.darkmodes ? '#302e4d' : '#fff',
			}}
			className=" w-[250px] h-screen hidden lg:block invisible lg:visible  border-r-2 border-solid border-[#444] transition duration-1000 px-5"
		>
			<div className="grid grid-cols-1 justify-center content-evenly h-screen">
				<div className=" cursor-pointer">
					<Link href="/">
						<h1 className="text-3xl font-bold ">ISROILJON</h1>
					</Link>
				</div>
				<div>
					<ul>
						<li className="flex">
							<FiHome className="mr-2 lg:text-3xl" />
							<Link href="/">
								<a className="lg:text-2xl">Home</a>
							</Link>
						</li>
						<li className="flex mt-5">
							<BsFillPersonFill className="mr-2 lg:text-3xl" />
							<Link href="/About">
								<a className="lg:text-2xl">About</a>
							</Link>
						</li>
						<li className="flex mt-5">
							<BsFillPersonFill className="mr-2 lg:text-3xl" />
							<Link href="/About">
								<a className="lg:text-2xl">About</a>
							</Link>
						</li>
						<li className="flex mt-5">
							<BsFillPersonFill className="mr-2 lg:text-3xl" />
							<Link href="/About">
								<a className="lg:text-2xl">About</a>
							</Link>
						</li>
						<li className="flex mt-5">
							<BsFillPersonFill className="mr-2 lg:text-3xl" />
							<Link href="/About">
								<a className="lg:text-2xl">About</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="mt-24">
					<p>09.09.2022</p>
				</div>
			</div>
		</div>
	);
}

export default SaybarLink;
