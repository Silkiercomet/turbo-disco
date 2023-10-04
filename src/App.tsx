import { useState } from "react";
import StepController from "./components/Organisms/StepController";
import { useFormSession } from "./hooks/useFormSession";
import FormContainer from "./components/Organisms/FormContainer";
import Form1 from "./components/Molecules/Form1";
import Form2 from "./components/Molecules/Form2";
import Form3 from "./components/Molecules/Form3";
import Form4 from "./components/Molecules/Form4";
import BtnNavigation from "./components/Atoms/BtnNavigation";

function App() {
  const { order, register, errors, step, goToStep } = useFormSession();
  const [success, setSuccess] = useState<boolean>(false)
  const handleSuccess = () => {
    if(errors.name || errors.email || errors.phoneNumber || errors.selectedPlan){
      return
    }
    setSuccess(true)
  }
  const [isYearly, setOnYearly] = useState<boolean>(order.yearlyBillingCycle);
  const OnYearly = () => setOnYearly((prev) => !prev);
  const formsArray = [
    <Form1 order={order} register={register} errors={errors} step={step} />,
    <Form2
      register={register}
      errors={errors}
      isYearly={isYearly}
      OnYearly={OnYearly}
      step={step}
    />,
    <Form3
      register={register}
      step={step}
    />,
    <Form4 order={order} errors={errors} step={step} goToStep={goToStep} />,
  ];

  return (
    <>
      <StepController step={step} goToStep={goToStep} />
      <FormContainer step={step} success={success}>
        {formsArray[0]}
        {formsArray[1]}
        {formsArray[2]}
        {formsArray[3]}
        <BtnNavigation goToStep={goToStep} success={success} step={step} handleSuccess={handleSuccess} screen="desktop" />
      </FormContainer>
      <BtnNavigation goToStep={goToStep} success={success} step={step} handleSuccess={handleSuccess} screen="mobile" />
    </>
  );
}

export default App;
