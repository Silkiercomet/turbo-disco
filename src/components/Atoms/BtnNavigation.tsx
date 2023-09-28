import styles from "../styles/navigationbtn.module.css";
type Props = {
  goToStep: (number: number) => void;
  step: number;
};

const BtnNavigation = ({ step, goToStep }: Props) => {
  if (step < 2)
    return (
      <div className={styles.container}>
        {step > 0 && (
          <a className={styles.back} onClick={() => goToStep(step - 1)}>
            Go Back
          </a>
        )}
        <a className={styles.left} onClick={() => goToStep(step + 1)}>Next Step</a>
      </div>
    );
  return (
    <div className={styles.container}>

      <a className={styles.back} onClick={() => goToStep(step - 1)}>
        Go Back
      </a>
      <button  type="submit" onClick={() => goToStep(step + 1)}>
        Next Step
      </button>
    </div>
  );
};

export default BtnNavigation;
