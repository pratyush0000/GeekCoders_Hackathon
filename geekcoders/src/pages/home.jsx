import React from 'react';
import Navbar from "../components/Navbar";
import image from "../assets/image.png";
import styles from './home.module.css';
import Ellipses from "../components/Ellipses";

const home = () => {
  return (
    <>
      <Navbar />
      <div style={styles.spacer}>
      </div>
      <div className={styles.container}>
        {/* Image div */}
        <div style={{ flex: 1 }} className={styles.imagecontainer}>
          <img src={image} alt="The Food Barn" className={styles.image} />
        </div>

        {/* Text and buttons div */}
        <div style={{ flex: 2, marginLeft: '20px' }}>
          <div>
            <h1 className={`${styles.bold} ${styles.heading}`}>
              <span className={styles.largeText}>THE</span><br />
              <span className={styles.largeText}>FOODBARN</span>
            </h1>
            <p className={`${styles.text} ${styles.believeText}`}> 
              At TheFoodBarn, we believe in the power of food to nourish and unite communities.
              Our platform serves as a bridge between those who have food to donate and those who are in need.
              Whether you're an individual looking to make a difference or an organisation with surplus food,
              TheFoodBarn provides a safe and efficient way to connect with those who can benefit from your generosity.
              Join us in our mission to reduce food waste and fight hunger, one meal at a time.
            </p>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button className={styles.button}>Register</button>
            <button className={styles.button}>Who Are We?</button>
          </div>
        </div>
      </div>
      <Ellipses/>
    </>
  );
};

export default home;
