import React from 'react';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useTranslations();
  return (
    <footer className={styles.footer}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-bold mb-4">
              <img src="/logo.svg" alt="Roland Logo" className="h-8 w-auto" />
            </div>
            <p className="text-body mb-4">{t('footer.description')}</p>
            <p className="italic text-sm mb-4">{t('footer.slogan')}</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className={styles.socialLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <ul className={styles.contactList + ' text-center md:text-left max-w-[75vw]'}>
              <li className="justify-center md:justify-start flex-shrink-0">
                <MapPin className="h-5 w-5" />
                <span>{t('footer.contact.address')}</span>
              </li>
              <li className="justify-center md:justify-start">
                <Phone className="h-5 w-5" />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className="justify-center md:justify-start">
                <Mail className="h-5 w-5" />
                <span>{t('footer.contact.email')}</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{t('footer.certificationsTitle')}</h3>
              <div className="flex space-x-4 items-center justify-center md:justify-start">
                <span className={styles.certBadge}>{t('footer.certifications.eu-bio')}</span>
                <span className={styles.certBadge}>{t('footer.certifications.haccp')}</span>
                <span className={styles.certBadge}>{t('footer.certifications.gmp')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RO Land Organic. {t('footer.copyright')}
            </p>
            <div className="mt-0 flex flex-col sm:flex-row gap-2 sm:gap-0">
              <a href="#" className="text-sm text-gray-600 hover:text-rolandGreen sm:mr-4">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-rolandGreen">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
