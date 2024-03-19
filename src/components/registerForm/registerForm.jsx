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
  const [success, setSuccess] = useState('')

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 8 characters, at least one letter or one digit is required');
      return;
    }

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

    const data = await res.json();
    if(res.ok){
      setError(null)
      console.log("Registration successful");
      setSuccess("Registration successful")
      router.push("/login");
    }else{
      setError(data.message);
      setSuccess(null)
    }
   
  }

  

  return (
    <form onSubmit = {handleSubmit} className={styles.form} action={formAction}>
      <input onChange = {(e) => setUsername(e.target.value)}
      value={username}
      type="text" placeholder=" enter username" name="username" />

      <input onChange = {(e) => setEmail(e.target.value)}
      value={email}type="email" placeholder=" enter email" name="email" />

      <input onChange = {(e) => setregistrationNumber(parseInt(e.target.value))}
      value={registrationNumber}type="text" placeholder=" enter the SLMC registeration number" name="number" />

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
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <Link href="/login">
        Have an account ? <button>Login</button>
      </Link>
    </form>
  );
};

export default RegisterForm;
