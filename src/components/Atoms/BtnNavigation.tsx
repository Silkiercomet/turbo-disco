import styles from "../styles/navigationbtn.module.css";
type Props = {
  goToStep: (number: number) => void;
  step: number;
  screen: string;
  handleSuccess: () => void
  success: boolean
};

const BtnNavigation = ({ step, goToStep, screen, handleSuccess, success }: Props) => {
    if(!success){
      return (
        <div className={`${styles.container} ${screen === "desktop"? styles.desktop : styles.mobile}`}>
          {step > 0 && (
            <a className={styles.back} onClick={() => goToStep(step - 1)}>
              Go Back
            </a>
          )}
          {step === 3 
          ? <a className={styles.finalbtn} onClick={() => handleSuccess()}>Confirm</a> 
          : <a className={styles.left} onClick={() => goToStep(step + 1)}>Next Step</a>}
        </div>
      );
    }


};

export default BtnNavigation;
