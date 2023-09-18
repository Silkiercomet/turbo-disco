import { useState } from 'react'
import StepController from './components/Organisms/StepController'
import {UseFormSession, useFormSession} from './hooks/useFormSession'
import FormContainer from './components/Organisms/FormContainer'
import Form1 from './components/Molecules/Form1'
import Form2 from './components/Molecules/Form2'
import Form3 from './components/Molecules/Form3'
import Form4 from './components/Molecules/Form4'


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
  const formsArray = [
    <Form1 order={order} register={register} errors={errors} />,
    <Form2 order={order} register={register} errors={errors} />,
    <Form3 order={order} register={register} errors={errors} />,
    <Form4 order={order} />,
  ];
  return (
    <>
      <StepController goToStep={goToStep}/>
      <FormContainer handleSubmit={handleSubmit} onSubmitForm={onSubmitForm}>{formsArray[step]}</FormContainer>
    </>
  );
}

export default App
