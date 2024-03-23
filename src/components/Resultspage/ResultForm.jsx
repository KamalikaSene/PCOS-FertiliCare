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
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setResult(data.risk_level);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setRecordId(event.target.value);
  };

  return (
    <div className="bg-pink-100 p-6 rounded-lg w-80 mx-auto mt-10 mb-10">
      <h3 className="text-center">Enter Result ID of the saved Result</h3>
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
        <div className="text-center text-green-700">
          Prediction Result: {result}
        </div>
      )}
      {error && (
        <div className="text-center text-red-700">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default ResultPage;