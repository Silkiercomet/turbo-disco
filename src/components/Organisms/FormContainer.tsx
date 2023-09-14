type Props ={
  children: string | JSX.Element | JSX.Element[],
}
const FormContainer = ({children} : Props) => {
  return (
    <div>FormContainer
      {children}
    </div>
  )
}

export default FormContainer