type Props = {
  title : string,
  subTitle : string
}

const FormHeader = ({title, subTitle} : Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default FormHeader