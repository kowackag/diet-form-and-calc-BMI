export type personalDataTypes = {
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  userInfo?: string;
};
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
  personalData: personalDataTypes;
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

export interface DataThirdStageTypes {
  diet?: string;
  lactosy?: boolean;
  gluten?: boolean;
  excluded1?: string;
  excluded2?: string;
}

export interface LastStageTypes {
  personalData: personalDataTypes;
}
