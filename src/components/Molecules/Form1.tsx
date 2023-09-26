import React from 'react'
import { FormsProps } from '../../hooks/useFormSession'
import FormHeader from '../Atoms/FormHeader'
const Form1 = ({order, register, errors, step} : FormsProps) => {

  return (
    <div className={`form ${step=== 0 ? "visible" : "invisible"}`}>
      <FormHeader title={"Personal info"} subTitle={"Please provide your name, email address, and phone number"}/>
      <label htmlFor="Name">Name</label>
      <input type="text" className='input__text' defaultValue={order.name} {...register("name", { required: true })} />
      <label htmlFor="Email">Email</label>
      <input type="email" inputMode='email' className='input__text' defaultValue={order.email} {...register("email", { required: true })}/>
      <label htmlFor="Phone">Phone Number</label>
      <input type="text" inputMode='tel' className='input__text' defaultValue={order.phoneNumber} {...register("phoneNumber", { required: true })}/>
    </div>
  )
}

export default Form1