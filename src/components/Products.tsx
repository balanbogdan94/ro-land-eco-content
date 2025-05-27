import React from "react";
import styles from "./Products.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

const products = [
  {
    name: "Grâu pentru panificație ecologic",
    description:
      "Grâu cultivat ecologic, ideal pentru morărit și panificație. Conținut echilibrat de gluten și proteină, perfect pentru obținerea făinii de calitate superioară.",
    image: `/assets/products/dark-bread-slices-blue.jpg`,
  },
  {
    name: "Grâu spelta ecologic",
    description:
      "O cereală străveche, cu valoare nutritivă ridicată, bogată în fibre și proteine. Ideală pentru pâine artizanală și produse de panificație sănătoase.",
    image:
      "/assets/products/wheat-grains-bowl-wheat-popcorn-bowl-wheat-seed-rustic.jpg",
  },
  {
    name: "Grâu dur ecologic",
    description:
      "Grâu cu un conținut ridicat de proteină, utilizat în special pentru producerea pastelor ecologice și a altor produse din făină dură.",
    image: `/assets/products/grain-wheat-ear-plate-marble.jpg`,
  },
  {
    name: "Semințe de floarea-soarelui ecologice",
    description:
      "Cultivate fără chimicale, cu conținut ridicat de ulei și nutrienți. Folosite pentru consum, procesare și ulei presat la rece.",
    image:
      "https://th.bing.com/th/id/R.bc683d178f439a71ad5b86429e535b33?rik=bpoSHQ08SF59UQ&pid=ImgRaw&r=0&sres=1&sresct=1",
  },
  {
    name: "Miez de floarea-soarelui ecologic",
    description:
      "Obținut din semințe decorticate, miezul este bogat în grăsimi sănătoase, proteine și vitamine. Ideal pentru gustări, panificație și salate.",
    image: "/assets/products/sunflower seeds.jpg",
  },
  {
    name: "Ulei ecologic presat la rece din semințe de floarea-soarelui",
    description:
      "Ulei obținut prin presare la rece, fără aditivi sau tratamente termice. Gust natural și pur, ideal pentru salate și preparate sănătoase.",
    image: "/assets/products/oil.jpg",
  },
  {
    name: "Mazăre ecologică",
    description:
      "Leguminoasă valoroasă, bogată în proteine vegetale. Potrivită pentru consum alimentar, furajare și rotația culturilor ecologice.",
    image: "/assets/products/dried-peas.jpg",
  },
  {
    name: "Rapiță ecologică",
    description:
      "Rapiță cultivată în sistem ecologic, sursă importantă pentru producția de ulei presat la rece și furaje de calitate.",
    image:
      "https://www.plantmaster.ro/blog/wp-content/uploads/2020/06/field-of-rapeseeds-474558_640.jpg",
  },
  {
    name: "Muștar ecologic",
    description:
      "Semințe de muștar cultivate ecologic, ideale pentru condimentarea naturală a preparatelor. Bogate în uleiuri esențiale și compuși cu efect antioxidant.",
    image: "/assets/products/mustard-seeds.avif",
  },
  {
    name: "Porumb ecologic",
    description:
      "Porumb cultivat fără pesticide sau organisme modificate genetic. Potrivit pentru consum uman, hrana animalelor sau procesare industrială.",
    image: "/assets/products/corn.jpg",
  },
  {
    name: "Orz ecologic",
    description:
      "Cereală versatilă utilizată în industria alimentară și cea a berii. Cultivat ecologic pentru a asigura calitate și sustenabilitate.",
    image: "/assets/products/barley.jpg",
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className={styles.products}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Cereale, semințe și produse procesate ecologic
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Oferim o gamă variată de cereale și semințe ecologice, cultivate cu
            grijă, responsabilitate și respect pentru natură, pentru a răspunde
            celor mai înalte standarde de calitate.
          </p>
        </div>
        <div className="text-center mt-2 mb-16">
          <p className="text-body mb-6">
            Toate culturile noastre sunt obținute în conformitate cu
            reglementările europene privind agricultura ecologică, asigurând
            trasabilitate, sustenabilitate și valoare nutritivă superioară.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Solicită oferta completă
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`${styles.productCard} cursor-pointer`}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-md mb-2">{product.name}</h3>
                <p className="text-body text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
