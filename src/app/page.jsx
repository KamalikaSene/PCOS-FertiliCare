import styles from './home.module.css';
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/about-app" className={styles.leftTopContainer}  >
        <img src="/nursepic.jpg" alt="Image 1"  />
        <div>
          {/* Content for the left container */}
          <h2>What is PCOS Fertilicare</h2>
          <p>Learn more about us
          </p>
        </div>
      </Link>

      <Link href="/About-PCOS" className={styles.rightTopContainer}>
        <div>
          {/* Content for the right container */}
          <h2>About PCOS</h2>
          <p>Gain more knowledge on PCOS  
        </p>
        </div>
        <img src="/aboutpcos.png" alt="Image 2" />
      </Link>
    

      <Link href="/Predict-PCOS" className={styles.leftBottomContainer}>
        <img src="/predictpcos1.jpeg" alt="Image 1" />
        <div>
          {/* Content for the left container */}
          <h2>Predict Infertility Risk Level</h2>
          <p>Predict infertility risk level (Restricted for medical personall only)
         
          </p>
        </div>
      </Link>

      <div className={styles.rightBottomContainer}>
        <div>
          {/* Content for the right container */}
          <h2>View Past Results</h2>
          <p>View the past predicted results
          </p>
        </div>
        <img src="/viewpast1.jpeg" alt="Image 2" />
      </div>
      </div>
  );
}