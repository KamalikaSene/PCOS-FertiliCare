import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>

      <p>
      Established in 2024, PCOSFertiliCare is a pioneering initiative designed to enhance guidance for medical practitioners dealing with Polycystic Ovary Syndrome (PCOS) and fertility challenges. This platform focuses on predicting infertility likelihood for individuals with PCOS, empowering doctors to provide more informed and personalized care.
      </p>

      <p>
        PCOSFertiliCare is a proactive step towards revolutionizing the approach to PCOS-related fertility challenges, fostering a collaborative and informed healthcare ecosystem.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li>Understanding and empathizing with PCOS challenges</li>
        <li>Promoting accessibility and inclusivity for diverse users</li>
        <li>Fostering collaboration between patients and healthcare professionals</li>
      </ul>

      <h2>Mission</h2>
      <p>
        At PCOSFertiliCare, our mission is to guide medical professionals and individuals with PCOS through fertility challenges. We're committed to empathy, collaboration, and continuous improvement, aiming to enhance understanding and improve reproductive well-being. Grounded in innovation, privacy, and accessibility, our goal is to empower individuals in navigating their unique fertility journeys with confidence and support.
      </p>

      <p>
        PCOSFertiliCare envisions a future where individuals diagnosed with Polycystic Ovary Syndrome (PCOS) experience empowered and informed reproductive health journeys. We aspire to be a global leader in revolutionizing PCOS-related fertility care, fostering a community where personalized guidance and understanding converge to optimize fertility outcomes.
      </p>

      <h2>Meet Our Team</h2>
      <div className={styles.teamContainer}>
        <Image src="C:\Users\ASUS\PCOSFertilicare\PCOS-FertiliCare\src\app\about\Amaa 1 - cropped.jpg" alt="Member 1" width={100} height={100} />
        <p>Member 1 Name</p>
      </div>

    </div>
  );
};

export default AboutPage;
