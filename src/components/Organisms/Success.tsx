import sucessImg from "../../assets/icon-thank-you.svg"
import styles from "../styles/success.module.css"
const Success = () => {
  return (
    <div className={styles.container}>

        <figure>
            <img src={sucessImg} alt="thank you" />
        </figure>
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>

    </div>
  )
}

export default Success