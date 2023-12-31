import * as yup from "yup";
import { subYears } from "date-fns";

export const firstStageValidateSchema = yup.object().shape({
  gender: yup.string().required("Podaj płeć"),
  weight: yup.number().min(20, "Błędnie podana waga").required("Podaj wagę"),
  height: yup
    .number()
    .integer()
    .min(100, "Błędnie podany wzrost")
    .max(250, "Błędnie podany wzrost")
    .required("Podaj wzrost"),
  born: yup
    .date()
    .typeError("Wpisana data nie jest poprawna")
    .min(subYears(new Date(), 100), "Naprawdę masz więcej, niż 100 lat?")
    .max(
      subYears(new Date(), 16),
      "Aby zamówić dietę musisz mieć ukończone 18 lat"
    )
    .nullable()
    .required("Data urodzenia jest wymagana"),
  activity: yup.string().required("Uzupełnij rodzaj aktywności"),
});
