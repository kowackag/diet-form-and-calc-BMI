import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Subtitle } from "common/components/Subtitle/Subtitle";
import { ButtonBox } from "common/components/ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "common/components/Input/Input";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";

import { OrderDataContext } from "components/context";
import { lastStageValidateSchema } from "./lastStageValidationSchema";
import { LastStageTypes } from "components/types";
import { Container } from "common/components/Container/Container.styled";

interface FieldsTypes {
  label: string;
  type: string;
  name:
    | "personalData.userName"
    | "personalData.userEmail"
    | "personalData.userPhone"
    | "personalData.userInfo";
  value: string;
  err?: string;
}

const LastStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();
  const { personalData } = orderData;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid: formIsValid },
  } = useForm({
    resolver: yupResolver<LastStageTypes>(lastStageValidateSchema),
    mode: "all",
    defaultValues: {
      personalData: {
        userName: personalData.userName,
        userEmail: personalData.userEmail,
        userPhone: personalData.userPhone,
        userInfo: personalData.userInfo,
      },
    },
  });

  const onClickHandler = handleSubmit(({ personalData }, event) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch({ type: "setFirstStageData", element: { personalData } });
      console.log({ ...orderData, personalData });
      navigate("/diet-form-and-calc-BMI/complete");
    }
  });

  const fields: FieldsTypes[] = [
    {
      label: "Imię i Nazwisko:",
      type: "text",
      name: "personalData.userName",
      value: personalData?.userName,
      err: errors?.personalData?.userName?.message,
    },
    {
      label: "Adres email:",
      type: "email",
      name: "personalData.userEmail",
      value: personalData?.userEmail,
      err: errors?.personalData?.userEmail?.message,
    },
    {
      label: "Telefon:",
      type: "text",
      name: "personalData.userPhone",
      value: personalData?.userPhone,
      err: errors?.personalData?.userPhone?.message,
    },
    {
      label: "Uwagi:",
      type: "text",
      name: "personalData.userInfo",
      value: personalData?.userInfo,
    },
  ];

  return (
    <div>
      <Subtitle>Proszę o podanie danych kontaktowych.</Subtitle>
      <form>
        <Container position="relative">
          {fields.map(({ label, name, type, err }) => (
            <React.Fragment key={name}>
              <Label htmlFor={name}>{label}</Label>
              <Input
                register={register}
                type={type}
                id={name}
                name={name}
                valid={!Boolean(err)}
              />
              {errors && <Error err={err} />}
            </React.Fragment>
          ))}
        </Container>
        <ButtonBox>
          <Button
            onClick={() => navigate("/diet-form-and-calc-BMI/3")}
            type="button"
          >
            Wstecz
          </Button>
          <Button type="submit" onClick={onClickHandler}>
            Wyślij
          </Button>
        </ButtonBox>
      </form>
    </div>
  );
};

export default LastStage;
