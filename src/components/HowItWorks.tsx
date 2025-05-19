
import React from 'react';
import styles from './HowItWorks.module.css';
import { Search, Send, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Solicitare ofertă',
      description: 'Completează formularul de contact cu cerințele tale specifice pentru tipul și cantitatea de cereale dorite.'
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: 'Primire ofertă personalizată',
      description: 'Echipa noastră îți trimite o ofertă detaliată, adaptată nevoilor tale, în maximum 24 de ore.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Livrare la destinație',
      description: 'După confirmarea comenzii, organizăm transportul și livrăm produsele conform termenelor stabilite împreună.'
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Cum funcționează</h2>
          <p className="text-body max-w-3xl mx-auto">
            Procesul nostru simplu și eficient te ajută să obții exact produsele de care ai nevoie, 
            la standardele de calitate pe care le aștepți.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepIcon}>
                {step.icon}
              </div>
              <h3 className="heading-md mb-3">{step.title}</h3>
              <p className="text-body text-gray-600">{step.description}</p>
              <div className={styles.stepNumber}>{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
