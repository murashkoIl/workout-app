import styles from "./SubmitButton.module.scss";

type SubmitButtonProps = {
  disabled: boolean;
  text: string;
};

function SubmitButton({ disabled, text }: SubmitButtonProps) {
  return (
    <div className={styles.buttonWrapper}>
      <button type="submit" disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
