import checkmark from "../../assets/icon-checkmark.svg"
type Props = {
  title : string,
  subtitle : string,
  price : number,
}
const Addon = ({title, subtitle, price} : Props) => {
  return (
    <div className="addon">
      <figure>
        <img src={checkmark} alt={title} />
      </figure>
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <p>+${price}/mo</p>
    </div>
  )
}

export default Addon