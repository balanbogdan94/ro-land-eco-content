
import React from 'react';
import styles from './Testimonials.module.css';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Calitatea cerealelor furnizate de Ro land organic este excepțională. Colaborăm de peste 5 ani și nu am fost niciodată dezamăgiți de produsele lor.",
    author: "Mihai D.",
    company: "Moara Băneasa, România"
  },
  {
    quote: "Am apreciat în mod deosebit transparența și profesionalismul echipei Ro land organic. Cerealele lor ecologice au făcut diferența în produsele noastre finale.",
    author: "Klaus S.",
    company: "BioMühle GmbH, Germania"
  },
  {
    quote: "Cooperativa Ro land organic a devenit partenerul nostru de încredere pentru aprovizionarea cu materii prime ecologice. Recomandăm cu căldură serviciile lor.",
    author: "Andreea M.",
    company: "Ecoseed Distribution, România"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Ce spun clienții noștri</h2>
          <p className="text-body max-w-3xl mx-auto">
            Colaborăm cu mori, fabrici de procesare și distribuitori din toată Europa. 
            Iată câteva dintre părerile partenerilor noștri.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={styles.testimonialCard}>
              <CardContent className="p-8">
                <div className={styles.quoteIcon}>"</div>
                <p className="text-body mb-6 italic">{testimonial.quote}</p>
                <div className={styles.author}>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
