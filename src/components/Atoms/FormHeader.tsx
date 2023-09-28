import styles from "../styles/formheader.module.css"
type Props = {
  title : string,
  subTitle : string
}

const FormHeader = ({title, subTitle} : Props) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </header>
  )
}

export default FormHeader