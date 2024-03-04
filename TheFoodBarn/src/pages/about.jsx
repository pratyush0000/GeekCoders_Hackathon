import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Ellipses from "../components/Ellipses";
import styles from './about.module.css';
import akaash from '../assets/akaash.jpeg';
import Aboutuscard from '../components/Aboutuscard';

// const About = () => {
//   const [flipped, setFlipped] = useState(null);

//   return (
//     <>
//       <Navbar />
//       <Ellipses />
//       <div className={styles.container}>
//         <div
//           className={`${styles.rectangle1} ${flipped === 1 ? styles.flipped : ''}`}
//           onMouseEnter={() => setFlipped(1)}
//           onMouseLeave={() => setFlipped(null)}
//         >
//           <div className={styles.square}></div>
//           <button className={styles.button}>Tanya Edlyn</button>
//           <div className={styles.back}>
//             Additional Info for Tanya Edlyn
//           </div>
//         </div>

//         <div
//           className={`${styles.rectangle2} ${flipped === 2 ? styles.flipped : ''}`}
//           onMouseEnter={() => setFlipped(2)}
//           onMouseLeave={() => setFlipped(null)}
//         >
//           <div className={styles.square}></div>
//           <button className={styles.button}>Pratyush Kamal</button>
//           <div className={styles.back}>
//             Additional Info for Pratyush Kamal
//           </div>
//         </div>

//         <div
//           className={`${styles.rectangle3} ${flipped === 3 ? styles.flipped : ''}`}
//           onMouseEnter={() => setFlipped(3)}
//           onMouseLeave={() => setFlipped(null)}
//         >
//           <div className={styles.square}>
//                 <img src={akaash} alt="Akaash Emmanuel" className={styles.aimg}/>
//           </div>
//           <button className={styles.button}>Akaash Emmanuel</button>
//           <div className={styles.back}>
//             Additional Info for Akaash Emmanuel
//           </div>
//         </div>

//         <div
//           className={`${styles.rectangle4} ${flipped === 4 ? styles.flipped : ''}`}
//           onMouseEnter={() => setFlipped(4)}
//           onMouseLeave={() => setFlipped(null)}
//         >
//           <div className={styles.square}></div>
//           <button className={styles.button}>Rohan Guthikonda</button>
//           <div className={styles.back}>
//             Additional Info for Rohan Guthikonda
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


const About = () => {
  return(
    <>
      <Navbar />
      <Ellipses />
      <div className={styles.aboutdiv}>
        <Aboutuscard imagelink={akaash} pname={"Akaash Emmanuel"} gitlink={"https://github.com/akaash-emmanuelx"} gitdis={"@akaash-emmannuel"}></Aboutuscard>
        <Aboutuscard imagelink={akaash} pname={"Akaash Emmanuel"} gitlink={"https://github.com/akaash-emmanuelx"} gitdis={"@akaash-emmannuel"}></Aboutuscard>
        <Aboutuscard imagelink={akaash} pname={"Akaash Emmanuel"} gitlink={"https://github.com/akaash-emmanuelx"} gitdis={"@akaash-emmannuel"}></Aboutuscard>
        <Aboutuscard imagelink={akaash} pname={"Akaash Emmanuel"} gitlink={"https://github.com/akaash-emmanuelx"} gitdis={"@akaash-emmannuel"}></Aboutuscard>
      </div>
    </>
  )
}
export default About;
