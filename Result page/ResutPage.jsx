//fetch the prediction result from the Flask API when the component mounts.
import { useEffect, useState } from 'react';

//API for performing HTTP requests, making it a common choice for interacting with backend APIs in frontend applications.
import axios from 'axios';

import Layout from '../components/Layout'; //layout component
import styles from '../styles/resultPage.module.css'; // Import the CSS file

//Initializes state variable predictionResult using the useState hook.
const ResultPage = () => {
  const [predictionResult, setPredictionResult] = useState(null);

  
