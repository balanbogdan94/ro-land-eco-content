
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Flag, Menu } from "lucide-react";
import styles from './Navbar.module.css';
import { translations } from '@/utils/translations';
import { useLanguage } from '@/context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang: 'ro' | 'en') => {
    setLanguage(lang);
    console.log(`Language changed to: ${lang}`);
  };

  const navItems = [
    { href: "#about", key: 'about' },
    { href: "#products", key: 'products' },
    { href: "#benefits", key: 'benefits' },
    { href: "#how-it-works", key: 'howItWorks' },
    { href: "#testimonials", key: 'testimonials' },
    { href: "#contact", key: 'contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container-custom flex items-center justify-between py-4">
        <div className={styles.logo}>
          <span className="text-xl font-bold">RO LAND <span className="text-rolandGreen">ORGANIC</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={styles.navLink}>
              {translations[item.key as keyof typeof translations][language]}
            </a>
          ))}
          
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

        {/* Mobile View Icons */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Language Switcher */}
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

          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`${styles.navLink} text-lg py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {translations[item.key as keyof typeof translations][language]}
                  </a>
                ))}
                <Button 
                  className="btn-primary mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations.requestOffer[language]}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA Button */}
        <Button className="btn-primary hidden md:inline-flex">
          {translations.requestOffer[language]}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
