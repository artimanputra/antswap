import React from 'react';
import styles from './ourPartners.module.css';
import DAO from './DAOStarter-Logo-Green.png'
const OurPartners = () => {
  return (
    <section className=' pt-44 p-28 bg-[#13191f]'>  
         <div className={`${styles.container}`}>
      <div className={`${styles.pTHeader} ${styles.TTypeCenter} ${styles.TPadDouble}`}>
        <h2 className={styles.TTitle}>Our Partners</h2>
      </div>

      <div className={`${styles.TPadDouble} ${styles.TContent}`}>
        <div className={styles.TTContent}>
          <div className={styles.TTContainer}>
            <div className={`${styles.company} ${styles.logo} ${styles.gradientBorder}` } id='box'>
              <img
                src={DAO}
                alt="Company Logo 1"
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
 
  );
};

export default OurPartners;
