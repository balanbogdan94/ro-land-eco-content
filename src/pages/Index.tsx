import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Slideshow } from '@/components/Slideshow';
import { VideoPresentation } from '@/components/VideoPresentation';

const Index: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<Hero />
			<About />
			<Products />
			<Benefits />
			<HowItWorks />
			<Testimonials />
			<Slideshow />
			<VideoPresentation />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Index;
