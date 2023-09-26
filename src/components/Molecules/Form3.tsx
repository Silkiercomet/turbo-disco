import { FormsProps } from "../../hooks/useFormSession";
import FormHeader from "../Atoms/FormHeader";
import Addon from "../Atoms/Addon";
import { addonsArray } from "../../utils/utils";

const Form3 = ({ order, register, errors, isYearly, step }: FormsProps) => {
  return (
    <div className={`form ${step === 2 ? "visible" : "invisible"}`}>
      <FormHeader
        title={"Pick add-ons"}
        subTitle={"Add-ons help enhance your gaming experience"}
      />
      <ul>
        {addonsArray.map((e) => (
          <li key={e.id}>
            <input
              className="none"
              type="checkbox"
              id={e.id}
              value={e.valueTitle}
              {...register("selectedAddons")}
            />
            <label htmlFor={e.id}>
              <Addon
                title={e.valueTitle}
                subtitle={e.subtitle}
                price={e.price}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form3;
