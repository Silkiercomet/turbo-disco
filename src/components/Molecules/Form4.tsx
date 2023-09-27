import { FieldErrors } from "react-hook-form";
import { UserFormData } from "../../hooks/useFormSession";
import {
  checkAddonValue,
  planPrice,
  areAllValuesNotEmpty,
} from "../../utils/utils";
import FormHeader from "../Atoms/FormHeader";
type Props = {
  order: UserFormData;
  errors: FieldErrors;
  step: number;
  goToStep: (number: number) => void
};
// solo cargar todas las forms cuando se llege al step 4

const Form4 = ({ order, errors, step, goToStep }: Props) => {
  if (!areAllValuesNotEmpty(order)) {
      let errorsArray: string[] = []
      for(const error in errors){
        errorsArray.push(`${errors[error]?.message}`)
      }
      function handleError(message : string){
        if(message === "Select a plan is required"){
          return <button onClick={() => goToStep(1)}>go to problem</button>
        }
        return <button onClick={() => goToStep(0)}>go to problem</button>
      }
    return (<>
      <h1 className={`form ${step === 3 ? "visible" : "invisible"}`}>
        please complete the form, before getting to this step
      </h1>
      <ul>
        {errorsArray.map((e, i) => <li key={i}>{e}{handleError(e)}</li>)}
      </ul>
      </>
    );
  }
  let totalPlan = 0,
    monthlyCycle = order.yearlyBillingCycle ? "yr" : "mo";
  if (order.selectedPlan) {
    totalPlan += planPrice(order);
  }

  return (
    <div className={`form ${step === 3 ? "visible" : "invisible"}`}>
      <FormHeader
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming"
      />
      <ul>
        <li>
          <div>
            <span>{order.selectedPlan}</span>
            <button onClick={() => goToStep(1)}>Change</button>
          </div>{" "}
          <span>
            ${planPrice(order)}/{monthlyCycle}
          </span>
        </li>
        {order.selectedAddons &&
          order.selectedAddons.map((e, i) => {
            let addonValue = checkAddonValue(e, order.yearlyBillingCycle);
            totalPlan += addonValue;
            return (
              <li key={i}>
                <p>
                  {e} price : +${addonValue}/{monthlyCycle}
                </p>
              </li>
            );
          })}
        <li>
          <span>Total (per {monthlyCycle === "yr" ? "year" : "month"})</span>
          <span>
            +${totalPlan}/{monthlyCycle}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Form4;
