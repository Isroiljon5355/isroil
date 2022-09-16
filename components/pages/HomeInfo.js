import React from 'react';
import Image from 'next/image';
import ozim from './ozim.jpg';
import Icons from './Icons';
function HomeInfo(props) {
	return (
		<div className=" container m-auto w-full">
			<div className=" flex justify-center items-center w-full h-screen">
				<div className="text-center">
					<div className="w-60 m-auto h-60  border-4 border-solid border-white rounded-full">
						<Image
							src={ozim}
							layout="responsive"
							className="w-full h-60 rounded-full"
						/>
					</div>
					<h1
						className="text-4xl font-bold mt-1"
						style={{
							color: props.dakMode ? '#fff' : '[#302e4d]',
						}}
					>
						Musajonov Isroiljon
					</h1>
					<p
						className="text-xl font-normal mt-1"
						style={{
							color: props.dakMode ? '#fff' : '[#302e4d]',
						}}
					>
						Men frontend dasturchisiman
					</p>
					<Icons />
				</div>
			</div>
		</div>
	);
}

export default HomeInfo;
