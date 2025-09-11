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
          {/* Left side */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-bold mb-4">
              <img src="/logo.svg" alt="Roland Logo" className="h-8 w-auto" />
            </div>
            <p className="text-body mb-4">{t('footer.description')}</p>
            <p className="italic text-sm mb-4">{t('footer.slogan')}</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Facebook */}
              <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#1877F2" // albastru Facebook
                  stroke="none"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 2 .1 2 .1v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.3 3h-2v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rolandorganic/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#E1306C" // roz Instagram
                  stroke="none"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@RoLandOrganic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#FF0000" // roșu YouTube
                  stroke="none"
                >
                  <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.1 5 12 5 12 5h0s-4.1 0-7.1.1c-.4 0-1.2.1-1.9.9C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.8.1 6.8.1s4.1 0 7.1-.1c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM10 14V10l4 2-4 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>

            {/* Casuta cu emoji și numele firmei */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold">RO LAND AGRICULTURE COOPERATIVĂ AGRICOLĂ</span>
            </div>

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
                {/* EU Organic */}
                <a
                  href="/assets/certifications/the_organic_logo_0.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/certifications/the_organic_logo_0.webp"
                    alt="EU Organic Certification"
                    className="w-12 h-12 object-contain"
                  />
                </a>

                {/* GMP */}
                <a
                  href="/assets/certifications/gmp_plus_certificate.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/certifications/gmp_plus_certificate.webp"
                    alt="GMP Certification"
                    className="w-12 h-12 object-contain"
                  />
                </a>

                {/* HACCP */}
                <a
                  href="/assets/certifications/haccp_certification.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/certifications/haccp_certification.webp"
                    alt="HACCP Certification"
                    className="w-12 h-12 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RO Land Organic. {t('footer.copyright')}
            </p>
            <div className="mt-0 flex flex-col sm:flex-row gap-2 sm:gap-0">
              <a
                href="/assets/footer/confidentiality-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-rolandGreen sm:mr-4"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="/assets/footer/terms-and-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-rolandGreen"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
