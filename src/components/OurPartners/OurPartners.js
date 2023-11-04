import React from 'react';
import styles from './ourPartners.module.css';
import DAO from './DAOStarter-Logo-Green.png'
import Psalma from "./2-PhotoRoom.png"
import { Link } from 'react-router-dom';
const OurPartners = () => {
  return (
    <section className=' pt-44 pb-28 bg-[#13191f] max-sm:pt-28'>  
         <div className={`${styles.container}`}>
      <div className={`${styles.pTHeader} ${styles.TTypeCenter} ${styles.TPadDouble}`}>
        <h2 className={styles.TTitle}>Our Investors</h2>
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
              
              
              <img
                src={Psalma}
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
