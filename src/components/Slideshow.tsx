import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';
import styles from './Slideshow.module.css';

export const Slideshow = () => {
	return (
		<div className='w-full max-w-5xl mx-auto py-10'>
			<Carousel className='w-full' orientation='horizontal'>
				<CarouselContent>
					{[1, 2, 3, 4, 5].map((number) => (
						<CarouselItem key={number} className={styles.slideItem}>
							<img
								src={`/assets/slideshow/Slideshow-${number}.JPG`}
								alt={`Slide ${number}`}
								className='w-full h-auto object-cover'
								loading='lazy'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='left-2' />
				<CarouselNext className='right-2' />
			</Carousel>
		</div>
	);
};
