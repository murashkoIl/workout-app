import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MainButton.module.scss';

type ButtonProps = {
  text: string
  linkTo: string
}

const MainButton: React.FC<ButtonProps> = ({ text, linkTo }) => {
  return (
      <Link className={styles.link} to={linkTo}>
        <div className={styles.buttonWrapper}>
          {text}
        </div>
      </Link>    
  )
}

export default MainButton;