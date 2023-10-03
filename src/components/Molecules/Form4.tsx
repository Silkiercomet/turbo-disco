import { FieldErrors } from "react-hook-form";
import { UserFormData } from "../../hooks/useFormSession";
import {
  checkAddonValue,
  planPrice,
  areAllValuesNotEmpty,
} from "../../utils/utils";
import FormHeader from "../Atoms/FormHeader";
import FailureForm from "./FailureForm";
import styles from "../styles/form4.module.css"

type Props = {
  order: UserFormData;
  errors: FieldErrors;
  step: number;
  goToStep: (number: number) => void
};
// solo cargar todas las forms cuando se llege al step 4

const Form4 = ({ order, errors, step, goToStep }: Props) => {
  console.log(errors.email)
  if (!areAllValuesNotEmpty(order)) {
    return <FailureForm errors={errors} goToStep={goToStep} step={step} />
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
      <ul className={styles.form__list}>
        <li>
          <div>
            <span>{order.selectedPlan} ({monthlyCycle === "yr" ? "Yearly" : "Monthly"})</span>
            <button onClick={() => goToStep(1)}>Change</button>
          </div>
          <span className={styles.price}>
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
                  {e} 
                </p>
                <span className={styles.price}>+${addonValue}/{monthlyCycle}</span>
              </li>
            );
          })}
        <li className={styles.total}>
          <span>Total (per {monthlyCycle === "yr" ? "year" : "month"})</span>
          <span className={styles.price}>
            +${totalPlan}/{monthlyCycle}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Form4;
