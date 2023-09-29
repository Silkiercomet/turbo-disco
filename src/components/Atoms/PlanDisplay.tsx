import styles from "../styles/plandisplay.module.css"
type Props = {
  image: string,
  plan: string,
  cost : number,
  isYearly : boolean | undefined
}
const PlanDisplay = ({image, plan, cost, isYearly} : Props) => {

  let price = isYearly ? cost * 10 : cost
  return (
    <div className={styles.plan__container}>
      <img src={image} alt={plan} />
      <p><span className={styles.plan__container_name}>{plan}</span><span className={styles.plan__container_price}>${price}/yr</span>{isYearly && <span>2 free months</span>}</p>
      
    </div>
  )
}

export default PlanDisplay