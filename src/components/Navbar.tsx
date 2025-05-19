
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container-custom flex items-center justify-between py-4">
        <div className={styles.logo}>
          <span className="text-xl font-bold">RO LAND <span className="text-rolandGreen">ORGANIC</span></span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className={styles.navLink}>Despre Noi</a>
          <a href="#products" className={styles.navLink}>Produse</a>
          <a href="#benefits" className={styles.navLink}>Beneficii</a>
          <a href="#how-it-works" className={styles.navLink}>Cum Funcționează</a>
          <a href="#testimonials" className={styles.navLink}>Testimoniale</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
        <Button className="btn-primary">Solicită Ofertă</Button>
      </div>
    </nav>
  );
};

export default Navbar;
