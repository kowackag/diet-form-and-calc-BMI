import { useState, useEffect } from "react";

type StorageType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useStorage = <T,>(
  name: string,
  initialValue?: T
): StorageType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(name);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(name, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, name]);

  return [state, setState];
};
