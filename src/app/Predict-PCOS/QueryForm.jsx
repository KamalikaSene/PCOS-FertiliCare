"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const QueryForm = () => {
  const [bmi, setBMI] = useState('');
  const [cycle, setCycle] = useState('Regular');
  const [fsh_lh, setFSHLH] = useState('');
  const [prl_ng_ml, setPRL] = useState('');
  const [predictionText, setPredictionText] = useState('');
  // const [recordId, setRecordId] = useState(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPredictionFetched, setIsPredictionFetched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const cycle_value = cycle === 'Regular' ? '2' : '4';
      const response = await fetch('http://localhost:3000/api/patientData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
      });
      if (!response.ok) {
        throw new Error(`Error sending data to backend: ${response.statusText}`);
      }
      // Simulate a 5-second delay before fetching prediction
      setTimeout(() => {
        fetchData();
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/viewresult');
      if (!response.ok) {
        throw new Error(`Error fetching last record: ${response.statusText}`);
      }
      const data = await response.json();
      setPredictionText(data.risk_level || '');
      setIsPredictionFetched(true);
      // setRecordId(data.recordId || null);

    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      fetchData();
    }
  }, [isSubmitting]);


  const handleDeleteResult = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/deleteresult', {
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error(`Error deleting result: ${response.statusText}`);
      }

      console.log('Result deleted successfully!');
      setIsDeleteSuccess(true);

    } catch (error) {
      console.error('Error deleting result:', error);
    }
  };
  

return (
  <div className="login">
   <h1 className="text-2xl font-bold mb-4 text-center mt-10">Infertility Risk Prediction</h1>
   <div className="login bg-pink-200 mx-60 rounded-lg p-8">
  <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
    <div className="flex items-center justify-center">
      <h4 className="mr-4">Enter BMI</h4>
      <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} placeholder="22" required className="p-3 border border-gray-300 rounded-md w-32 ml-24" />
    </div>

    <div className="flex items-center justify-center">
      <h4 className="mr-4">Cycle(R/I)</h4>
      <select id="cycleSelector" value={cycle} onChange={(e) => setCycle(e.target.value)} required className="p-3 border border-gray-300 rounded-md w-32 ml-24">
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
      </select>
    </div>

    <div className="flex items-center justify-center">
      <h4 className="mr-3">Enter FSH/LH Ratio</h4>
      <input type="text" value={fsh_lh} onChange={(e) => setFSHLH(e.target.value)} placeholder="0.2" required className="p-3 border border-gray-300 rounded-md w-32 ml-7" />
    </div>

    <div className="flex items-center justify-center">
      <h4 className="mr-4">Enter Prolactin Level</h4>
      <input type="text" value={prl_ng_ml} onChange={(e) => setPRL(e.target.value)} placeholder="22 (ng/mL)" required className="p-3 border border-gray-300 rounded-md w-32 ml-4" />
    </div>

    <button type="submit" className="bg-pink-500 text-white hover:bg-pink-600 transition duration-300 ease-in-out font-semibold py-3 px-5 rounded-md mt-10 mb-10 block mx-auto">
      Predict Infertility Risk Level
    </button>
  </form>
