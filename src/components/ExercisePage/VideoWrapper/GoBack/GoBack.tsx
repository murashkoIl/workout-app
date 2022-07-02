import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styles from './GoBack.module.scss';

type GoBackProps = {
  handleGoBackCLick: () => void
}

const GoBack: React.FC<GoBackProps> = ({ handleGoBackCLick }) => {
  return (
    <div className={styles.goback}>
      <Link onClick={handleGoBackCLick} to="/">
        {<FontAwesomeIcon icon={faArrowLeftLong} />} Go Back
      </Link>
    </div>
  )
}

export default GoBack;
