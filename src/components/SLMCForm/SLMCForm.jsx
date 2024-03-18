"use client";

import { login } from "@/lib/action";
import styles from "./doctor.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const SLMCForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="password" placeholder="Enter SLMC Registaration number" name="password" />
      <button>Authinticate</button>
    </form>
  );
};

export default SLMCForm;