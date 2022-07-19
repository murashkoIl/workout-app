/* eslint-disable consistent-return */
import { useRef, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import SubmitButton from "components/Buttons/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import InputField from "../InputField";
import LoginErrorBlock from "../LoginStatusBlock";
import styles from "../SignUp/SignUp.module.scss";

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current?.value, passwordRef.current?.value);
      navigate("/");
    } catch (err) {
      setError("Failed to sign in!");
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
          <h2 className={styles.title}>Login</h2>
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
            <div className={styles.forgotPassword}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <SubmitButton text="Login" disabled={loading} />
          </form>
          <div className={styles.link}>
            Need an accoount? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
