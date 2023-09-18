
type Props = {
  image: string,
  plan: string,
  cost : number,
  isYearly : boolean
}
const PlanDisplay = ({image, plan, cost, isYearly} : Props) => {

  let price = isYearly ? cost * 10 : cost
  return (
    <div>
      <img src={image} alt={plan} />
      <p>${price}/yr</p>
      {isYearly && <p>2 free months</p>}
    </div>
  )
}

export default PlanDisplay