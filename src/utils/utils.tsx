import { UserFormData } from "../hooks/useFormSession";
import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";

  export const plansArray = [
    {
      id: "arcade",
      img: iconArcade,
      plan: "Arcade",
      cost: 9,
    },
    {
      id: "advanced",
      img: iconAdvanced,
      plan: "Advanced",
      cost: 12,
    },
    {
      id: "pro",
      img: iconPro,
      plan: "Pro",
      cost: 15,
    },
  ];
export const addonsArray = [
    {
      id: "onlineService",
      valueTitle: "Online services",
      subtitle: "Access to multiplayer game",
      price: 1,
    },
    {
      id: "LargerStorage",
      valueTitle: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: "CustomProfile",
      valueTitle: "Customizable profile",
      subtitle: "Custom theme in your profile",
      price: 2,
    },
  ];
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