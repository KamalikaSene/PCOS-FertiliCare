import styles from './home.module.css';
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/What.is.PCOS.Fertilicare" className={styles.leftTopContainer}  >
        <img src="/nursepic.jpg" alt="Image 1"  />
        <div>
          {/* Content for the left container */}
          <h2>What is PCOS Fertilicare</h2>
          <ul>
            <li>Brief Idea about the app</li>
            <li>Instrictions for Doctors</li>
            <li>Instrictions for General public</li>
          </ul>
        </div>
      </Link>

      <Link href="/About-PCOS" className={styles.rightTopContainer}>
        <div>
          {/* Content for the right container */}
          <h2>About PCOS</h2>
          <p>What is Polycycstic Overy Syndrome?  
          </p>
        </div>
        <img src="/aboutpcos.png" alt="Image 2" />
       </Link>
      
    
      <Link href="/Predict-Infertility-Risk-Level" className={styles.leftBottomContainer}>
        <img src="/predictpic.jpg" alt="Image 1" />
        <div>
          {/* Content for the left container */}
          <h2>Predict Infertility Risk Level</h2>
          <p>For Authorized medical personell only
         
          </p>
        </div>
      </Link>

      <Link href="/View-Past-Results" className={styles.rightBottomContainer}>
        <div>
          {/* Content for the right container */}
          <h2>View Past Results</h2>
        </div>
        <div>
        <img src="/infertile2.jpg" alt="Image 2" />
        </div>
      </Link>
      
    </div>
  )
}