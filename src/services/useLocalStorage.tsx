import { OrderDataTypes } from "components/types";

type LSTypes = number | OrderDataTypes;

export const useLocalStorage = () => {
  const setItem = (name: string, ob: LSTypes) => {
    localStorage.setItem(name, JSON.stringify(ob));
  };
  const getItem = (name: string) => {
    const retrivedObject = JSON.parse(localStorage.getItem(name));
    return retrivedObject;
  };
  return [getItem, setItem];
};
