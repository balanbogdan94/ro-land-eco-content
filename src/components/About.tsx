import React from 'react';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={styles.imageWrapper}>
            <img
              src="/assets/slideshow/Slideshow-3.JPG"
              alt="Câmpuri cultivate ecologic"
              className={styles.image}
            />
          </div>
          <div>
            <h2 className="heading-lg mb-6">Despre Ro land organic</h2>
            <p className="text-body mb-4">
              Suntem o cooperativă agricolă formată din fermieri pasionați din zona Adamclisi,
              Dobrogea. De peste 15 ani cultivăm cereale și semințe ecologice pe terenurile noastre
              cu sol fertil și beneficiind de un climat ideal pentru agriculură.
            </p>
            <p className="text-body mb-4">
              Cooperativa noastră s-a născut din dorința de a oferi produse de cea mai înaltă
              calitate, respectând în același timp principiile agriculturii ecologice și
              sustenabile. Ne mândrim cu certificările obținute la nivel european și cu relațiile de
              lungă durată pe care le-am construit cu partenerii noștri.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Ani de experiență</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1200</span>
                <span className={styles.statLabel}>Hectare cultivate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Ecologic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
