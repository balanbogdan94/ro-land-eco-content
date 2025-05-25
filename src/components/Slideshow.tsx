import React, { useState } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from './ui/carousel';

export const Slideshow = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const slideCount = 5;

	React.useEffect(() => {
		if (!api) {
			return;
		}

		const setSlide = () => setCurrent(api.selectedScrollSnap());
		api.on('select', setSlide);

		return () => {
			api.off('select', setSlide);
		};
	}, [api]);

	return (
		<div className='container-custom py-8'>
			<h2 className='heading-lg mb-4 text-center'>Descoperă Natura Dobrogei</h2>
			<Carousel
				className='w-full'
				orientation='horizontal'
				opts={{ loop: true }}
				setApi={setApi}>
				<CarouselContent className='rounded-2xl'>
					{[1, 2, 3, 4, 5].map((number) => (
						<CarouselItem key={number} className='p-1'>
							<img
								src={`/assets/slideshow/Slideshow-${number}.JPG`}
								alt={`Slide ${number}`}
								className='w-full h-auto object-cover rounded-xl'
								loading='lazy'
							/>
						</CarouselItem>
					))}
				</CarouselContent>

				<div className='flex items-center justify-center mt-4 gap-2'>
					<CarouselPrevious className=' relative transform-none mr-2' />

					<div className='flex gap-2'>
						{Array.from({ length: slideCount }).map((_, index) => (
							<button
								key={index}
								className={`h-2 w-2 rounded-full transition-colors ${
									current === index ? 'bg-primary' : 'bg-gray-300'
								}`}
								onClick={() => api?.scrollTo(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>

					<CarouselNext className=' relative transform-none ml-2' />
				</div>
			</Carousel>
		</div>
	);
};
