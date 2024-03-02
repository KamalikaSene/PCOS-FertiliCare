import Image from "next/image";
import styles from "./Aboutpcos.module.css";

const AboutPage = () => {
  return (
    <div className="bg-green-200"> {/* Change bg-gray-100 to your desired background color */}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title} >
            Learn More About PCOS
          </h1>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg text-center ml-5">
            <p className="text-lg">
              PCOS or Polycystic Ovary Syndrome, is a prevalent hormonal condition affecting 
              women in their late teens or early twenties. 
              It is characterized by hyperandrogenism (elevated male hormones causing ovarian cysts), 
              anovulation (irregular or absent ovulation), and the presence 
              of multiple fluid-filled sacs on the ovaries.
            </p>
          </div>
           
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg text-center ml-5">
            <h2 className="text-2xl font-bold text-blue-500">Types of PCOS</h2>
            <ol className="list-decimal list-inside">
              <li className="py-2 border-b border-gray-200">Insulin-resistant PCOS - Elevated insulin levels.</li>
              <li className="py-2 border-b border-gray-200">Inflammatory PCOS - Chronic inflammation exacerbating symptoms.</li>
              <li className="py-2 border-b border-gray-200">Hidden-cause PCOS - Triggered by stress, environment, or genetics.</li>
              <li className="py-2 border-b border-gray-200">Pill-induced PCOS - Resulting from progestin in birth control pills, disrupting hormone balance.</li>
            </ol>
          </div>


          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center ml-5">
            <h2 className="text-2xl font-bold mb-4">PCOS Statistics</h2>
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-lg font-bold">1 in 12 individuals</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">4-8% individuals of childbearing age globally</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">31.3% Asian individuals</p>
              </div>
            </div>
          </div>
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg text-center ml-5">
            <h2 className="text-2xl font-bold mb-4">What Causes PCOS</h2>
            <p className="mb-4">PCOS can result from elevated androgen levels, leading to the accumulation of abdominal and visceral fat, fostering insulin resistance and amplifying androgen production, fueling the progression of PCOS and its symptoms.</p>

            <h2 className="text-2xl font-bold mb-4">Challenges Faced by Individuals with PCOS</h2>
            <ul className="list-none text-center">
              <li className="my-2">Infertility</li>
              <li className="my-2">Obesity</li>
              <li className="my-2">Type 2 diabetes</li>
              <li className="my-2">Cardiovascular diseases</li>
              <li className="my-2">Miscarriages</li>
              <li className="my-2">Breast cancer</li>
              <li className="my-2">Anxiety</li>
              <li className="my-2">Eating disorders</li>
            </ul>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg text-center ml-5">
            <h2 className="text-2xl font-bold mb-4">In-depth Exploration of PCOS Impact on Fertility</h2>
            <p className="mb-4">PCOS, identified by the World Health Organization as a primary cause of anovulation, significantly contributes to infertility, affecting 70-80% of women with anovulatory infertility.</p>
            <p className="mb-4">The intricate nature of PCOS, marked by challenges in diagnosis, particularly highlights infertility as a distinctive complication linked to ovarian development.</p>
            <p className="mb-4">In a normal ovary, the follicle cycle completes, but in polycystic ovaries, follicle development halts, resulting in multiple immature follicles and contributing to infertility. Hormonal imbalances in PCOS disrupt regular ovulation, causing irregular menstruation, anovulation, and lower-quality eggs, hindering conception.</p>
            <p>PCOS-related disorders like insulin resistance and androgen excess further exacerbate infertility issues in affected individuals globally.</p>
          </div>
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg text-center ml-5">
            <h2 className="text-2xl font-bold mb-4">Statistical Information on PCOS and Fertility</h2>
            <div className="flex justify-around">
            <div className="flex justify-around">
            <div className="mx-4 text-white">
                <p className="text-lg ">7 out of 10 individuals with PCOS are affected by anovulatory infertility</p>
              </div>
              <div className="mx-4 text-white">
                <p className="text-lg ">4.5 times higher likelihood of infertility in women with PCOS</p>
              </div>
              <div className="mx-4 text-white">
                <p className="text-lg ">70% of cases among 25% of couples experiencing fertility challenges are due to PCOS</p>
              </div>
            </div>
            </div>
          </div>
          <div className="bg-orange-200 p-6 rounded-lg shadow-lg text-center ml-5">
            <h2 className="text-2xl font-bold mb-4">The Importance of Early Diagnosis</h2>
            <p className="mb-4">Pre-treatment risk assessment is vital to prevent negative outcomes and recognizing the higher risk allows for implementing preventive measures to mitigate potential severe outcomes such as spontaneous abortion, risk of miscarriage, etc.</p>
            <p className="mb-4">Thus, analyzing and understanding a PCOS patient's risk of becoming infertile would directly impact the individual’s fertility and reproductive health with relation to PCOS.</p>
            <p>Therefore, communicating the risk regarding these possible effects and where appropriate, prevention methods and treatment, should dominate the conversation between the clinician and the patient.</p>
          </div>


  
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/Aboutpcos2.jpeg"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;