
// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p className={styles.para}>Contact us regarding any inquiries, concerns or feedback using the form below.
Explore our FAQ section for swift solutions to commonly asked questions.
We value your input and look forward to assisting you!</p>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/contactus.webp" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default ContactPage;
