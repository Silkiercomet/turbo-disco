import styles from "../styles/stepcontroller.module.css";
type Props = {
  goToStep: (number: number) => void;
  step: number;
};
const StepController = ({ goToStep, step }: Props) => {
  const steps = [1, 2, 3, 4];
  //cuando se llege al ultimo paso se debe agregar el handlesubmit(callback) y el gotostep
  const desktopArray = ["Your info", "Select plan", "Add-ons", "Summary"];
  return (
    <div className={styles.container}>
      {steps.map((e, i) => (
        <div key={i} className={styles.container__item}>
          <button
            className={i === step ? `${styles.active}` : ""}
            onClick={() => {
              goToStep(i);
            }}
          >
            {e}
          </button>
          <div className={styles.desktop}>
            <p>STEP {e}</p>
            <p>{desktopArray[e - 1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepController;
