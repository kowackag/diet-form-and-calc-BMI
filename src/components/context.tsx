import React from "react";
import { OrderDataTypes } from "./types";

interface OrderDataContextValue {
  orderData: OrderDataTypes;
  //dispatch: (prev: OrderDataTypes) => void;
  dispatch: React.Dispatch<any>
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

const OrderDataContext = React.createContext<OrderDataContextValue>({
  orderData: initOrderData,
  dispatch: (prev: OrderDataTypes) => prev,
});

export { OrderDataContext };
