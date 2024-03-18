"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const [username,setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [registrationNumber, setregistrationNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState([])

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const res = await fetch('http://localhost:4000/auth/signup', {
      method : "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        registrationNumber,
        password,
        confirmPassword
      })
    })

    const {msg} = await res.json();
    setError(msg)
    console.log(error)
  }

  

  return (
    <form onSubmit = {handleSubmit} className={styles.form} action={formAction}>
      <input onChange = {(e) => setUsername(e.target.value)}
      value={username}
      type="text" placeholder=" enter username" name="username" />

      <input onChange = {(e) => setEmail(e.target.value)}
      value={email}type="email" placeholder=" enter email" name="email" />

      <input onChange = {(e) => setregistrationNumber(e.target.value)}
      value={registrationNumber}type="text" placeholder=" enter the SLMC registeration number" name="email" />

      <input onChange = {(e) => setPassword(e.target.value)}
      value={password}type="password" placeholder="enter password" name="password" />
     
      <input
        onChange = {(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
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
