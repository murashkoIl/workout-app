import { motion } from "framer-motion";
import MainButton from "components/Buttons/MainButton";
import styles from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className={styles.title}>404</div>
      <span className={styles.text}>
        We couldn`t find the page you`re looking for!
      </span>
      <div className={styles.buttonWrapper}>
        <MainButton text="Go Back" linkTo="/login" />
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