</div>

      <br />
      <br />

        <div style={{ textAlign: 'center' }}>
          {isSubmitting && <p>Submitting data...</p>}
          {isLoading && <p>Fetching prediction...</p>}
        </div>

      {error && (
        <p className="text-red-500 font-bold text-center">{error}</p>
      )}
    
        {isPredictionFetched && (
          <>
            <div className="bg-green-200 p-8 mt-8 mb-8">
              <div className="bg-green-100 p-8 mt-2 mb-7">
                <p className="pt-2 pb-6 text-center">Prediction Made Successfully..</p>
                <p className="text-xl text-center text-pink-700"> {/* Make the text bigger */}
                  Your Predicted Infertility Risk Level Is
                </p>
                <p className="text-3xl font-bold text-center text-pink-600 mb-1 mt-3"> {/* Make predictionText even bigger */}
                  {predictionText} Risk!
                </p>
              </div>
              <div className="bg-pink-100 p-8 mt-2 mb-7">
                <p className="pt-2 text-center">Please Select What You Would Like To Do Next!</p>
                <div className="mt-4">
                  <div className= "px-4 py-2 flex justify-center">
                    <button
                      className="mx-2w-full px-4 py-2 rounded-md bg-pink-300 text-pink-800 hover:bg-pink-600 hover:text-white transition duration-300 ease-in-out  mx-2"
                      onClick={handleDeleteResult}
                    >
                      Delete Result
                    </button>

                    <Link href="/Result-page">
                      <p className="mx-2w-full px-4 py-2 rounded-md bg-pink-300 text-pink-800 hover:bg-pink-600 hover:text-white transition duration-300 ease-in-out  mx-2">View Past Results</p>
                    </Link>
                  </div>
                </div>

                {isDeleteSuccess && (
                  <p className="text-green-700 font-bold text-center mt-5">
                    Your Result Has Been Deleted From History Successfully!
                  </p>
                )}
              </div>
             </div>
          </>
        )}
    </div>
  );
};

export default QueryForm;







// "use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link'; // Import Link from next/link

// const QueryForm = () => {
//   const [bmi, setBMI] = useState('');
//   const [cycle, setCycle] = useState('Regular');
//   const [fsh_lh, setFSHLH] = useState('');
//   const [prl_ng_ml, setPRL] = useState('');
//   const [predictionText, setPredictionText] = useState('');
//   // const [recordId, setRecordId] = useState(null);
//   const [isDeleteSuccess, setIsDeleteSuccess] = useState(false); // Track deletion success

//   const [error, setError] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isPredictionFetched, setIsPredictionFetched] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const cycle_value = cycle === 'Regular' ? '2' : '4';
//       const response = await fetch('http://localhost:3000/api/patientData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
//       });
//       if (!response.ok) {
//         throw new Error(`Error sending data to backend: ${response.statusText}`);
//       }
//       // Simulate a 5-second delay before fetching prediction
//       setTimeout(() => {
//         fetchData();
//       }, 5000);
//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//       setError(error.message);
//       setIsSubmitting(false);
//     }
//   };

