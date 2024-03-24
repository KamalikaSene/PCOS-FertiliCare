import React from 'react';

const InstructionsPage = () => {
    return (
     
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative mt-6 text-lg leading-8 text-gray-600">
            <div className="bg-cover bg-center text-center overflow-hidden" style={{ minHeight: '500px', backgroundImage: "url('/women.jpg')" }} title="Woman holding a mug">
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                        <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">What is PCOS-FERTILICARE</h1>
                        <p className="text-gray-700 text-xs mt-2">
                        </p>

                        <p className="text-base leading-8 my-5">
                        <div>


            <p className="mt-6 text-lg leading-8 text-gray-600"
            >Welcome to PCOS Fertilicare! This web application is designed to
             aid doctors in predicting the risk of pregnancy complications in 
             patients with PCOS. It also provides patients with a secure platform to
              access their individual risk assessment results.</p>
            <div className="mb-4"></div>
            <h2>For Doctors:</h2>
            <div className="mb-4"></div>
            
               
                <strong>Accessing the Prediction Site:</strong>
                  <ul>
                     <li>To utilize the risk prediction tool, you must possess a doctor's account within the app.</li>
                     <div className="mb-4"></div>
                     <li>During registration, kindly enter your valid Sri Lanka Medical Council (SLMC) number for verification purposes.</li>
                     <div className="mb-4"></div>
                     <li>Once your account is established, you can freely access the prediction section.</li> 
                  </ul> 
                
                <div className="mb-4"></div>
               
                <strong>Utilizing the Prediction Tool:</strong> 
                   <ul>
                      <li>Enter the necessary patient information into the designated fields within the prediction form.</li>
                      <li>Ensure all details are accurate and complete before submitting the form.</li>
                      <li>Upon submission, the app will generate a personalized risk assessment report for the patient.</li>
                  </ul>  
                
                <div className="mb-4"></div>
              
                <strong>Saving and Viewing Results:</strong>
                  <ul>
                     <li>To save the generated report for future reference, you must be logged into your doctor's account.</li>
                     <div className="mb-4"></div>
                     <li>Saved reports can be easily accessed later through the "View Past Results" section.</li>
                 </ul>
             
              <div className="mb-4"></div>
          

            <h2>For Patients:</h2>
            <div className="mb-4"></div>
            
             
              <strong>Viewing Your Results:</strong>
                <ul>
                    <li>To access your individual risk assessment report, you need a personal patient account within the app.</li>
                    <div className="mb-4"></div>
                    <li>Register and create your account using a valid email address.</li>
                    <div className="mb-4"></div>
                    <li>Once logged in, you can securely view your risk assessment report and any associated details.</li>
                </ul>
              
              <div className="mb-4"></div>
              
              <strong>Maintaining Confidentiality:</strong>
                <ul>
                   <li>Your personal information and report are held strictly confidential within the app.</li>
                   <div className="mb-4"></div>
                   <li>Only authorized healthcare professionals can access your data with your explicit consent.</li>
                </ul>
             
            
            <div className="mb-4"></div>
            <h2>Additional Notes:</h2>
            <div className="mb-4"></div>
            <ul>
              <li>This app is intended for informational purposes only and does not constitute medical advice.</li>
              <div className="mb-4"></div>
              <li>Please consult with your healthcare provider for diagnosis, treatment, and personalized guidance.</li>
              <div className="mb-4"></div>
              <li>We are committed to continuously improving the app and welcome your feedback.</li>
              <div className="mb-4"></div>
              <li>If you have any questions or require further assistance, please don't hesitate to contact our support team.</li>
            </ul>

           

        </div>
    
                        </p>

                       

                        <div>
                            <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"> <p>We hope this information helps you navigate the PCOS Fertilicare app effectively!</p></a>
                            
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

    );
};

export default InstructionsPage;

