import React from 'react'
import { FormsProps } from '../../hooks/useFormSession'
import FormHeader from '../Atoms/FormHeader'
import Addon from '../Atoms/Addon'

const Form3 = ({order, register, errors, isYearly} : FormsProps) => {
  
  return (
    <>
    <FormHeader title={"Pick add-ons"} subTitle={"Add-ons help enhance your gaming experience"}/>
    <input type="checkbox" id="onlineService" value={"Online services"} {...register("selectedAddons")}/>
    <label htmlFor="onlineService">
    <Addon title={'Online services'} subtitle={'multiplayer'} billing={'mo'} price={1}/>
    </label>
    <input type="checkbox" id="LargerStorage" value={"Larger storage"} {...register("selectedAddons")}/>
    <label htmlFor="LargerStorage">
    <Addon title={'Larger storage'} subtitle={'more space'} price={2} billing='mo'/>
    </label>

    </>
  )
}

export default Form3