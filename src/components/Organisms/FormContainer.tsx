import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form"
import { UserFormData } from "../../hooks/useFormSession"

type Props ={
  children: string | JSX.Element | JSX.Element[],
  handleSubmit: UseFormHandleSubmit<UserFormData>;
  onSubmitForm: SubmitHandler<UserFormData>;
  
}
const FormContainer = ({children, handleSubmit, onSubmitForm} : Props) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
      {children}
      </form>
    </div>
  )
}

export default FormContainer