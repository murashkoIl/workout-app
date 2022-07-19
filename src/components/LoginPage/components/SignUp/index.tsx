/* eslint-disable consistent-return */
import { useRef, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import SubmitButton from "components/Buttons/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import InputField from "../InputField";
import LoginErrorBlock from "../LoginStatusBlock";
import styles from "./SignUp.module.scss";

function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <motion.div
        initial={{ width: -100 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
      >
        <div className={styles.cardWrapper}>
          <h2 className={styles.title}>Sign Up</h2>
          {error ? (
            <LoginErrorBlock message={error} />
          ) : (
            <div className={styles.fake} />
          )}
          <form onSubmit={handleSubmit} className={styles.form} action="submit">
            <InputField title="Email" type="email" reference={emailRef} />
            <InputField
              title="Password"
              type="password"
              reference={passwordRef}
            />
            <InputField
              title="Password Confirmation"
              type="password"
              reference={passwordConfirmRef}
            />

            <SubmitButton text="Sign Up" disabled={loading} />
          </form>
          <div className={styles.link}>
            Already have an accoount? <Link to="/login">Log In</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SignUp;
