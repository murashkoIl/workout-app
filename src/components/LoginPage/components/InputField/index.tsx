import { RefObject } from "react";
import styles from "./InputField.module.scss";

type InputFieldProps = {
  title: string;
  type: string;
  reference: RefObject<HTMLInputElement>;
};

function InputField({ title, type, reference }: InputFieldProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{title}</span>
      <div className={styles.input}>
        <input type={type} ref={reference} />
      </div>
    </div>
  );
}

export default InputField;
