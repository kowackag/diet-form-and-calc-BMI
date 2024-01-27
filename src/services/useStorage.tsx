import { OrderDataTypes } from "components/types";

export const useStorage = () => {
  const setItem = (name: string, data?: Partial<OrderDataTypes> | number) => {
    localStorage.setItem(name, JSON.stringify(data));
  };
  const getItem = (name: string) => {
    const retrivedObject = JSON.parse(localStorage.getItem(name));
    return retrivedObject;
  };
  return [getItem, setItem];
};
