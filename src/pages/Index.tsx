import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Benefits } from '@/components/Benefits';
import { ContactMap } from '@/components/ContactMap';
import Certifications from '@/components/Certifications';
import { ContactForm } from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Slideshow } from '@/components/Slideshow';
import { VideoPresentation } from '@/components/VideoPresentation';

export const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Certifications />
      <Slideshow />
      <VideoPresentation />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  );
};
