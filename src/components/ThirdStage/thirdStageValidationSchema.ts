import * as yup from "yup";

export const thirdStageValidateSchema = yup.object().shape({
  diet: yup.string().required("Wybierz dietę"),
  lactosy: yup.boolean().required(),
  gluten: yup.boolean().required(),
  excluded1: yup.string(),
  excluded2: yup.string(),
});
