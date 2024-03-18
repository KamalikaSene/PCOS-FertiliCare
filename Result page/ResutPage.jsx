//fetch the prediction result from the Flask API when the component mounts.
import { useEffect, useState } from 'react';

//API for performing HTTP requests, making it a common choice for interacting with backend APIs in frontend applications.
import axios from 'axios';

import Layout from '../components/Layout'; //layout component
import styles from '../styles/resultPage.module.css'; // Import the CSS file

//Initializes state variable predictionResult using the useState hook.
const ResultPage = () => {
  const [predictionResult, setPredictionResult] = useState(null);


  useEffect(() => {
    // Function to fetch prediction result from Flask API
    const fetchPredictionResult = async () => {

      try {
        // Make a POST request to Flask API endpoint
        // Replace http://localhost:5000/predict_infertility_risk with the actual URL of Flask API endpoint for predicting infertility risk.
        const response = await axios.post('http://localhost:5000/predict_infertility_risk', {
          // Pass input data for prediction if needed
        });

         // Extract prediction result from response data
         const { result } = response.data;
        
         // Set the prediction result in state
         setPredictionResult(result);
       } catch (error) {
         console.error('Error fetching prediction result:', error);
         // Handle error
       }
     };
 
     // Call the fetchPredictionResult function
     fetchPredictionResult();
   }, []);


   // Function to get the color class based on the result
   const getColorClass = (result) => {
     switch (result) {
       case 'High':
         return styles.highRisk;
       case 'Mid':
         return styles.midRisk;
       case 'Low':
         return styles.lowRisk;
       default:
         return '';
     }
   };
   

   //Layout returned

   return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Infertility Risk Prediction Result</h1>
        <div className={styles.resultContainer}>
          <h2 className={styles.resultText}>Your infertility risk level:</h2>
          {predictionResult && (
            <p className={`${styles.resultText} ${getColorClass(predictionResult)}`}>
              {predictionResult}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ResultPage;



