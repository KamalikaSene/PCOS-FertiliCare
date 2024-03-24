"use client"
import React, { useState } from 'react';

const ResultPage = () => {
  const [recordId, setRecordId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/${recordId}`);
      if (!response.ok) {
        throw new Error('Error. Please enter a valid ID.');
      }
      const data = await response.json();
      setError(null);
      setResult(data.risk_level);
    } catch (error) {
      setResult(null);
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setRecordId(event.target.value);
  };

  return (
    <div className="bg-pink-100 p-6 rounded-lg w-80 mx-auto mt-10 mb-10">
      <h3 className="text-center">Enter Result ID of the Saved Result</h3>
      <form className="mt-4 mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Result ID"
          className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
          value={recordId}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
      {result && (
        <div class="bg-pink-200 shadow-md rounded-lg p-4 text-center">
        <span class="text-grey-700 font-medium">Your Past Prediction Result:</span>
        <br></br> 
        <span class="text-pink-700 font-bold text-xl">{result}</span>
        </div>
      )}
      {error && (
        <div className="text-center text-red-700">
          {error}
        </div>
      )}
    </div>
  );
};

export default ResultPage;