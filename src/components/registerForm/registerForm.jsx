"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder=" enter username" name="username" />
      <input type="email" placeholder=" enter email" name="email" />
      <input type="email" placeholder=" enter SLMC registeration number" name="email" />
      <input type="password" placeholder="enter password" name="password" />
     
      <input
        type="password"
        placeholder="confirm password"
        name="passwordRepeat"
      />
      <button>Sign-Up</button>
      {state?.error}
      <Link href="/login">
        Have an account ? <button>Login</button>
      </Link>
    </form>
  );
};

export default RegisterForm;
