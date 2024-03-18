
import SLMCForm from "@/components/slmcForm/SLMCForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./auth.module.css";

const Doctorauth = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        <SLMCForm/>
      </div>
    </div>
  );
};

export default Doctorauth;