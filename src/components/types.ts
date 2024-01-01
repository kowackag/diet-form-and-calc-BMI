export type OrderDataTypes = {
  gender: string;
  weight: number;
  height: number;
  born: Date | string;
  activity: string;
  goal: string;
  targetWeight: number;
  diet: string;
  lactosy: boolean;
  gluten: boolean;
  excluded1: string;
  excluded2: string;
  bmi: number;
  personalData: {
    userName: string;
    userEmail: string;
    userPhone: string;
    userInfo: string;
  };
};

export interface DataFirstStageTypes {
  weight?: number;
  height?: number;
  gender?: string;
  born?: Date | string;
  activity?: string;
}

export interface DataSecondStageTypes {
  goal?: string;
  targetWeight?: number;
}
