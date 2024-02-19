import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Frequently Asked Questions</h1>
      <div className={styles.question}>
        <h3> &#9733; What is PCOS-Fertilicare?</h3>
        <p> This is a web-app created for predicting the risk levels of infertility a certain PCOS patient can get due to the complications of Polysistic Overy Syndrome.</p>
      </div>
      <div className={styles.question}>
        <h3>&#9733; How common is PCOS?</h3>
        <p> PCOS is one of the most common hormonal endocrine disorders among women of reproductive age, affecting approximately 1 in 10 women.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733;What are the symptoms of PCOS?</h3>
        <p> Symptoms can vary but may include irregular periods, heavy bleeding, excess facial or body hair, acne, and weight gain.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733;How is PCOS diagnosed?</h3>
        <p> Diagnosis often involves a combination of physical examination, medical history review, blood tests to measure hormone levels, and ultrasound to examine the ovaries.</p>
      </div>
      <div className={styles.question}>
        <h3>&#9733; Can PCOS lead to infertility?</h3>
        <p> Yes, PCOS can contribute to infertility due to irregular ovulation or failure to ovulate regularly. However, not all women with PCOS experience infertility.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733;How does your app predict infertility risk related to PCOS?</h3>
        <p> Our app utilizes advanced algorithms and medical data to analyze various factors such as hormone levels, menstrual history, and other health indicators to assess the risk of infertility in women with PCOS.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733;Who can use your app?</h3>
        <p> Only healthcare professionals, specifically doctors, can utilize our app for PCOS infertility risk prediction. This ensures accurate interpretation and appropriate action based on the results.</p>
      </div>
      <div className={styles.question}>
        <h3>&#9733; Is the app reliable?</h3>
        <p> Yes, our app is developed based on extensive research and validated medical data. However, it's important to remember that no prediction model is 100% accurate, and clinical judgment should always be exercised.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733;Can the app provide treatment recommendations?</h3>
        <p> Our app focuses solely on predicting infertility risk related to PCOS. Treatment recommendations should be discussed with a healthcare provider based on individual circumstances.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733; Is my data secure?</h3>
        <p> Yes, we prioritize data security and confidentiality. All data entered into the app is encrypted and stored following strict privacy regulations to ensure protection against unauthorized access.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733; How can I access the app?</h3>
        <p> Our app is accessible to doctors through a secure login portal. Patients or other users can access general information about PCOS and our app through our website.</p>
      </div>
      <div className={styles.question}>
        <h3> &#9733;Is the app available for download?</h3>
        <p> The app is currently available only to healthcare professionals for use in clinical settings. However, patients and other users can access information about PCOS and our app through our website.</p>
      </div>
    </div>
  );
};

export default FAQ;

