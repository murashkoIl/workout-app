/* eslint-disable consistent-return */
import { useRef, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import SubmitButton from "components/Buttons/SubmitButton";
import InputField from "../InputField";
import LoginErrorBlock from "../LoginPageError";
import styles from "./SignUp.module.scss";

function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value);
    } catch (err) {
      setError("Failed to create an account!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className={styles.cardWrapper}>
        <h2 className={styles.title}>Sign Up</h2>
        {error ? (
          <LoginErrorBlock error={error} />
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

          <SubmitButton disabled={loading} />
        </form>
        <div>Already have an accoount? Log In</div>
      </div>
    </div>
  );
}

export default SignUp;
