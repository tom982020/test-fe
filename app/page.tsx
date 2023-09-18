/** @format */
'use client';

import Image from 'next/image';
import { HeaderComponent } from './components/header';
import { BannerComponent } from './components/banner';
import { ContentComponent } from './components/content';
import { FooterComponent } from './components/footer';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
	const [joke, setJoke] = useState<[]>();
	useEffect(() => {
		axios.get('http://localhost:5001/joke').then((res) => {
			// console.log(res)
			setJoke(res.data);
		});
		// console.log(joke);
	}, []);
	return (
		<div className="relative">
			<HeaderComponent />
			<BannerComponent />
			<ContentComponent content={joke} />
			<FooterComponent />
		</div>
	);
}
