import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Parameters } from "./Parameters";
import { Activity } from "./Activity";
import { Button } from "common/components/Button/Button";
import { ButtonBox } from "common/components/ButtonBox/ButtonBox";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";

import { convertDateToString, countBMI } from "./helpers";
import { firstStageValidateSchema } from "./firstStagevalidationSchema";
import { OrderDataContext } from "store/context";
import { useLocalStorage } from "common/hook/useLocalStorage";
import { DataFirstStageTypes } from "common/types";

export const FirstStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();
  const [, setStage] = useLocalStorage();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid: formIsValid },
  } = useForm<DataFirstStageTypes>({
    resolver: yupResolver(firstStageValidateSchema),
    mode: "all",
    defaultValues: {
      gender: orderData?.gender,
      weight: orderData?.weight || 60,
      height: orderData?.height || 160,
      born: convertDateToString(orderData?.born),
      activity: orderData?.activity,
    },
  });

  const onClickHandler = handleSubmit((data, event) => {
    event.preventDefault();
    if (formIsValid) {
      const bmi = countBMI(data.weight, data.height);
      const copyData = { ...data, bmi };
      dispatch({ type: "setFirstStageData", element: copyData });
      setStage("stage", 2);
      navigate("/diet-form-and-calc-BMI/2");
    }
  });

  return (
    <form>
      <FlexContainer direction="column" gap="30px">
        <Parameters
          register={register}
          genderError={errors.gender?.message}
          weightError={errors.weight?.message}
          heightError={errors.height?.message}
          bornError={errors.born?.message}
        />
        <Activity
          register={register}
          error={errors.activity?.message}
          activity={orderData.activity}
        />
      </FlexContainer>
      <ButtonBox>
        <Button type="submit" onClick={onClickHandler}>
          Dalej
        </Button>
      </ButtonBox>
    </form>
  );
};
