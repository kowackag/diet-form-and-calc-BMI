import { useReducer } from "react";
import { OrderDataTypes } from "./types";

export const useHandler = () => {
  const init = {
    gender: "",
    weight: 0,
    height: 0,
    born: "",
    activity: "",
    goal: "",
    targetWeight: 0,
    diet: "",
    lactosy: false,
    gluten: false,
    excluded1: "",
    excluded2: "",
    bmi: 0,
    personalData: {
      userName: "",
      userEmail: "",
      userPhone: "",
      userInfo: "",
    },
  };

  interface ReducerProps {
    type: string;
    element: {
      name?: string;
      value?: string | number;
      checked?: boolean;
      type: string;
      title?: string;
    };
  }

  const reducer = (state: OrderDataTypes, { type, element }: ReducerProps) => {
    switch (type) {
      case "reset":
        return init;
      case "change":
        const { name, value, checked, type, title } = element;
        const copyValue = type === "checkbox" ? checked : value;
        const result = title
          ? { ...state, [name]: { ...state.personalData, [title]: copyValue } }
          : { ...state, [name]: copyValue };
        return result;
      case "choose":
        let nameLi = element.getAttribute("name");
        return { ...state, [nameLi]: element.innerText };
      case "setBMI":
        return { ...state, bmi: element };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, init);
  return [state, dispatch];
};
