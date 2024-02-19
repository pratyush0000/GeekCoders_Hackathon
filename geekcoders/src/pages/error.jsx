
import errorImage from '../assets/error.png'; 
import styles from './error.module.css'; 
import Ellipses from "../components/Ellipses";

const Error = () => {
  return (

    <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.header}>TheFoodBarn</div>
      <img src={errorImage} alt="Error" className={styles.image} />
      <button className={styles.button}>Retry</button>
    </div>
    <Ellipses/>
  </div>

  );
};

export default Error;
