import React from "react";
import styles from "./Certifications.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Factory } from "lucide-react";

const certifications = [
  {
    title: "Certificare Ecologică EU-BIO",
    description:
      "Produse 100% ecologice, fără pesticide, fertilizanți chimici sau OMG. Conform reglementărilor Uniunii Europene. Promovează agricultura durabilă și protejează sănătatea consumatorilor și mediul.",
    icon: (
      <img
        src="/assets/certifications/the_organic_logo_0.jpg"
        alt="EU Organic Logo"
        className="w-9 h-9 mx-auto mb-4"
      />
    ),
  },
  {
    title: "Sistem HACCP de Siguranță Alimentară",
    description:
      "Implementăm un sistem riguros de control al riscurilor alimentare în toate etapele producției. Asigurăm siguranța și calitatea constantă a produselor.",
    icon: <ShieldCheck className="text-blue-600 w-8 h-8 mb-4 mx-auto" />,
  },
  {
    title: "Certificare GMP+",
    description:
      "Respectăm cele mai bune practici de fabricație și depozitare. Garantăm standarde înalte de igienă, calitate și siguranță în întregul proces.",
    icon: <Factory className="text-yellow-600 w-8 h-8 mb-4 mx-auto" />,
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className={styles.certifications}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Certificări de Calitate</h2>
          <p className="text-body max-w-3xl mx-auto">
            Ne respectăm angajamentul față de calitate și siguranță prin
            implementarea celor mai stricte standarde internaționale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className={styles.certificationCard}>
              <CardContent className="p-8 text-center">
                {cert.icon}
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-body text-sm text-gray-700">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
