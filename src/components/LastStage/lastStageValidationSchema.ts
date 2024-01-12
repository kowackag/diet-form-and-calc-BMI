import * as yup from "yup";
const regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

export const lastStageValidateSchema = yup.object().shape({
  personalData: yup.object().shape({
    userName: yup
      .string()
      .required("Podaj płeć")
      .min(3, "Wpisz poprawnie imię i Nazwisko"),
    userEmail: yup
      .string()
      .required("Podaj adres e-mail")
      .email("Nieprawidłowy format adresu e-mail"),
    userPhone: yup
      .string()
      .required("Podaj wzrost")
      .matches(regPhone, "Wprowadzono błędny numer telefonu"),
    userInfo: yup.string(),
  }),
});
