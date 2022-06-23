import React from 'react'
import styles from './About.module.scss';
import main from '../../../images/main.jpeg';

const About: React.FC = () => {

  console.log('about render');
  

  return (
    <section className="aboutSection">
      <div className="container">
        <div className={styles.mainImageWrapper}>
          <img src={main} alt="main" />
        </div>
        <div className={styles.mainTitle}>Morning Flexibility Routine</div>
      </div>
    </section>
  )
}

export default About;