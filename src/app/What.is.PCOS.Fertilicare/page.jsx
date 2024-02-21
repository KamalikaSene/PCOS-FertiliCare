import React from 'react';

const InstructionsPage = () => {
    return (
        <div>
            <h1>PCOS Fertilicare App Instructions</h1>

            <p>Welcome to PCOS Fertilicare! This web application is designed to aid doctors in predicting the risk of pregnancy complications in patients with PCOS. It also provides patients with a secure platform to access their individual risk assessment results.</p>

            <h2>For Doctors:</h2>

            <ol>
                <li>
                <strong>Accessing the Prediction Site:</strong>
                  <ul>
                     <li>To utilize the risk prediction tool, you must possess a doctor's account within the app.</li>
                     <li>During registration, kindly enter your valid Sri Lanka Medical Council (SLMC) number for verification purposes.</li>
                     <li>Once your account is established, you can freely access the prediction section.</li> 
                  </ul> 
                </li>

                <li>
                <strong>Utilizing the Prediction Tool:</strong> 
                   <ul>
                      <li>Enter the necessary patient information into the designated fields within the prediction form.</li>
                      <li>Ensure all details are accurate and complete before submitting the form.</li>
                      <li>Upon submission, the app will generate a personalized risk assessment report for the patient.</li>
                  </ul>  
                </li>

                <li>
                <strong>Saving and Viewing Results:</strong>
                  <ul>
                     <li>To save the generated report for future reference, you must be logged into your doctor's account.</li>
                     <li>Saved reports can be easily accessed later through the "View Past Results" section.</li>
                 </ul>
              </li>

            </ol>

            <h2>For Patients:</h2>

            <ol>
              <li>
              <strong>Viewing Your Results:</strong>
                <ul>
                    <li>To access your individual risk assessment report, you need a personal patient account within the app.</li>
                    <li>Register and create your account using a valid email address.</li>
                    <li>Once logged in, you can securely view your risk assessment report and any associated details.</li>
                </ul>
              </li>

              <li>
              <strong>Maintaining Confidentiality:</strong>
                <ul>
                   <li>Your personal information and report are held strictly confidential within the app.</li>
                   <li>Only authorized healthcare professionals can access your data with your explicit consent.</li>
                </ul>
             </li>
            </ol>

            <h2>Additional Notes:</h2>

            <ul>
              <li>This app is intended for informational purposes only and does not constitute medical advice.</li>
              <li>Please consult with your healthcare provider for diagnosis, treatment, and personalized guidance.</li>
              <li>We are committed to continuously improving the app and welcome your feedback.</li>
              <li>If you have any questions or require further assistance, please don't hesitate to contact our support team.</li>
            </ul>

            <p>We hope this information helps you navigate the PCOS Fertilicare app effectively!</p>

        </div>
    );
};

export default InstructionsPage;