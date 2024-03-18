"use client";
import { useState } from "react";
import styles from "./loginForm.module.css";
import Link from "next/link";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      setSuccess("Login successful!"); // Set success message on successful login
      // Handle successful login (e.g., store token in localStorage)
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}

      <Link href="/register">
        {"Dont have an account?"} <button>Sign-up</button>
      </Link>
    </form>
  );
};

export default LoginForm;

