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
};
// todos los form deben estar presentes para poder usar el objeto errors
// de lo contrario la autenticacion de errores tendra que hacerse manualmente
const Form4 = ({ order, errors }: Props) => {
  if (!areAllValuesNotEmpty(order)) {
    console.log(errors.phoneNumber, 2);
    return <h1>please complete the form, before getting to this step</h1>;
  }
  let totalPlan = 0,
    monthlyCycle = order.yearlyBillingCycle ? "yr" : "mo";
  if (order.selectedPlan) {
    totalPlan += planPrice(order);
  }

  return (
    <>
      <FormHeader
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming"
      />
      <ul>
        <li>
          <div>
            <span>{order.selectedPlan}</span>
            <a href="#">Change</a>
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
    </>
  );
};

export default Form4;
