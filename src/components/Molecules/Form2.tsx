import { FormsProps } from '../../hooks/useFormSession'
import FormHeader from '../Atoms/FormHeader'
import iconArcade from "../../assets/icon-arcade.svg"
import iconAdvanced from "../../assets/icon-advanced.svg"
import iconPro from "../../assets/icon-pro.svg"
import PlanDisplay from '../Atoms/PlanDisplay'
import Slider from "../Atoms/Slider"
const Form2 = ({order, register, errors, isYearly, OnYearly} : FormsProps) => {

  return (
    <>
      <FormHeader title={"Select your plan"} subTitle={"You have the option of monthly and yearly billing"}/>
      <input
          type="radio"
          id="arcade"
          /*checked={fullForm.billing["plan"] === "arcade" ? true : false} close */
          {...register("selectedPlan", { required: true })}
          value={"arcade"}
        />
      <input
          type="radio"
          id="advanced"
          /*checked={fullForm.billing["plan"] === "advanced" ? true : false} close */
          {...register("selectedPlan", { required: true })}
          value={"advanced"}
        />
      <input
          type="radio"
          id="pro"
          /*checked={fullForm.billing["plan"] === "pro" ? true : false} close */
          {...register("selectedPlan", { required: true })}
          value={"pro"}
        />
        <label htmlFor="arcade">
          <PlanDisplay image={iconArcade} plan='Arcade' cost={9} isYearly={isYearly} />
        </label>
        <label htmlFor="advanced">
          <PlanDisplay image={iconAdvanced} plan='Advanced' cost={12} isYearly={isYearly} />
        </label>
        <label htmlFor="pro">
          <PlanDisplay image={iconPro} plan='Pro' cost={15} isYearly={isYearly} />
        </label>

        <div>
        <input className="non" type="checkbox" checked={isYearly} {...register("yearlyBillingCycle")} onChange={OnYearly} id="sliderY"/>
        <Slider isYearly={isYearly} />
        </div>
    </>
  )
}

export default Form2