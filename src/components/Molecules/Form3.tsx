import { UserFormData } from "../../hooks/useFormSession";
import FormHeader from "../Atoms/FormHeader";
import Addon from "../Atoms/Addon";
import { addonsArray } from "../../utils/utils";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<UserFormData>,
  step: number
}

const Form3 = ({ register, step }: Props) => {
  return (
    <div className={`form ${step === 2 ? "visible" : "invisible"}`}>
      <FormHeader
        title={"Pick add-ons"}
        subTitle={"Add-ons help enhance your gaming experience"}
      />
      <ul className="addon__list">
        {addonsArray.map((e) => (
          <li key={e.id}>
            <input
              className="none addon__input"
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
