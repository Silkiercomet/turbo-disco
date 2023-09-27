import { UseFormHandleSubmit } from "react-hook-form"
import { UserFormData } from "../../hooks/useFormSession"
import styles from "../styles/stepcontroller.module.css"
type Props = {
  goToStep: (number: number) => void,
  handleSubmit: UseFormHandleSubmit<UserFormData, undefined>,
  onSubmitForm: (e: UserFormData) => void,
}
const StepController = ({goToStep,handleSubmit,onSubmitForm}: Props) => {
  const steps = [1,2,3,4]
  //cuando se llege al ultimo paso se debe agregar el handlesubmit(callback) y el gotostep

  return (
    <div className={styles.container}>
      {steps.map((e,i) => i === 3 ?
      <button onClick={() => {
        handleSubmit(onSubmitForm)()
        goToStep(i)
      }}>{e}</button>
      :
      <button onClick={() => {
        goToStep(i)
      }}>{e}</button>)}
    </div>
  )
}

export default StepController