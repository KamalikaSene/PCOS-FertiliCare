import styles from "./footer.module.css";
import React from "react";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/footer2.png" alt="" />
      </div>
      <div>
        About us
      </div>
      <div>
        Terms and Conditions
      </div>
      <div>
        Privacy Policiy
      </div>
      <div>
        Web accessibility
      </div>
      <div>
        Sharing Setting
      </div>
      
      <div className={styles.text1}>
        PCOS-Fertilicare © All rights reserved.
      </div>
      
    </div>

  );
};

export default Footer;
