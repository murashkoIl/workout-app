import { Link } from "react-router-dom";
import styles from "./GoBack.module.scss";

type GoBackProps = {
  handleGoBackCLick: () => void;
};

function GoBack({ handleGoBackCLick }: GoBackProps) {
  return (
    <div className={styles.goback}>
      <Link onClick={handleGoBackCLick} to="/">
        Go Back
        <div className={styles.underline} />
      </Link>
    </div>
  );
}

export default GoBack;
