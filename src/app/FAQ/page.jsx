import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.question}>
        <h3>Q: What is PCOS-Fertilicare?</h3>
        <p>A: .</p>
      </div>
      <div className={styles.question}>
        <h3>Q: How do I get started with Next.js?</h3>
        <p>A: You can create a new Next.js app using the `create-next-app` command.</p>
      </div>
      {/* Add more questions and answers as needed */}
    </div>
  );
};

export default FAQ;

