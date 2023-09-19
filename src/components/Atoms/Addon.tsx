import checkmark from "../../assets/icon-checkmark.svg"
type Props = {
  title : string,
  subtitle : string,
  price : number,
  billing : string
}
const Addon = ({title, subtitle, price, billing} : Props) => {
  return (
    <div>
      <figure>
        <img src={checkmark} alt={title} />
      </figure>
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <p>+${price}/{billing}</p>
    </div>
  )
}

export default Addon