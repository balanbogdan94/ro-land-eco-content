
import React from 'react';
import styles from './Products.module.css';
import { Card, CardContent } from "@/components/ui/card";

const products = [
  { 
    name: 'Grâu', 
    description: 'Grâu ecologic pentru mori și fabrici de panificație.', 
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
  },
  { 
    name: 'Porumb', 
    description: 'Porumb ecologic pentru procesare și furajare.', 
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
  },
  { 
    name: 'Secară', 
    description: 'Secară ecologică pentru pâine și alte produse de panificație.', 
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
  },
  { 
    name: 'Mazăre', 
    description: 'Mazăre ecologică pentru piața alimentară și furaje.', 
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
  },
  { 
    name: 'Floarea Soarelui', 
    description: 'Semințe de floarea-soarelui decorticată ecologică.', 
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
  },
  { 
    name: 'Rapiță', 
    description: 'Rapiță ecologică pentru ulei și alte produse derivate.', 
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDg1NDY1MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className={styles.products}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Produse pentru procesare și distribuție</h2>
          <p className="text-body max-w-3xl mx-auto">
            Oferim o gamă largă de cereale și semințe ecologice, cultivate cu grijă și pasiune, pentru a satisface cele mai înalte standarde de calitate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className={styles.productCard}>
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
        
        <div className="text-center mt-12">
          <p className="text-body mb-6">
            Pe lângă aceste produse, cultivăm și distribuim și <strong>orz, soia, in și muștar</strong>, toate cultivate conform standardelor ecologice europene.
          </p>
          <a href="#contact" className="btn-primary inline-block">Solicită oferta completă</a>
        </div>
      </div>
    </section>
  );
};

export default Products;
