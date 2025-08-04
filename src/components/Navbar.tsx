import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useTranslations } from '@/context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lang: 'ro' | 'en') => {
    setLanguage(lang);
  };

  const navItems = [
    { href: '#about', key: 'about' },
    { href: '#products', key: 'products' },
    { href: '#benefits', key: 'benefits' },
    { href: '#certifications', key: 'certifications' },
    { href: '#contact', key: 'contact' },
    { href: '#map', key: 'map' },
  ];

  const onLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <span className="text-xl font-bold cursor-pointer" onClick={onLogoClick}>
            <img src="/logo.svg" alt="Roland Logo" className="h-8 w-auto" />
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-end space-x-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className=" text-gray-700 hover:text-rolandGreen transition-colors font-medium"
            >
              {t(item.key)}
            </a>
          ))}

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-700 h-auto py-0 px-0 text-[1rem]"
              >
                <span>{language === 'ro' ? '🇷🇴' : '🇬🇧'}</span>
                {language === 'ro' ? 'RO' : 'EN'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleLanguageChange('ro')}
                className="cursor-pointer"
              >
                <span className="mr-2">🇷🇴</span> {t('navbar.language.romanian')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange('en')}
                className="cursor-pointer"
              >
                <span className="mr-2">🇬🇧</span> {t('navbar.language.english')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          {/* Language Switcher (MOBILE) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-700 hover:text-rolandGreen transition-colors h-auto"
              >
                <span>{language === 'ro' ? '🇷🇴' : '🇬🇧'}</span>
                {language === 'ro' ? 'RO' : 'EN'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleLanguageChange('ro')}
                className="cursor-pointer"
              >
                <span className="mr-2">🇷🇴</span> {t('navbar.language.romanian')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange('en')}
                className="cursor-pointer"
              >
                <span className="mr-2">🇬🇧</span> {t('navbar.language.english')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                    className=" text-gray-700 hover:text-rolandGreen transition-colors font-medium text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                ))}
                <Button
                  className="btn-primary mt-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('navbar.cta')}
                </Button>
                {/* Eliminat selectorul de limbă din meniul lateral */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
