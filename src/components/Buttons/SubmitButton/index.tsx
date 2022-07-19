import styles from "./SubmitButton.module.scss";

type SubmitButtonProps = {
  disabled: boolean;
};

function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <div className={styles.buttonWrapper}>
      <button type="submit" disabled={disabled}>
        Sign Up
      </button>
    </div>
  );
}

export default SubmitButton;
