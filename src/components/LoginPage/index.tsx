import styles from "./LoginPage.module.scss";
import SignUp from "./components/SignUp";

function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <SignUp />
    </div>
  );
}

export default LoginPage;
