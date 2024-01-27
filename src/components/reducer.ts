import { useReducer } from "react";
import { OrderDataTypes } from "./types";

export const useHandler = () => {
  const init = {
    gender: "",
    weight: 0,
    height: 0,
    born: new Date("2000-01-01"),
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
    | { type: "setFirstStageData"; element: OrderDataTypes }
  >;

  const reducer = (state: OrderDataTypes, action: Readonly<OrderAction>) => {
    switch (action.type) {
      case "reset":
        return init;
      case "setFirstStageData":
        return { ...state, ...action.element };
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
