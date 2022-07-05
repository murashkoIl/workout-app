import styles from "./About.module.scss";
import main from "../../../../images/main.jpeg";

function About() {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className={styles.mainImageWrapper}>
          <img src={main} alt="main" />
        </div>
        <div className={styles.mainTitle}>Morning Flexibility Routine</div>
      </div>
    </section>
  );
}

export default About;
