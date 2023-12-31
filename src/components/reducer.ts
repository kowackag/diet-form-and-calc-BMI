import { useReducer } from "react";
import { OrderDataTypes } from "./types";
import { DataFirstStageTypes } from "./types";
export const useHandler = () => {
  const init = {
    gender: "",
    weight: 0,
    height: 0,
    born: new Date(),
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

  type OrderAction = Readonly<
    | { type: "choose"; element: HTMLInputElement }
    | { type: "change"; element: HTMLInputElement }
    | { type: "select"; element: HTMLInputElement }
    | { type: "reset" }
    | { type: "setBMI"; element: number }
    | { type: "setFirstStageData"; element: DataFirstStageTypes }
  >;

  const reducer = (state: OrderDataTypes, action: Readonly<OrderAction>) => {
    switch (action.type) {
      case "reset":
        return init;
      case "change":
        const { name, value, checked, title } = action.element;
        const copyValue = value;
        const result = title
          ? { ...state, [name]: { ...state.personalData, [title]: copyValue } }
          : { ...state, [name]: copyValue };
        return result;
      case "select":
        const copyCheckbox = checked;
        const checkResult = title
          ? {
              ...state,
              [name]: { ...state.personalData, [title]: copyCheckbox },
            }
          : { ...state, [name]: copyValue };
        return checkResult;
      case "setFirstStageData":
        console.log(action.element);
        const copyData = { ...state, ...action.element };
        return copyData;
      case "choose":
        if (action.element) {
          let nameLi = action.element.getAttribute("name");
          return { ...state, [nameLi]: action.element.innerText };
        } else return null;

      case "setBMI":
        return { ...state, bmi: action.element };
      default:
        return state;
    }
  };

  return useReducer(reducer, init);
};
