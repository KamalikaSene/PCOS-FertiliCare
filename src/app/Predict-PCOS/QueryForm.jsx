"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [pcos, setPcos] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [cycle, setCycle] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [abortion, setAbortion] = useState('');
  const [fsh, setFsh] = useState('');
  const [lh, setLh] = useState('');
  const [fshLhRatio, setFshLhRatio] = useState('');
  const [prolactin, setProlactin] = useState('');
  const [weightgain, setWeightgain] = useState('');
  const [fastfood, setFastfood] = useState('');
  const [exercise, setExercise] = useState('');
  
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pcos,
        age,
        weight,
        height,
        bmi,
        cycle,
        pregnant,
        abortion,
        fsh,
        lh,
        fshLhRatio,
        prolactin,
        weightgain,
        fastfood,
        exercise,
      }),
    });

    if (!response.ok) {
      console.error('Error response:', response);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const { msg, success } = responseData;
    setError(msg);
    setSuccess(success);

    if (success) {
      setPcos('');
      setAge('');
      setWeight('');
      setHeight('');
      setBmi('');
      setCycle('');
      setPregnant('');
      setAbortion('');
      setFsh('');
      setLh('');
      setFshLhRatio('');
      setProlactin('');
      setWeightgain('');
      setFastfood('');
      setExercise('');
    }
  } catch (error) {
    console.error('Error sending data:', error);
    setError(['An Error Occurred. Please Try Again.']);
    setSuccess(false);
  }
};
 
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="pcos">Evidence of PCOS (If Yes = 1 / If No = 0)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setPcos(e.target.value)}
            value={pcos}
            type="number"
            id="pcos"
            placeholder="1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="age">Patient's Age (In Years)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            id="age"
            placeholder="28"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="weight">Patient's Weight (In Kilogram)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            type="number"
            id="weight"
            placeholder="50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="height">Patient's Height (In Centimeters)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
            type="number"
            id="height"
            placeholder="150"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="bmi">Patient's BMI</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setBmi(e.target.value)}
            value={bmi}
            type="number"
            id="bmi"
            placeholder="30.00"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cycle">Patient's Menstrual Cycle (If Regular = 2 / If Irregular = 4)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setCycle(e.target.value)}
            value={cycle}
            type="number"
            id="cycle"
            placeholder="4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pregnant">Pregnancy Status of the Patient (If Pregnant = 1 / If Pregnant = 0)	</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setPregnant(e.target.value)}
            value={pregnant}
            type="number"
            id="pregnant"
            placeholder="0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="abortion">Patient's Abortion Count</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setAbortion(e.target.value)}
            value={abortion}
            type="number"
            id="abortion"
            placeholder="0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fsh">Patient's FSH Level (In mIU/mL)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setFsh(e.target.value)}
            value={fsh}
            type="number"
            id="fsh"
            placeholder="2.34"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lh">Patient's LH Level (In mIU/mL)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setLh(e.target.value)}
            value={lh}
            type="number"
            id="lh"
            placeholder="0.12"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fshLhRatio">Patient's FSH/LH Ratio</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setFshLhRatio(e.target.value)}
            value={fshLhRatio}
            type="number"
            id="fshLhRatio"
            placeholder="1.11"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="prolactin">Patient's Prolactin Level (In ng/mL)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setProlactin(e.target.value)}
            value={prolactin}
            type="number"
            id="prolactin"
            placeholder="15.00"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="weightgain">Evidence of Weight Gain (If Yes = 1 / If No = 0)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setWeightgain(e.target.value)}
            value={weightgain}
            type="number"
            id="weightgain"
            placeholder="1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fastfood">Patient's Fast Food Intake (If Yes = 1 / If No = 0)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setFastfood(e.target.value)}
            value={fastfood}
            type="number"
            id="fastfood"
            placeholder="1"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="exercise">Evidence of Regular Exercise (If Yes = 1 / If No = 0)</label>
          <input className="shadow-md px-6 py-2 border border-slate-300"
            onChange={(e) => setExercise(e.target.value)}
            value={exercise}
            type="number"
            id="exercise"
            placeholder="0"
          />
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Submit
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? 'text-green-800' : 'text-red-600'
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}