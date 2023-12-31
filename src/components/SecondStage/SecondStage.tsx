import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "common/components/Button/Button";
import { Input } from "common/components/Input/Input";
import { Label } from "common/components/Label/Label";
import { Radio } from "common/components/Radio/Radio";
import { Error } from "common/components/Error/Error";
import { Container } from "common/components/Container/Container.styled";
import { Subtitle } from "common/components/Subtitle/Subtitle";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";
import { ButtonBox } from "components/ButtonBox/ButtonBox";

import BMI from "./BMI/BMI";
import { validateDataSecondStage } from "components/validateData";
import { OrderDataContext } from "components/context";

import { StyledSecondStage, Form } from "./SecondStage.styled";

export const SecondStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();

  const [err, setErr] = useState(null);
  const { goal, targetWeight } = orderData;

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
      weight: orderData.weight,
      goal: orderData.goal,
      targetWeight: orderData.targetWeight,
    };

    const errors = validateDataSecondStage(data);
    setErr({ ...errors });
    if (Object.keys(errors).length === 0) {
      navigate("/diet-form-and-calc-BMI/3");
    }
  };

  const fields = [
    { name: "goal", value: "stable", desc: "Utrzymanie masy ciała" },
    { name: "goal", value: "reduction", desc: "Redukcja masy ciała" },
    { name: "goal", value: "muscle-mass", desc: "Wzrost masy mięśniowej" },
  ];

  return (
    <StyledSecondStage>
      <Form onSubmit={handleForm}>
        <FlexContainer>
          <Container width="45%">
            <Subtitle>Cel diety:</Subtitle>
            {fields.map(({ name, value, desc }) => (
              <Radio
                key={value}
                active={goal === value}
                name={name}
                value={value}
                onClick={changeValue}
              >
                <p>{desc}</p>
              </Radio>
            ))}
            {err?.goal && <Error err={err.goal} />}
            {goal !== "stable" && (
              <>
                <Label htmlFor="targetWeight">Docelowa masa ciała</Label>
                <Input
                  id="targetWeight"
                  type="number"
                  unit="kg"
                  name="targetWeight"
                  value={targetWeight}
                  onChange={changeValue}
                />
                {err?.targetWeight && <Error err={err.targetWeight} />}
              </>
            )}
          </Container>
          <BMI bmi={orderData.bmi} />
        </FlexContainer>
        <ButtonBox>
          <Button
            variant="secondary"
            onClick={() => navigate("/diet-form-and-calc-BMI/1")}
            type="button"
          >
            Wstecz
          </Button>
          <Button>Dalej</Button>
        </ButtonBox>
      </Form>
    </StyledSecondStage>
  );
};
