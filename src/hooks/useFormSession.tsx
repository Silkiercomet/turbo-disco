import { useState } from "react";
import { FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form";

export interface UserFormData {
    name: string;
    email: string;
    phoneNumber: string;
    selectedPlan: string;
    yearlyBillingCycle: boolean;
    selectedAddons: string[]; // Assuming the addons are represented as strings
}

export type UseFormSession = {
    order: UserFormData;
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    onSubmitForm: (e: UserFormData) => void;
    step: number;
    goToStep: (number: number) => void;
}
export type FormsProps = {
    order: UserFormData;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
  }; 
export const useFormSession = () => {
  /* order state */
  const [order, setOrder] = useState<UserFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlan: "",
    yearlyBillingCycle: false,
    selectedAddons: [],
  });

  /* logic of the Form */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmitForm = (e : UserFormData) => {
    setOrder((prev) => ({ ...prev, ...e }));
  };

  /* step controller */
  const [step, setStep] = useState(0);

  const goToStep = (number : number) => {
    console.log(number)
    setStep((prev) => {
        if(number >= 0 && number <= 3){
            return number
        }
        return prev
    });

  };
  return {
    order,
    handleSubmit,
    register,
    errors,
    onSubmitForm,
    step,
    goToStep,
  };
};


