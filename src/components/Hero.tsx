
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container-custom flex flex-col items-center">
        <div className={styles.content}>
          <h1 className="heading-xl mb-6 text-white">
            Cereale ecologice cultivate în inima Dobrogei
          </h1>
          <p className="text-xl mb-8 text-white">
            De la fermieri români, direct către morile și fabricile de procesare din Europa.
            <span className="block mt-2 italic">Natura livrată la tine acasă</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary">Solicită ofertă</Button>
            <Button variant="outline" className="bg-white text-rolandGreen border-white hover:bg-white/90">
              Află mai multe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
