type Props = {
  goToStep: (number: number) => void
  step: number
}

const BtnNavigation = ({step, goToStep} : Props) => {
  if(step < 2) return <div>
    <a onClick={() => goToStep(step-1)}>backwards</a>
    <a onClick={() => goToStep(step+1)}>foward</a>
  </div>
  return (
    <div>    <a onClick={() => goToStep(step-1)}>backwards</a>
    <button type="submit" onClick={() => goToStep(step+1)}>foward</button></div>
  )
}

export default BtnNavigation