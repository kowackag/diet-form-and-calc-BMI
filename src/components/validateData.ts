interface DataFirstStageProps {
  weight: number;
  height: number;
  gender: string;
  born: string;
  activity: string;
}

interface DataSecondStageProps {
  weight: number;
  targetWeight: number;
  goal: string;
}

interface DataThirdStageProps {
  diet: string;
}

interface DataLastStageProps {
    userName: string;
    userEmail: string;
    userPhone: string;
}

export const validateDataFirstStage = ({
  weight,
  height,
  gender,
  born,
  activity,
}: DataFirstStageProps) => {
  let errors = {};
  if (gender == "") {
    const copyErrors = { gender: "Podaj płeć" };
    errors = { ...errors, ...copyErrors };
  }
  if (Number(weight) < 20) {
    const copyErrors = { weight: "Błędnie podana waga" };
    errors = { ...errors, ...copyErrors };
  }
  if (Number(height) < 100 || Number(height) > 250) {
    const copyErrors = { height: "Błędnie podany wzrost" };
    errors = { ...errors, ...copyErrors };
  }
  const regDate =
    /(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])/;
  if (!regDate.test(born)) {
    const copyErrors = { born: "Wprowadzono błędną datę urodzenia" };
    errors = { ...errors, ...copyErrors };
  }
  if (!activity) {
    const copyErrors = { activity: "Uzupełnij rodzaj aktywności" };
    errors = { ...errors, ...copyErrors };
  }

  return errors;
};

export const validateDataSecondStage = ({
  targetWeight,
  goal,
  weight,
}: DataSecondStageProps) => {
  let errors = {};
  if (!goal) {
    const copyErrors = { goal: "Uzupełnij cel diety" };
    errors = { ...errors, ...copyErrors };
  }
  if (goal !== "stable" && Number(targetWeight) < 20) {
    const copyErrors = { weight: "Błędnie podana waga" };
    errors = { ...errors, ...copyErrors };
  }
  if (goal === "muscle-mass" && Number(targetWeight) <= Number(weight)) {
    const copyErrors = { weight: "Waga docelowa musi byc większa od obecnej" };
    errors = { ...errors, ...copyErrors };
  }
  if (goal === "reduction" && Number(targetWeight) >= Number(weight)) {
    const copyErrors = { weight: "Waga docelowa musi być mniejsza od obecnej" };
    errors = { ...errors, ...copyErrors };
  }
  return errors;
};

export const validateDataThirdStage = ({ diet }: DataThirdStageProps) => {
  let errors = {};
  if (!diet) {
    const copyErrors = { diet: "Wybierz rodzaj diety" };
    errors = { ...errors, ...copyErrors };
  }
  return errors;
};

export const validateDataLastStage = ({ userName, userEmail, userPhone }: DataLastStageProps) => {
  let errors = {};
  if (userName.length < 3) {
    const copyErrors = { userName: "Wpisz poprawnie imię i Nazwisko" };
    errors = { ...errors, ...copyErrors };
  }
  if (!userEmail.includes("@")) {
    const copyErrors = { userEmail: "Błędny adres email" };
    errors = { ...errors, ...copyErrors };
  }
  const regDate = /([1-9]{1}[0-9]{8})/;
  if (!regDate.test(userPhone)) {
    const copyErrors = { userPhone: "Wprowadzono błędny numer telefonu" };
    errors = { ...errors, ...copyErrors };
  }
  return errors;
};
