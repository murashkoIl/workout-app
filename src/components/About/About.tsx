import React from 'react'
import styles from './About.module.scss';
import main from '../../images/main.jpeg';

const About: React.FC = () => {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className={styles.mainImageWrapper}>
          <img src={main} alt="main" />
        </div>
        <div className={styles.mainTitle}>Workout App</div>
      </div>
    </section>
  )
}

export default About;