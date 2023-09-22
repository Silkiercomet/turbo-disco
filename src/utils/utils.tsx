import { UserFormData } from "../hooks/useFormSession";

const plans : any = {
    arcade : 9,
    advanced : 12,
    pro : 15
  }

export function areAllValuesNotEmpty(obj: Record<string, any>): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value === null || value === undefined || value === '') {
          return false;
        }
      }
    }
    return true;
  }

export const checkAddonValue = (addon = "", isYearly : boolean) => {
    let total = 0
    if(addon === "Online services"){
        total += 1
    }else{
        total += 2
    }
    return isYearly ? total * 10 : total
}

export const planPrice = (order : UserFormData) => order.yearlyBillingCycle ? plans[order.selectedPlan] * 10 : plans[order.selectedPlan]