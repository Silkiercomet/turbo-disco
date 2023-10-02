import { FormsProps } from "../../hooks/useFormSession";
import FormHeader from "../Atoms/FormHeader";
import { plansArray } from "../../utils/utils";
import PlanDisplay from "../Atoms/PlanDisplay";
import Slider from "../Atoms/Slider";

const Form2 = ({
  order,
  register,
  errors,
  isYearly,
  OnYearly,
  step,
}: FormsProps) => {
  return (
    <div className={`form ${step === 1 ? "visible" : "invisible"}`}>
      <FormHeader
        title={"Select your plan"}
        subTitle={"You have the option of monthly or yearly billing"}
      />
      {errors.selectedPlan && (
        <p className="error">Please select a plan to continue</p>
      )}
      <ul className="plan__list">
        {plansArray.map((e) => (
          <li key={e.id}>
            <input
              type="radio"
              id={e.id}
              className="none plan__input"
              {...register("selectedPlan", {
                required: "Select a plan is required.",
              })}
              value={e.id}
            />
            <label htmlFor={e.id}>
              <PlanDisplay
                image={e.img}
                plan={e.plan}
                cost={e.cost}
                isYearly={isYearly}
              />
            </label>
          </li>
        ))}
      </ul>

      <div>
        <input
          className="sliderinput"
          type="checkbox"
          checked={isYearly}
          {...register("yearlyBillingCycle")}
          onChange={OnYearly}
          id="sliderY"
        />

        <Slider isYearly={isYearly} />
      </div>
    </div>
  );
};

export default Form2;
