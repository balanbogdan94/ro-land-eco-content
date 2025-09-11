import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <section id="terms-and-conditions" className="bg-beige">
      <div className="container-custom py-20">
        <h1 className="heading-lg mb-6 text-center sm:text-left">
          Termeni și condiții / Terms & Conditions
        </h1>

        <div className="prose max-w-none">
          <h2>1. Acceptarea termenilor / Acceptance of terms</h2>
          <p>
            Prin accesarea și utilizarea acestui site, sunteți de acord cu termenii și condițiile. /
            By accessing and using this website, you agree to these terms.
          </p>

          <h2>2. Produse și servicii / Products and services</h2>
          <ul>
            <li>Produsele sunt certificate conform standardelor. / Products are certified.</li>
            <li>
              Imaginile sunt cu titlu informativ. / Images are for illustrative purposes only.
            </li>
            <li>
              Prețurile și disponibilitatea pot fi modificate. / Prices and availability may change.
            </li>
          </ul>

          <h2>3. Comenzi și livrare / Orders and delivery</h2>
          <p>
            Comenzile sunt procesate în ordinea primirii și livrate prin parteneri de transport. /
            Orders are processed in order of receipt and shipped via partner couriers.
          </p>

          <h2>4. Politica de retur / Return policy</h2>
          <p>
            Produsele pot fi returnate în 14 zile calendaristice. / Products can be returned within
            14 calendar days.
          </p>

          <h2>5. Limitarea răspunderii / Limitation of liability</h2>
          <p>
            RO Land Agriculture nu răspunde pentru întreruperi temporare sau utilizare incorectă. /
            RO Land Agriculture is not liable for temporary interruptions or misuse of products.
          </p>

          <h2>6. Legea aplicabilă / Governing law</h2>
          <p>
            Acești termeni sunt guvernați de legislația română. / These terms are governed by
            Romanian law.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
