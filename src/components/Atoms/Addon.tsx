import checkmark from "../../assets/icon-checkmark.svg"
import styles from "../styles/addon.module.css"
type Props = {
  title : string,
  subtitle : string,
  price : number,
}
const Addon = ({title, subtitle, price} : Props) => {
  return (
    <div className={styles.addon__container}>
      <figure className={styles.addon__container_img}>
        <img src={checkmark} alt={title} />
      </figure>
      <div className={styles.addon__container_info}>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <p className={styles.addon__container_price}>+${price}/mo</p>
    </div>
  )
}

export default Addon