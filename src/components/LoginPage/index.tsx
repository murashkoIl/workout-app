import styles from "./LoginPage.module.scss";
import SignUp from "./SignUp";

function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <SignUp />
    </div>
  );
}

export default LoginPage;
