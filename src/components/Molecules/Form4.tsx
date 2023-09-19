
import { UserFormData } from '../../hooks/useFormSession'
type Props = {
    order : UserFormData,
}
const plans : any = {
  arcade : 9,
  advanced : 12,
  pro : 15
}
const checkAddonValue = (addon = "") => addon === "Online services" ? 1 : 2
const Form4 = ({order} : Props) => {
  let totalPlan = 0
  if(order.selectedPlan){
    totalPlan = order.yearlyBillingCycle ? plans[order.selectedPlan] * 10 : plans[order.selectedPlan]
  }
  
  return (
    <>
      {order.selectedAddons && order.selectedAddons.map((e,i) => <div>
        <p>{e} price :</p>
        {checkAddonValue(e)}
      </div>)}
    </>
  )
}

export default Form4