import { useState } from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import SaydBar from '../components/SaydBar';

function MyApp({ Component, pageProps }) {
	const [dakMode, setDakMode] = useState(false);
	return (
		<div
			style={{
				background: dakMode ? '#f2f2fc' : '#111827',
				color: dakMode ? '#302e4d' : '#fff',
			}}
			className="transition-colors h-screen"
		>
			<Navbar toggle={() => setDakMode(!dakMode)} dakMode={dakMode} />
			<div className="flex">
				<div className="">
					<SaydBar dakMode={dakMode} />
				</div>
				<div className="w-full">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
