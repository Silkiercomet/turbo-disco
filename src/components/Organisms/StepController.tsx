type Props = {
  goToStep: (number: number) => void
}
const StepController = ({goToStep}: Props) => {
  const steps = [1,2,3,4]
  //ask chatgpt why is go to step not a function
  return (
    <div>
      {steps.map((e,i) => <button onClick={() => goToStep(i)}>{e}</button>)}
    </div>
  )
}

export default StepController