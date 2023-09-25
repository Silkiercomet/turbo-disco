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
    <Form1 order={order} register={register} errors={errors} />,
    <Form2 order={order} register={register} errors={errors} isYearly={isYearly} OnYearly={OnYearly}/>,
    <Form3 order={order} register={register} errors={errors} isYearly={isYearly}/>,
    <Form4 order={order} errors={errors} />,
  ];
  return (
    <>
      <StepController goToStep={goToStep} onSubmitForm={onSubmitForm} handleSubmit={handleSubmit}/>
      <FormContainer handleSubmit={handleSubmit} onSubmitForm={onSubmitForm}>
        {formsArray[step]}
        <BtnNavigation goToStep={goToStep} step={step}/>
        </FormContainer>
    </>
  );
}

export default App
