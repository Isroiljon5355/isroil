import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import SaybarLink from './SaybarLink';
function SaydBar(props) {
	const [open, setOpen] = useState(false);
	return (
		<div className=" flex">
			<div>{open ? '' : <SaybarLink darkmodes={props.dakMode} />}</div>
			<div
				className=" mt-3 visible lg:hidden block md:invisible"
				onClick={() => setOpen(!open)}
			>
				<div className="w-12 h-10 flex  justify-center items-center shadow-2xl bg-[#374151] text-white ml-2 rounded-sm">
					<Hamburger direction="right" size={20} color="#fff" />
				</div>
			</div>
		</div>
	);
}

export default SaydBar;
