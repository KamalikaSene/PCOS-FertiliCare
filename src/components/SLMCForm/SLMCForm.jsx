"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import styles from "./doctor.module.css";

const SLMCForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [Surname, setSurname] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter(); // Use the useRouter hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Registration Number:', registrationNumber); // Add this line to log the registration number
      console.log('Surname:', Surname); // Add this line to log the surname
      const response = await fetch('http://localhost:4000/example/authenticate-doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrationNumber, Surname }), // Send both registration number and surname
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Redirect to predict-pcos page
          router.push('/Predict-PCOS');
        } else {
          setError('Invalid registration number or surname');
        }
      } else {
        setError('An error occurred during validation');
      }
    } catch (error) {
      setError('An error occurred during validation');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter SLMC Registration number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
        name="registrationNumber"
        required
      />
      <input
        type="text"
        placeholder="Enter Surname in Block Capitals"
        value={Surname}
        onChange={(e) => setSurname(e.target.value)}
        name="Surname"
        required
      />
      <button type="submit">Validate</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SLMCForm;