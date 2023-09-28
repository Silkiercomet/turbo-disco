import { FieldErrors } from "react-hook-form";

type Props = {
    errors: FieldErrors;
    goToStep: (number: number) => void;
    step: number 
}

const FailureForm = ({goToStep, errors, step} : Props) => {
    let errorsArray: string[] = []
    for(const error in errors){
      errorsArray.push(`${errors[error]?.message}`)
    }
    function handleError(message : string){
      if(message === "Select a plan is required."){
        return <button onClick={() => goToStep(1)}>go to problem</button>
      }
      return <button onClick={() => goToStep(0)}>go to problem</button>
    }
  return (<>
    <h1 className={`form ${step === 3 ? "visible" : "invisible"}`}>
      please complete the form, before getting to this step
    </h1>
    <ul >
      {errorsArray.map((e, i) => <li key={i}>{e}{handleError(e)}</li>)}
    </ul>
    </>
  );
}

export default FailureForm