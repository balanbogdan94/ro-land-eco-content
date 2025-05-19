
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Flag } from "lucide-react";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('ro');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Here you would implement actual language change functionality
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container-custom flex items-center justify-between py-4">
        <div className={styles.logo}>
          <span className="text-xl font-bold">RO LAND <span className="text-rolandGreen">ORGANIC</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className={styles.navLink}>Despre Noi</a>
          <a href="#products" className={styles.navLink}>Produse</a>
          <a href="#benefits" className={styles.navLink}>Beneficii</a>
          <a href="#how-it-works" className={styles.navLink}>Cum Funcționează</a>
          <a href="#testimonials" className={styles.navLink}>Testimoniale</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
          
          {/* Language Switcher */}
          <div className={styles.languageSwitcher}>
            <DropdownMenu>
              <DropdownMenuTrigger className={styles.languageButton}>
                <Flag className="mr-1" />
                <span>{language === 'ro' ? 'RO' : 'EN'}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  className={`flex items-center ${language === 'ro' ? 'bg-muted' : ''}`} 
                  onClick={() => handleLanguageChange('ro')}
                >
                  <span className={styles.flagIcon}>🇷🇴</span>
                  <span>Română</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={`flex items-center ${language === 'en' ? 'bg-muted' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  <span className={styles.flagIcon}>🇬🇧</span>
                  <span>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Button className="btn-primary">Solicită Ofertă</Button>
      </div>
    </nav>
  );
};

export default Navbar;
