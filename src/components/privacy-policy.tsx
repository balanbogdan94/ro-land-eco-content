import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy-policy" className="bg-beige">
      <div className="container-custom py-20">
        <h1 className="heading-lg mb-6 text-center sm:text-left">
          Politica de confidențialitate / Privacy Policy
        </h1>

        <div className="prose max-w-none">
          <p>
            <strong>RO Land Agriculture</strong> respectă confidențialitatea și protecția datelor
            personale ale clienților, partenerilor și vizitatorilor site-ului nostru.
          </p>

          <h2>1. Ce date colectăm / What data we collect</h2>
          <ul>
            <li>Nume și prenume / Full name</li>
            <li>Telefon și e-mail / Phone number and e-mail</li>
            <li>Adresă de facturare/livrare / Billing or shipping address</li>
            <li>Informații tehnice (IP, cookies) / Technical information (IP, cookies)</li>
          </ul>

          <h2>2. Cum folosim datele / How we use the data</h2>
          <ul>
            <li>Pentru răspuns la solicitări / To respond to inquiries</li>
            <li>Pentru informații despre produse / To provide product info</li>
            <li>Pentru îmbunătățirea experienței pe site / To improve website experience</li>
            <li>Pentru obligații legale / To comply with legal obligations</li>
          </ul>

          <h2>3. Drepturile dumneavoastră / Your rights</h2>
          <p>
            Conform GDPR, aveți dreptul de acces, rectificare, ștergere, restricționare a
            prelucrării, opoziție și portabilitate a datelor. / Under GDPR, you have the right to
            access, rectification, deletion, restriction of processing, objection, and data
            portability.
          </p>

          <h2>Contact</h2>
          <p>
            📧 rolandagriculture@gmail.com <br />
            📞 +40 728 081 993
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
