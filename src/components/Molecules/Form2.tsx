import {useState} from "react" 
import { FormsProps } from '../../hooks/useFormSession'
import FormHeader from '../Atoms/FormHeader'
import iconAdvanced from "../../assets/icon-advanced.svg"
import PlanDisplay from '../Atoms/PlanDisplay'
import Slider from "../Atoms/Slider"
const Form2 = ({order, register, errors} : FormsProps) => {
  const [isYearly, setOnYearly] = useState<boolean>(order.yearlyBillingCycle)
  const OnYearly = () => setOnYearly((prev) => (!prev))
  return (
    <>
      <FormHeader title={"Select your plan"} subTitle={"You have the option of monthly and yearly billing"}/>
      <input
          className="none"
          type="radio"
          id="arcade"
          /*checked={fullForm.billing["plan"] === "arcade" ? true : false} close */
          {...register("selectedPlan", { required: true })}
          value={"arcade"}
        />
        <label htmlFor="arcade">
          <PlanDisplay image={iconAdvanced} plan='arcade' cost={9} isYearly={isYearly} />
        </label>
        <div>
        <input className="none" type="checkbox" checked={isYearly} {...register("yearlyBillingCycle")} onChange={OnYearly} id="sliderY"/>
        <Slider isYearly={isYearly} />
   
        </div>
    </>
  )
}

export default Form2