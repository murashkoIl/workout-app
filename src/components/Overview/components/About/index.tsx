import LogOut from "components/LoginPage/components/LogOut";
import main from "images/main.jpeg";
import styles from "./About.module.scss";

function About() {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className={styles.mainImageWrapper}>
          <LogOut />
          <img src={main} alt="main" />
        </div>
        <div className={styles.mainTitle}>Morning Flexibility Routine</div>
      </div>
    </section>
  );
}

export default About;
