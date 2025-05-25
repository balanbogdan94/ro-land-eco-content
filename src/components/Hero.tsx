import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
	return (
		<section className='relative bg-gradient-to-br text-white h-screen '>
			<div
				style={{ backgroundImage: "url('/assets/hero.JPG')" }}
				className='px-4 sm:px-6 lg:px-8 bg-cover bg-center h-[75vh] sm:h-[80vh] lg:h-[85] relative py-24 md:py-32 '>
				<div className='container-custom w-full flex flex-col justify-center items-center lg:items-start h-full gap-4 '>
					<h1 className='heading-xl text-center md:text-left text-balance max-w-xs'>
						Natura livrată la tine acasă!
					</h1>
					<Button
						className='btn-primary max-w-52 text-lg w-auto'
						onClick={() => {
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' });
						}}>
						Solicită Ofertă
					</Button>
				</div>
				<svg
					id='visual'
					viewBox='0 0 960 540'
					className='absolute bottom-0 left-0 w-full max-h-24 overflow-hidden'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'
					version='1.1'>
					<path
						d='M0 278L80 275.2C160 272.3 320 266.7 480 247.5C640 228.3 800 195.7 880 179.3L960 163L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z'
						fill='#0b8a3a'></path>
					<path
						d='M0 424L80 422C160 420 320 416 480 397.3C640 378.7 800 345.3 880 328.7L960 312L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z'
						fill='#ffffff'></path>
				</svg>
			</div>

			<div className='container-custom flex flex-col gap-2 '>
				<h2 className='text-black text-xl lg:text-2xl font-bold'>
					Cereale ecologice cultivate în inima Dobrogei 🇷🇴
				</h2>
				<p className='text-lg md:text-xl text-black text-balance lg:max-w-xl'>
					De la fermieri români, direct către morile și fabricile de procesare
					din <b>Europa</b>.
				</p>
			</div>
		</section>
	);
};

export default Hero;
