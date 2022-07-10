import React from "react";
import MainButton from "components/Buttons/MainButton";
import styles from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>404</div>
      <span className={styles.text}>
        We couldn`t find the page you`re looking for!
      </span>
      <div className={styles.buttonWrapper}>
        <MainButton text="Go Back" linkTo="/" />
      </div>
    </div>
  );
}

export default NotFoundPage;
