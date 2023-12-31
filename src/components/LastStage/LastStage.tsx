import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Subtitle } from "common/components/Subtitle/Subtitle";
import { ButtonBox } from "components/ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { Input } from "common/components/Input/Input";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";

import { validateDataLastStage } from "components/validateData";
import { OrderDataContext } from "components/context";

const LastStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);

  const { personalData } = orderData;
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const changeValue = (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    dispatch({ type: "change", element: e.target as HTMLInputElement });
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      userName: personalData.userName,
      userEmail: personalData.userEmail,
      userPhone: personalData.userPhone,
    };

    const errors = validateDataLastStage(data);
    setErr({ ...errors });

    if (Object.keys(errors).length === 0) {
      navigate("/diet-form-and-calc-BMI/4");
    }
  };

  const fields = [
    {
      label: "Imię i Nazwisko:",
      type: "text",
      name: "personalData",
      key: "userName",
      value: personalData.userName,
      err: err?.userName,
    },
    {
      label: "Adres email:",
      type: "email",
      name: "personalData",
      key: "userEmail",
      value: personalData.userEmail,
      err: err?.userEmail,
    },
    {
      label: "Telefon:",
      type: "text",
      name: "personalData",
      key: "userPhone",
      value: personalData.userPhone,
      err: err?.userPhone,
    },
    {
      label: "Uwagi:",
      type: "text",
      name: "personalData",
      key: "userInfo",
      value: personalData.userInfo,
    },
  ];

  return (
    <div>
      <Subtitle>Proszę o podanie danych kontaktowych.</Subtitle>
      <form onSubmit={handleForm}>
        <div>
          {fields.map(({ label, name, type, value, err, key }) => (
            <React.Fragment key={key}>
              <Label htmlFor={key}>{label}</Label>
              <Input
                type={type}
                id={key}
                name={name}
                value={value}
                title={key}
                onChange={changeValue}
              />
              {err && <Error err={err} />}
            </React.Fragment>
          ))}
        </div>
        <ButtonBox>
          <Button
            onClick={() => navigate("/diet-form-and-calc-BMI/3")}
            type="button"
          >
            Wstecz
          </Button>
          <Button>Wyślij</Button>
        </ButtonBox>
      </form>
    </div>
  );
};

export default LastStage;
