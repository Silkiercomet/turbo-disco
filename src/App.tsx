import { useState } from 'react'
import StepController from './components/Organisms/StepController'
import { useFormSession} from './hooks/useFormSession'
import FormContainer from './components/Organisms/FormContainer'
import Form1 from './components/Molecules/Form1'
import Form2 from './components/Molecules/Form2'
import Form3 from './components/Molecules/Form3'
import Form4 from './components/Molecules/Form4'
import BtnNavigation from './components/Atoms/BtnNavigation'


function App() {
  const {
    order,
    handleSubmit,
    register,
    errors,
    onSubmitForm,
    step,
    goToStep,
  } = useFormSession();

  const [isYearly, setOnYearly] = useState<boolean>(order.yearlyBillingCycle)
  const OnYearly = () => setOnYearly((prev) => (!prev))
  const formsArray = [
    <Form1 order={order} register={register} errors={errors} step={step}/>,
    <Form2 order={order} register={register} errors={errors} isYearly={isYearly} OnYearly={OnYearly} step={step}/>,
    <Form3 order={order} register={register} errors={errors} isYearly={isYearly} step={step}/>,
    <Form4 order={order} errors={errors} step={step} goToStep={goToStep}/>
  ];

  return (
    <>
      <StepController step={step} goToStep={goToStep} onSubmitForm={onSubmitForm} handleSubmit={handleSubmit}/>
      <FormContainer handleSubmit={handleSubmit} onSubmitForm={onSubmitForm} step={step}>
        {formsArray[0]}
        {formsArray[1]}
        {formsArray[2]}
        {formsArray[3]}
        <BtnNavigation goToStep={goToStep} step={step} screen="desktop"/>
        </FormContainer>
        <BtnNavigation goToStep={goToStep} step={step} screen="mobile"/>
    </>
  );
}

export default App
