import { FormsProps } from '../../hooks/useFormSession'
import FormHeader from '../Atoms/FormHeader'
import styles from "../styles/form1.module.css"
const Form1 = ({order, register, errors, step} : FormsProps) => {

  return (
    <div className={`form ${step=== 0 ? "visible" : "invisible"}`}>
      <FormHeader title={"Personal info"} subTitle={"Please provide your name, email address, and phone number"}/>
      <label className={styles.label} htmlFor="Name">Name {errors.name && <span className='error'>: This field is required</span>}</label>
      <input type="text" className={styles.input__text} defaultValue={order.name} {...register("name", { required: "The name field is required." })} />
      <label className={styles.label} htmlFor="Email">Email {errors.email && <span className='error'>: This field is required</span>}</label>
      <input type="email" inputMode='email' className={styles.input__text} defaultValue={order.email} {...register("email", { required: "The email is required." })}/>
      <label className={styles.label} htmlFor="Phone">Phone Number {errors.phoneNumber && <span className='error'>: This field is required</span>}</label>
      <input type="text" inputMode='tel' className={styles.input__text} defaultValue={order.phoneNumber} {...register("phoneNumber", { required: "The phone number is required." })}/>
    </div>
  )
}

export default Form1