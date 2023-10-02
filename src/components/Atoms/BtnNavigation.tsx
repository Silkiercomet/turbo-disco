import styles from "../styles/navigationbtn.module.css";
type Props = {
  goToStep: (number: number) => void;
  step: number;
  screen: string
};

const BtnNavigation = ({ step, goToStep, screen }: Props) => {

    return (
      <div className={`${styles.container} ${screen === "desktop"? styles.desktop : styles.mobile}`}>
        {step > 0 && (
          <a className={styles.back} onClick={() => goToStep(step - 1)}>
            Go Back
          </a>
        )}
        <a className={styles.left} onClick={() => goToStep(step + 1)}>Next Step</a>
      </div>
    );

};

export default BtnNavigation;
