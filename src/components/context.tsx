import React from "react";
import { OrderDataTypes } from "./types";

type OrderAction =
  | { type: "choose"; element: HTMLInputElement }
  | { type: "change"; element: HTMLInputElement }
  | { type: "select"; element: HTMLInputElement }
  | { type: "reset" }
  | { type: "setBMI"; element: number }
  | { type: "setFirstStageData"; element: Partial<OrderDataTypes> };

interface OrderDataContextValue {
  orderData: OrderDataTypes;
  dispatch: React.Dispatch<Readonly<OrderAction>>;
}

export const initOrderData = {
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

const OrderDataContext = React.createContext<OrderDataContextValue>({
  orderData: initOrderData,
  dispatch: null,
});

export { OrderDataContext };
