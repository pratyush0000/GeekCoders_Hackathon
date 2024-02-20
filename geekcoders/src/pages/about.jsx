import React from 'react';
import Navbar from "../components/Navbar";
import Ellipses from "../components/Ellipses";
import styles from './about.module.css';

const About = () => {
  return (
    <>
      <Navbar />
      <Ellipses />
      <div className={styles.container}>
        <div className={styles.rectangle}>
          <div className={styles.square}></div>
          <div className={styles.text}>Tanya Edlyn</div>
        </div>
        <div className={styles.rectangle}>
          {/* < className={styles.text}>Pr */}
          <div className={styles.square}></div>
          <div className={styles.text}>Pratyush Kamal</div>
        </div>
        <div className={styles.rectangle}>
          {/* <div className={styles.text}>Akaash Emmanuel</div> */}
          <div className={styles.square}></div>
          <div className={styles.text}>Akaash Emmanuel</div>
        </div>
        <div className={styles.rectangle}>
          {/* <div className={styles.text}>Rohan Guthikonda</div> */}
          <div className={styles.square}></div>
          <div className={styles.text}>Rohan Guthikonda</div>

        </div>
      </div>
    </>
  );
};

export default About;
