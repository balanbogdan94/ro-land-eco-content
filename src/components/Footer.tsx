
import React from 'react';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">RO LAND <span className="text-rolandGreen">ORGANIC</span></div>
            <p className="text-body mb-4">
              Cooperativă agricolă specializată în cultivarea și distribuția de cereale și semințe ecologice din zona Adamclisi, Dobrogea.
            </p>
            <p className="italic text-sm mb-4">"Natura livrată la tine acasă"</p>
            <div className="flex space-x-4">
              <a href="#" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Produsele noastre</h3>
            <ul className={styles.linkList}>
              <li><a href="#products">Grâu ecologic</a></li>
              <li><a href="#products">Porumb ecologic</a></li>
              <li><a href="#products">Secară ecologică</a></li>
              <li><a href="#products">Orz ecologic</a></li>
              <li><a href="#products">Mazăre ecologică</a></li>
              <li><a href="#products">Soia ecologică</a></li>
              <li><a href="#products">Floarea soarelui decorticată</a></li>
              <li><a href="#products">Rapiță ecologică</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin className="h-5 w-5" />
                <span>Comuna Adamclisi, Jud. Constanța, România</span>
              </li>
              <li>
                <Phone className="h-5 w-5" />
                <span>+40 754 123 456</span>
              </li>
              <li>
                <Mail className="h-5 w-5" />
                <span>contact@rolandorganic.ro</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Certificări</h3>
              <div className="flex space-x-4">
                <span className={styles.certBadge}>ECO</span>
                <span className={styles.certBadge}>BIO</span>
                <span className={styles.certBadge}>EU Organic</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Ro land organic. Toate drepturile rezervate.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-rolandGreen mr-4">Politica de confidențialitate</a>
              <a href="#" className="text-sm text-gray-600 hover:text-rolandGreen">Termeni și condiții</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
