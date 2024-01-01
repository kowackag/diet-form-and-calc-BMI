import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
import { OrderDataContext } from "components/context";
import { secondStageValidationSchema } from "./secondStageValidationSchema";
import { StyledSecondStage, Form } from "./SecondStage.styled";
import { DataSecondStageTypes } from "../types";
export const SecondStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();

  const [radioValue, setRadioValue] = useState(orderData?.goal || "stable");
  const { targetWeight } = orderData;
  console.log(targetWeight);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid: formIsValid },
  } = useForm<DataSecondStageTypes>({
    resolver: yupResolver(secondStageValidationSchema),
    mode: "all",
    defaultValues: {
      goal: radioValue,
      targetWeight: orderData?.targetWeight || orderData.weight,
    },
  });

  const onClickHandler = handleSubmit((data, event) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch({ type: "setFirstStageData", element: data });
      navigate("/diet-form-and-calc-BMI/3");
    }
  });

  const fields = [
    { value: "stable", label: "Utrzymanie masy ciała" },
    { value: "reduction", label: "Redukcja masy ciała" },
    { value: "muscle-mass", label: "Wzrost masy mięśniowej" },
  ];

  return (
    <StyledSecondStage>
      <Form>
        <FlexContainer>
          <Container width="45%">
            <Subtitle>Cel diety:</Subtitle>
            {fields.map(({ value, label }) => (
              <Radio
                register={register}
                key={value}
                name="goal"
                value={value}
                active={radioValue === value}
                onClick={() => setRadioValue(value)}
              >
                <p>{label}</p>
              </Radio>
            ))}
            {errors.goal && <Error err={errors.goal?.message} />}
            {radioValue !== "stable" && (
              <>
                <Label htmlFor="targetWeight">Docelowa masa ciała</Label>
                <Input
                  register={register}
                  id="targetWeight"
                  type="number"
                  unit="kg"
                  name="targetWeight"
                  value={targetWeight}
                />
                {errors?.targetWeight && (
                  <Error err={errors.targetWeight?.message} />
                )}
              </>
            )}
          </Container>
          <BMI bmi={orderData.bmi} />
        </FlexContainer>
        <ButtonBox>
          <Button
            variant="secondary"
            onClick={() => navigate("/diet-form-and-calc-BMI/1")}
          >
            Wstecz
          </Button>
          <Button type="submit" onClick={onClickHandler}>
            Dalej
          </Button>
        </ButtonBox>
      </Form>
    </StyledSecondStage>
  );
};
