import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { UserFormData } from "../../hooks/useFormSession";
import { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  handleSubmit: UseFormHandleSubmit<UserFormData>;
  onSubmitForm: SubmitHandler<UserFormData>;
  step: number;
};
const FormContainer = ({
  children,
  handleSubmit,
  onSubmitForm,
  step,
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
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        ref={formContainerRef}
        className={`form__container`}
      >
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
