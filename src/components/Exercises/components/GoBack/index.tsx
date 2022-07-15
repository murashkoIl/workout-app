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
      </Link>
    </div>
  );
}

export default GoBack;
