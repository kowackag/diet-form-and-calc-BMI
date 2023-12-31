import React from "react";
import { OrderDataTypes } from "./types";

interface ReducerProps {
  type: string;
  element?: any | number;
}
type OrderAction =
  | { type: "choose"; element: HTMLInputElement }
  | { type: "change"; element: HTMLInputElement }
  | { type: "select"; element: HTMLInputElement }
  | { type: "reset" }
  | { type: "setBMI"; element: number };

interface OrderDataContextValue {
  orderData: OrderDataTypes;
  //dispatch: (prev: OrderDataTypes) => void;
  dispatch: React.Dispatch<Readonly<OrderAction>>;
}

export const initOrderData = {
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
// type dispatchType =
//   | { type: "setBMI"; element: number }
//   | { type: "choose"; element: HTMLInputElement }
//   | { type: "change"; element: HTMLInputElement }
//   | { type: "reset" };

const OrderDataContext = React.createContext<OrderDataContextValue>({
  orderData: initOrderData,
  dispatch: null,
});

export { OrderDataContext };
