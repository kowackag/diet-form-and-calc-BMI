import { formatRFC3339 } from "date-fns";

export const countBMI = (weight: number, height: number) => {
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  return Number(bmi);
};

export const convertDateToString = (date: Date | string) => {
  const stringDate = formatRFC3339(date).slice(0, 10);
  return stringDate;
};
