import * as yup from "yup";

export const secondStageValidationSchema = yup.object().shape({
  goal: yup.string().required("Uzupełnij pole"),
  targetWeight: yup.number().min(20, "Błędnie podana waga"),
});
