import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        
      <div>
      
        <p className={styles.desc}>
        <h1 className={styles.title}>
        ABOUT US
        </h1>
        <div>
         Established in 2024, PCOSFertiliCare is a pioneering initiative 
         designed to enhance guidance for medical practitioners dealing with 
         Polycystic Ovary Syndrome (PCOS) and fertility challenges. This platform focuses on 
         predicting infertility likelihood for individuals with PCOS, empowering
         doctors to provide more informed and personalized care.
         </div>
         <div >PCOSFertiliCare is a proactive step towards revolutionizing 
         the approach to PCOS-related fertility challenges, fostering 
         a collaborative and informed healthcare ecosystem.</div>
         </p>
        </div>

        <div className={styles.values}>
         <h1>Our Values</h1>
         <div className={styles.teamMember}>
         <div >
          <img src="/nursepic.jpg" alt="Image 1" className={styles.image1} />
          </div>
          <div className={styles.memberText}>
            <p><div>Empathizing with PCOS</div> Challenges</p>
           </div>
         </div>
          <div className={styles.teamMember}>
          <div>
           <img src="/nursepic.jpg" alt="Image 2" className={styles.image1} />
          </div>
           <div className={styles.memberText}>
            <p><div>Promoting Accesibility</div> for diverse users</p>
         </div>
       </div>
        <div className={styles.teamMember}>
         <div>
          <img src="/nursepic.jpg" alt="Image 1" className={styles.image1} />
          </div>
          <div className={styles.memberText}>
            <p><div>Fostering Collaberations between</div> patients and 
              healthcare professionals
               </p>
           </div>
         </div>
        </div>

        <div className={styles.mission}>
          <div>
          <h1>Our Mission</h1>
          </div>
            <div className={styles.paradiv}>
             <p >
             At PCOSFertiliCare, our mission is to guide medical professionals 
             and individuals with PCOS through fertility challenges. 
             We're committed to empathy, collaboration and continuous improvement,
              aiming to enhance understanding and improve reproductive well-being. 
              Grounded in innovation, privacy and accessibility, our goal is to 
              empower individuals in navigating their unique fertility journeys 
              with confidence and support.
             </p>
          </div>
        </div>
        <div className={styles.mission}>
            <div className={styles.paradiv}>
             <p >
             PCOSFertiliCare envisions a future where individuals diagnosed with 
             Polycystic Ovary Syndrome (PCOS) experience empowered and informed 
             reproductive health journeys. We aspire to be a global leader in revolutionizing 
             PCOS-related fertility care, fostering a community where personalized guidance and 
             understanding converge to optimize fertility outcomes.
             </p>
          </div>
          <div>
          <h1>Our Vision</h1>
          </div>
        </div>
        
        <div className={styles.ourteam}>
         <h1>Meet our Team</h1>
         <div className={styles.teamMember}>
         <div>
          <img src="/nursepic.jpg" alt="Image 1" className={styles.image2} />
          </div>
          <div className={styles.memberText}>
            <p>Kamalika</p>
           </div>
         </div>
          <div className={styles.teamMember}>
          <div>
           <img src="/nursepic.jpg" alt="Image 2" className={styles.image2} />
          </div>
           <div className={styles.memberText}>
            <p>Ranuga</p>
         </div>
       </div>
        <div className={styles.teamMember}>
         <div>
          <img src="/nursepic.jpg" alt="Image 1" className={styles.image2} />
          </div>
          <div className={styles.memberText}>
            <p>Isiri</p>
           </div>
         </div>
          <div className={styles.teamMember}>
          <div>
           <img src="/nursepic.jpg" alt="Image 2" className={styles.image2} />
          </div>
           <div className={styles.memberText}>
            <p>Amaa</p>
         </div>
        </div>
        <div className={styles.teamMember}>
          <div>
           <img src="/nursepic.jpg" alt="Image 2" className={styles.image2} />
          </div>
           <div className={styles.memberText}>
            <p>Thevindu</p>
         </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default AboutPage;
