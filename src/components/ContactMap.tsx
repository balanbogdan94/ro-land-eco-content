import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslations } from '@/context/LanguageContext';
import { appInsights } from '@/services/appInsights';
import { WaveDivider } from './ui/wave-divider';

export const ContactMap: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section
      id="map"
      className="relative flex flex-col items-center py-20 bg-gray-50 shadow-[0_28px_30px_-10px_rgba(11,138,58,0.25)]"
    >
      <WaveDivider position="top" height={4} primaryColor="#0B8A3A" secondaryColor="#F7FAFC" />
      <div>
        <h2 className="heading-lg mb-10">{t('contactMap.title')}</h2>
      </div>
      <div className="container-custom w-full">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-24">
          <div className="flex flex-col justify-center items-center md:items-start gap-6 md:gap-10 w-full md:max-w-[400px] text-base md:text-lg font-sans md:order-1">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-4 w-full">
              <MapPin className="text-rolandGreen min-w-6 min-h-6 w-6 h-6 md:w-7 md:h-7" />
              <div className="text-center md:text-left">
                <span className="font-semibold">{t('contactMap.addressLabel')}</span>
                <br />
                <button
                  type="button"
                  onClick={() => {
                    const address = t('footer.contact.address');
                    const encoded = encodeURIComponent(address);
                    const ua = navigator.userAgent;
                    let url: string;
                    if (/iPad|iPhone|Macintosh/.test(ua) && 'standalone' in window) {
                      // iOS / Apple Maps
                      url = `http://maps.apple.com/?q=${encoded}`;
                    } else if (/Android/i.test(ua)) {
                      // geo: scheme triggers chooser / default
                      url = `geo:0,0?q=${encoded}`;
                    } else {
                      // Fallback web Google Maps
                      url = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
                    }
                    window.open(url, '_blank');
                    appInsights.trackEvent({
                      name: 'open_maps',
                      properties: {
                        url: url,
                      },
                    });
                  }}
                  className="text-rolandGreen font-medium md:text-xl inline-block text-center sm:text-left "
                  aria-label="Open address in Maps"
                >
                  {t('footer.contact.address')}
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-4 w-full">
              <Phone className="text-rolandGreen min-w-6 min-h-6 w-6 h-6 md:w-7 md:h-7" />
              <div className="text-center md:text-left">
                <span className="font-semibold">{t('contactMap.phoneLabel')}</span>
                <br />
                <a
                  href="tel:+40754123456"
                  className="text-rolandGreen hover:underline font-medium md:text-xl"
                >
                  {t('footer.contact.phone')}
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-4 w-full">
              <Mail className="text-rolandGreen min-w-6 min-h-6 w-6 h-6 md:w-7 md:h-7" />
              <div className="text-center md:text-left">
                <span className="font-semibold">{t('contactMap.emailLabel')}</span>
                <br />
                <a
                  href="mailto:contact@rolandorganic.ro"
                  className="text-rolandGreen hover:underline font-medium md:text-xl"
                >
                  {t('footer.contact.email')}
                </a>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11462.687617576308!2d27.95036659179336!3d44.09012617185345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40baa4e116cc9dcf%3A0x317f31956c1df67!2s907010%20Adamclisi!5e0!3m2!1sro!2sro!4v1751708809671!5m2!1sro!2sro"
            width="100%"
            height="350"
            allowFullScreen={true}
            className="radius-lg shadow-lg md:order-2 md:max-w-[600px] md:h-[350px] w-full h-[250px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Harta Adamclisi"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
