/* eslint-disable react/require-default-props */
/* eslint-disable prettier/prettier */
import styles from "./LoginStatusBlock.module.scss";

type LoginStausBlockProps = {
  message: string;
  status?: string; 
};

function LoginStausBlock({ message, status }: LoginStausBlockProps) {
  return (
    <div className={status ? styles.success : styles.error}>{message}</div>
  )
}

export default LoginStausBlock;