//   const fetchData = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('http://localhost:3000/api/viewresult');
//       if (!response.ok) {
//         throw new Error(`Error fetching last record: ${response.statusText}`);
//       }
//       const data = await response.json();
//       setPredictionText(data.risk_level || '');
//       setIsPredictionFetched(true); // Mark prediction as fetched
//       // setRecordId(data.recordId || null); // Handle potential missing recordId
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isSubmitting) {
//       fetchData();
//     }
//   }, [isSubmitting]);


//   const handleDeleteResult = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/deleteresult', {
//         method: 'POST'
//       });

//       if (!response.ok) {
//         throw new Error(`Error deleting result: ${response.statusText}`);
//       }

//       console.log('Result deleted successfully!');
//       setIsDeleteSuccess(true); // Set state for deletion success message

//     } catch (error) {
//       console.error('Error deleting result:', error);
//       // Handle any errors or display an error message to the user
//     }
//   };
  

// return (
//   <div className="login">
//    <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10">Infertility Risk Prediction</h1>
//    <div className="login bg-pink-200 mx-60 rounded-lg p-6">
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//         <div className="flex items-center">
//           <h4 className="mr-2">Enter BMI</h4>
//           <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} placeholder="BMI" required className="p-3 border border-gray-300 rounded-md w-32 ml-24" />
//         </div>
//         <div className="flex items-center">

//         <h4 className="mr-2">Cycle(R/I)</h4>
//                 <select id="cycleSelector" value={cycle} onChange={(e) => setCycle(e.target.value)} required className="p-3 border border-gray-300 rounded-md w-32 ml-24">
//                   <option value="Regular">Regular</option>
//                   <option value="Irregular">Irregular</option>
//                 </select>
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter FSH/LH Ratio</h4>
//                 <input type="text" value={fsh_lh} onChange={(e) => setFSHLH(e.target.value)} placeholder="FSH/LH" required className="p-3 border border-gray-300 rounded-md w-32 ml-7" />
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter Prolactin Level</h4>
//                 <input type="text" value={prl_ng_ml} onChange={(e) => setPRL(e.target.value)} placeholder="PRL(ng/mL)" required className="p-3 border border-gray-300 rounded-md w-32 ml-4" />
//               </div>
//               <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-10 mb-10 block mx-auto">
//                 Predict Infertility Risk Level
//               </button>
//             </form>
//           </div>
//       <br />
//       <br />

//         {/* ... form and prediction display components ... */}
//         {isSubmitting && <p>Submitting data...</p>} {/* Display loading indicator during submission */}
//         {isLoading && <p>Fetching prediction...</p>} {/* Display loading indicator while fetching */}  

//       {error && ( // Display error message if present
//         <p className="text-red-500 font-bold text-center">{error}</p>
//       )}

//       {/* Conditionally render risk level paragraphs and next steps message */}
//       {isPredictionFetched && (
//         <>
//           <p className="text-lg font-bold text-center bg-gray-200">
//             Your Predicted Infertility Risk Level: {predictionText}
//           </p>
//           <p className="text-center font-semibold">Please select what you would like to do next!</p>
//           <div className="flex justify-center mt-4">
//             <button
//               className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 mx-2"
//               onClick={handleDeleteResult}
//             >
//               Delete Result
//             </button>
//           </div>

//           <Link href="/Result-page">
//           <div><p>View Past Results</p></div>
//           </Link>

//           {/* Conditionally display deletion success message */}
//           {isDeleteSuccess && (
//             <p className="text-green-500 font-bold text-center mt-2">
//                 Result has been deleted from history successfully!
//             </p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default QueryForm;









// "use client"
// import 'babel-polyfill';
// import { useState,useEffect  } from 'react';

// const QueryForm = () => {
//   const [bmi, setBMI] = useState('');
//   const [cycle, setCycle] = useState('Regular');
//   const [fsh_lh, setFSHLH] = useState('');
//   const [prl_ng_ml, setPRL] = useState('');
//   const [predictionText, setPredictionText] = useState('');
//   const [error, setError] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
//   const [isLoading, setIsLoading] = useState(false); // Track fetching state

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cycle_value = cycle === 'Regular' ? '2' : '4';
//     setIsSubmitting(true); // Set loading indicator during submission


//   //   try {
//   //     // const response = await fetch('http://localhost:3000/api/patientData', {
//   //     await fetch('http://localhost:3000/api/patientData', {  
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
//   //     });

//   //     // const data = await response.json();
      
//   //     // setPredictionText(data.risk_level);
//   //     // console.log('predictionText:', predictionText);


//   //   } catch (error) {
//   //     console.error('Error sending data to backend:', error);
//   //     setPredictionText(error);
//   //   }
//   // };
//     try {
//       const response = await fetch('http://localhost:3000/api/patientData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
//       });

//       if (!response.ok) {
//         throw new Error(`Error sending data to backend: ${response.statusText}`);
//       }

//       // Clear any previous prediction (important for subsequent submissions)
//       setPredictionText('');

//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//       setError(error.message);
//     } finally {
//       setIsSubmitting(false); // Reset loading indicator after submission
//     }
//   }; 

//   // useEffect(() => {
//   //   const fetchLastRecord = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:3000/api/viewresult');
//   //       if (!response.ok) {
//   //         throw new Error(`Error fetching last record: ${response.statusText}`);
//   //       }
//   //       const data = await response.json();
//   //       setPredictionText(data.risk_level || ''); // Display risk level if available
//   //     } catch (error) {
//   //       setError(error.message);
//   //     }
//   //   };

//   //   fetchLastRecord();
//   // }, []);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true); // Set loading indicator for fetching

//       try {
//         // Ensure successful data submission before fetching latest record
//         if (!error && !isSubmitting) { // Check for error and submission state
//           const delay = 1000; // Set a delay (adjust as needed)
//           await new Promise((resolve) => setTimeout(resolve, delay)); // Simulate delay

//           const response = await fetch('http://localhost:3000/api/viewresult');
//           if (!response.ok) {
//             throw new Error(`Error fetching last record: ${response.statusText}`);
//           }
//           const data = await response.json();
//           setPredictionText(data.risk_level || ''); // Display risk level
//         }
//       } catch (error) {
//         setError(error.message); // Set error state for fetching last record
//       } finally {
//         setIsLoading(false); // Reset loading indicator after fetching
//       }
//     };

//     // Call fetchData after submission with a delay
//     if (isSubmitting) {
//       fetchData();
//     }
//   }, [error, isSubmitting]); // Re-run only on submission state changes

  
// return (
//   <div className="login">
//    <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10">Infertility Risk Prediction</h1>
//    <div className="login bg-pink-200 mx-60 rounded-lg p-6">
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//         <div className="flex items-center">
//           <h4 className="mr-2">Enter BMI</h4>
//           <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} placeholder="BMI" required className="p-3 border border-gray-300 rounded-md w-32 ml-24" />
//         </div>
//         <div className="flex items-center">

//         <h4 className="mr-2">Cycle(R/I)</h4>
//                 <select id="cycleSelector" value={cycle} onChange={(e) => setCycle(e.target.value)} required className="p-3 border border-gray-300 rounded-md w-32 ml-24">
//                   <option value="Regular">Regular</option>
//                   <option value="Irregular">Irregular</option>
//                 </select>
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter FSH/LH Ratio</h4>
//                 <input type="text" value={fsh_lh} onChange={(e) => setFSHLH(e.target.value)} placeholder="FSH/LH" required className="p-3 border border-gray-300 rounded-md w-32 ml-7" />
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter Polactine Level</h4>
//                 <input type="text" value={prl_ng_ml} onChange={(e) => setPRL(e.target.value)} placeholder="PRL(ng/mL)" required className="p-3 border border-gray-300 rounded-md w-32 ml-4" />
//               </div>
//               <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-10 mb-10 block mx-auto">
//                 Predict Infertility Risk Level
//               </button>
//             </form>
//           </div>
//       <br />
//       <br />
//         {/* ... form and prediction display components ... */}
//         {isSubmitting && <p>Submitting data...</p>} {/* Display loading indicator during submission */}
//         {isLoading && <p>Fetching prediction...</p>} {/* Display loading indicator while fetching */}      
//       {error && ( // Display error message if present
//         <p className="text-red-500 font-bold text-center">{error}</p>
//       )}
//       <p className="text-lg font-bold text-center bg-gray-200"> Risk Level: {predictionText}</p>
//       {/* ... Conditional styling for risk level display ... */}
//     </div>
//   );
// };

// export default QueryForm;




// "use client"
// import { useState,useEffect  } from 'react';

// const QueryForm = () => {
//   const [bmi, setBMI] = useState('');
//   const [cycle, setCycle] = useState('Regular');
//   const [fsh_lh, setFSHLH] = useState('');
//   const [prl_ng_ml, setPRL] = useState('');
//   const [predictionText, setPredictionText] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cycle_value = cycle === 'Regular' ? '2' : '4';

//     try {
//       // const response = await fetch('http://localhost:3000/api/patientData', {
//       await fetch('http://localhost:3000/api/patientData', {  
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
//       });

//       // const data = await response.json();
      
//       // setPredictionText(data.risk_level);
//       // console.log('predictionText:', predictionText);


//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//       setPredictionText(error);
//     }
//   };

// return (
//   <div className="login">
//    <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10">Infertility Risk Prediction</h1>
//    <div className="login bg-pink-200 mx-60 rounded-lg p-6">
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//         <div className="flex items-center">
//           <h4 className="mr-2">Enter BMI</h4>
//           <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} placeholder="BMI" required className="p-3 border border-gray-300 rounded-md w-32 ml-24" />
//         </div>
//         <div className="flex items-center">

//         <h4 className="mr-2">Cycle(R/I)</h4>
//                 <select id="cycleSelector" value={cycle} onChange={(e) => setCycle(e.target.value)} required className="p-3 border border-gray-300 rounded-md w-32 ml-24">
//                   <option value="Regular">Regular</option>
//                   <option value="Irregular">Irregular</option>
//                 </select>
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter FSH/LH Ratio</h4>
//                 <input type="text" value={fsh_lh} onChange={(e) => setFSHLH(e.target.value)} placeholder="FSH/LH" required className="p-3 border border-gray-300 rounded-md w-32 ml-7" />
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter Polactine Level</h4>
//                 <input type="text" value={prl_ng_ml} onChange={(e) => setPRL(e.target.value)} placeholder="PRL(ng/mL)" required className="p-3 border border-gray-300 rounded-md w-32 ml-4" />
//               </div>
//               <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-10 mb-10 block mx-auto">
//                 Predict Infertility Risk Level
//               </button>
//             </form>
//           </div>
//       <br />
//       <br />
//       {error && ( // Display error message if present
//         <p className="text-red-500 font-bold text-center">{error}</p>
//       )}
//       <p className="text-lg font-bold text-center bg-gray-200"> Risk Level: {predictionText}</p>
//       {/* ... Conditional styling for risk level display ... */}
//     </div>
//   );
// };

// export default QueryForm;


// "use client"
// import { useState } from 'react';

// const QueryForm = () => {
//   const [bmi, setBMI] = useState('');
//   const [cycle, setCycle] = useState('Regular');
//   const [fsh_lh, setFSHLH] = useState('');
//   const [prl_ng_ml, setPRL] = useState('');
//   const [predictionText, setPredictionText] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cycle_value = cycle === 'Regular' ? '2' : '4';

//     try {
//       const response = await fetch('http://localhost:3000/api/patientData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ bmi, cycle_value, fsh_lh, prl_ng_ml }),
//       });

//       const data = await response.json();
      
//       setPredictionText(data.risk_level);
//       console.log('predictionText:', predictionText);


//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//       setPredictionText(error);
//     }
//   };

// return (
//   <div className="login">
//    <h1 className="text-2xl font-bold mb-4 text-center mt-10 mb-10">Infertility Risk Prediction</h1>
//    <div className="login bg-pink-200 mx-60 rounded-lg p-6">
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//         <div className="flex items-center">
//           <h4 className="mr-2">Enter BMI</h4>
//           <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} placeholder="BMI" required className="p-3 border border-gray-300 rounded-md w-32 ml-24" />
//         </div>
//         <div className="flex items-center">

//         <h4 className="mr-2">Cycle(R/I)</h4>
//                 <select id="cycleSelector" value={cycle} onChange={(e) => setCycle(e.target.value)} required className="p-3 border border-gray-300 rounded-md w-32 ml-24">
//                   <option value="Regular">Regular</option>
//                   <option value="Irregular">Irregular</option>
//                 </select>
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter FSH/LH Ratio</h4>
//                 <input type="text" value={fsh_lh} onChange={(e) => setFSHLH(e.target.value)} placeholder="FSH/LH" required className="p-3 border border-gray-300 rounded-md w-32 ml-7" />
//               </div>
//               <div className="flex items-center">
//                 <h4 className="mr-2">Enter Polactine Level</h4>
//                 <input type="text" value={prl_ng_ml} onChange={(e) => setPRL(e.target.value)} placeholder="PRL(ng/mL)" required className="p-3 border border-gray-300 rounded-md w-32 ml-4" />
//               </div>
//               <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-10 mb-10 block mx-auto">
//                 Predict Infertility Risk Level
//               </button>
//             </form>
//           </div>
//       <br />
//       <br />
//       <p className="text-lg font-bold text-center bg-gray-200"> Risk Level: {predictionText}</p>

//       <h1>predictionnn</h1>
//       {predictionText && <p>{predictionText}</p>}
//       {predictionText && (
//         <p className={`text-lg font-bold text-center ${predictionText === 'High' ? 'bg-red-500 text-white' : ''}`}>  {/* Add conditional styling */}
//           Risk Level: {predictionText}
//         </p>
//       )}
//     </div>
//   );
// };

// export default QueryForm;