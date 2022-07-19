import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import { motion } from "framer-motion";
import SubmitButton from "components/Buttons/SubmitButton";
import InputField from "../InputField";
import LoginErrorBlock from "../LoginStatusBlock";
import styles from "../SignUp/SignUp.module.scss";

function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current?.value);
      setMessage("Check your inbox for further instructions");
    } catch (err) {
      setError("Failed to reset password!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
      >
        <div className={styles.cardWrapper}>
          <h2 className={styles.title}>Password Reset</h2>
          {error ? (
            <LoginErrorBlock message={error} />
          ) : (
            <div className={styles.fake} />
          )}
          {message && <LoginErrorBlock status="success" message={message} />}
          <form onSubmit={handleSubmit} className={styles.form} action="submit">
            <InputField title="Email" type="email" reference={emailRef} />
            <div className={styles.forgotPassword}>
              <Link to="/login">Login</Link>
            </div>

            <SubmitButton text="Reset Password" disabled={loading} />
          </form>

          <div className={styles.link}>
            Need an accoount? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;
