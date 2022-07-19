import React from "react";
import styles from "./LoginPageError.module.scss";

type LoginErrorBlockProps = {
  error: string;
};

function LoginErrorBlock({ error }: LoginErrorBlockProps) {
  return <div className={styles.error}>{error}</div>;
}

export default LoginErrorBlock;
