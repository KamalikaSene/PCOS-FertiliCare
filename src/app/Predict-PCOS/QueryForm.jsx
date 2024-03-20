"use client"
import { useState } from 'react';

const QueryForm = () => {
  const [bmi, setBMI] = useState('');
  const [cycle, setCycle] = useState('Regular');
  const [fsh_lh, setFSHLH] = useState('');
  const [prl_ng_ml, setPRL] = useState('');
  const [predictionText, setPredictionText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cycle_value = cycle === 'Regular' ? '2' : '4';

    try {
      await fetch('http://localhost:3000/api/patientData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
      });

      const response = await fetch('/predict', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = await response.json();
      setPredictionText(data.prediction_text);

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

return (
  <div className="login">
   <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10">Infertility Risk Prediction</h1>
   <div className="login bg-pink-200 mx-60 rounded-lg p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="flex items-center">
          <h4 className="mr-2">Enter BMI</h4>
          <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} placeholder="BMI" required className="p-3 border border-gray-300 rounded-md w-32 ml-24" />
        </div>
        <div className="flex items-center">

        <h4 className="mr-2">Cycle(R/I)</h4>
                <select id="cycleSelector" value={cycle} onChange={(e) => setCycle(e.target.value)} required className="p-3 border border-gray-300 rounded-md w-32 ml-24">
                  <option value="Regular">Regular</option>
                  <option value="Irregular">Irregular</option>
                </select>
              </div>
              <div className="flex items-center">
                <h4 className="mr-2">Enter FSH/LH Ratio</h4>
                <input type="text" value={fsh_lh} onChange={(e) => setFSHLH(e.target.value)} placeholder="FSH/LH" required className="p-3 border border-gray-300 rounded-md w-32 ml-7" />
              </div>
              <div className="flex items-center">
                <h4 className="mr-2">Enter Polactine Level</h4>
                <input type="text" value={prl_ng_ml} onChange={(e) => setPRL(e.target.value)} placeholder="PRL(ng/mL)" required className="p-3 border border-gray-300 rounded-md w-32 ml-4" />
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-10 mb-10 block mx-auto">
                Predict Infertility Risk Level
              </button>
            </form>
          </div>
      <br />
      <br />
      {predictionText && <p>{predictionText}</p>}
    </div>
  );
};

export default QueryForm;