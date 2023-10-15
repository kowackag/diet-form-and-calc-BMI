export const countBMI = (weight: number, height: number) => {
    const bmi = (weight / Math.pow(height/100, 2)).toFixed(1);
    return bmi;
  };
