export type OrderDataTypes = {
  gender: string;
  weight: number;
  height: number;
  born: string;
  activity: string;
  goal: string;
  targetWeight: number;
  diet: string;
  lactosy: boolean;
  gluten: boolean;
  excluded1: string;
  excluded2: string;
  bmi?: number;
  personalData: {
    userName: string;
    userEmail: string;
    userPhone: string;
    userInfo: string;
  };
};
