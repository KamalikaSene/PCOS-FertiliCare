import React from 'react';

const InstructionsPage = () => {
    return (
        <div className="p-4 bg-blue-200 ">
            <h1 className="text-3xl font-bold mb-4 text-pink-500">PCOS Fertilicare App Instructions</h1>

            {/* For Doctors */}
            <div className="flex flex-wrap items-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4 w-full md:w-3/4">
                    <h2 className="text-xl font-bold mb-2">For Doctors:</h2>
                    <ol className="list-decimal pl-4">
                        <li className="mb-2">
                            <strong>Accessing the Prediction Site:</strong>
                            <ul className="list-disc pl-4">
                                <li>To utilize the risk prediction tool, you must possess a doctor's account within the app.</li>
                                <li>During registration, kindly enter your valid Sri Lanka Medical Council (SLMC) number for verification purposes.</li>
                                <li>Once your account is established, you can freely access the prediction section.</li>
                            </ul>
                        </li>

                        <li className="mb-2">
                            <strong>Utilizing the Prediction Tool:</strong>
                            <ul className="list-disc pl-4">
                                <li>Enter the necessary patient information into the designated fields within the prediction form.</li>
                                <li>Ensure all details are accurate and complete before submitting the form.</li>
                                <li>Upon submission, the app will generate a personalized risk assessment report for the patient.</li>
                            </ul>
                        </li>

                        <li className="mb-2">
                            <strong>Saving and Viewing Results:</strong>
                            <ul className="list-disc pl-4">
                                <li>To save the generated report for future reference, you must be logged into your doctor's account.</li>
                                <li>Saved reports can be easily accessed later through the "View Past Results" section.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="w-full md:w-1/4">
                <img src="Aboutpcos3.jpeg" alt="Doctor" className="rounded-lg w-42 h-32 md:w-58 md:h-48 pl-20"/>
                </div>
            </div>

            {/* For Patients */}
            <div className="flex flex-wrap items-center">
                <div className="bg-green-100 p-4 rounded-lg mb-4 w-full md:w-3/4">
                    <h2 className="text-xl font-bold mb-2">For Patients:</h2>
                    <ol className="list-decimal pl-4">
                        <li className="mb-2">
                            <strong>Viewing Your Results:</strong>
                            <ul className="list-disc pl-4">
                                <li>To access your individual risk assessment report, you need a personal patient account within the app.</li>
                                <li>Register and create your account using a valid email address.</li>
                                <li>Once logged in, you can securely view your risk assessment report and any associated details.</li>
                            </ul>
                        </li>

                        <li className="mb-2">
                            <strong>Maintaining Confidentiality:</strong>
                            <ul className="list-disc pl-4">
                                <li>Your personal information and report are held strictly confidential within the app.</li>
                                <li>Only authorized healthcare professionals can access your data with your explicit consent.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="w-full md:w-1/4">
                <img src="Aboutpcos1.jpeg" alt="Doctor" className="rounded-lg w-42 h-32 md:w-58 md:h-48 pl-20"/>
                </div>
            </div>

            {/* Additional Notes */}
            <div className="flex flex-wrap items-center">
                <div className="bg-yellow-100 p-4 rounded-lg mb-4 w-full md:w-3/4">
                    <h2 className="text-xl font-bold mb-2">Additional Notes:</h2>
                    <ul className="list-disc pl-4">
                        <li>This app is intended for informational purposes only and does not constitute medical advice.</li>
                        <li>Please consult with your healthcare provider for diagnosis, treatment, and personalized guidance.</li>
                        <li>We are committed to continuously improving the app and welcome your feedback.</li>
                        <li>If you have any questions or require further assistance, please don't hesitate to contact our support team.</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                <img src="pcos5.jpeg" alt="Doctor" className="rounded-lg w-42 h-32 md:w-58 md:h-48 pl-20"/>
                </div>
            </div>

        </div>
    );
};

export default InstructionsPage;

