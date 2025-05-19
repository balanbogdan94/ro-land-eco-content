
import React from 'react';
import styles from './Benefits.module.css';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Certificare ecologică',
      description: 'Toate produsele noastre sunt certificate ecologic la standarde europene.'
    },
    {
      title: 'Sol fertil din Dobrogea',
      description: 'Terenurile noastre beneficiază de solul fertil specific regiunii Adamclisi.'
    },
    {
      title: 'Climat ideal',
      description: 'Zona are un climat perfect pentru cultivarea cerealelor de înaltă calitate.'
    },
    {
      title: 'Trasabilitate completă',
      description: 'Oferim transparență totală privind proveniența și metodele de cultivare.'
    },
    {
      title: 'Livrare garantată',
      description: 'Respectăm termenele de livrare și garantăm cantitățile contractate.'
    },
    {
      title: 'Export în toată Europa',
      description: 'Avem experiență în exportul de cereale conform standardelor UE.'
    }
  ];

  return (
    <section id="benefits" className={styles.benefits}>
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">De ce să alegi Ro land organic</h2>
            <p className="text-body mb-8">
              Calitatea produselor noastre și angajamentul pentru agricultura ecologică ne diferențiază pe piața 
              europeană. Clima blândă și solul fertil din zona Adamclisi creează condițiile perfecte pentru 
              cultivarea unor cereale de excepție.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
              alt="Câmpuri cultivate ecologic în Adamclisi" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
