import QueryForm from "@/app/Predict-PCOS/QueryForm";

export const metadata = {
  title: "Predict-Page",
  
};


const Predict = () => {

  
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Patient Details Input Query</h1>
      <p>Fill in the input query below with the patient details.</p>
    
      <QueryForm />
    </div>
  );
};

export default Predict;

// const Predict = () => {

  
//   return (
//     <div>hiii</div>
//   );
// };

// export default Predict;