// pages/ResultPage.js

//
import styles from './resultPage.module.css'; // Import the CSS file

const ResultPage = () => {
  return (
 
      <div className={styles.container}>
        <h1 className={styles.heading}>Infertility Risk Prediction Result</h1>
        <div className={styles.resultContainer}>
          <h2 className={styles.resultText}>Your infertility risk level:</h2>
          <p className={`${styles.resultText} ${styles.highRisk}`}>High</p>
          {/* Replace "High" with the actual prediction result */}
        </div>
      </div>
  
  );
};

export default ResultPage;