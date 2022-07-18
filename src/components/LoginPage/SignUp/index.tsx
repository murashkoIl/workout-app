import MainButton from "components/Buttons/MainButton";
import { useRef } from "react";
import { useAuth } from "contexts/AuthContext";
import styles from "./SignUp.module.scss";

function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup(emailRef.current?.value, passwordRef.current?.value);
  };

  return (
    <div className="container">
      <div className={styles.cardWrapper}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className={styles.form} action="submit">
          <div className={styles.wrapper}>
            <span className={styles.text}>Email</span>
            <div className={styles.input}>
              <input type="email" ref={emailRef} />
            </div>
          </div>

          <div className={styles.wrapper}>
            <span className={styles.text}>Password</span>
            <div className={styles.input}>
              <input type="password" ref={passwordRef} />
            </div>
          </div>

          <div className={styles.wrapper}>
            <span className={styles.text}>Password Confirmation</span>
            <div className={styles.input}>
              <input type="password" ref={passwordConfirmRef} />
            </div>
          </div>

          <div className="buttonWrapper">
            <MainButton text="Sign Up" linkTo="/" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div>Already have an accoount? Log In</div>
      </div>
    </div>
  );
}

export default SignUp;
