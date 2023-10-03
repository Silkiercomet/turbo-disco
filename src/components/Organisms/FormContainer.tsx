import { useEffect, useRef } from "react";
import styles from "../styles/formcontainer.module.css"
import Success from "./Success";
type Props = {
  children: JSX.Element | JSX.Element[] | string;
  step: number;
  success: boolean;
};


const FormContainer = ({
  children,
  step,
  success
}: Props) => {

  const formContainerRef = useRef<any>(null);

  useEffect(() => {
    if (formContainerRef.current) {
      let formRef: HTMLElement | null = formContainerRef.current;
      formRef?.classList.add("hidden");
      const timeoutId = setTimeout(() => {
        formRef?.classList.remove("hidden");
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [step]);

  if(success){
    return     <main className={`${styles.container} ${styles.final}`}>
      <Success />
    </main>
  }
  return (
    <main className={styles.container}>
      <form
        ref={formContainerRef}
        className={`form__container`}
      >
        {children}
      </form>
    </main>
  );
};

export default FormContainer;
