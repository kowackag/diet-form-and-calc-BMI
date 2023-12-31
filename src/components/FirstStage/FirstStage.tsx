import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";
import { Parameters } from "./Parameters";
import { Activity } from "./Activity";

import { OrderDataContext } from "components/context";
import { firstStageValidateSchema } from "./firstStagevalidationSchema";
import { countBMI } from "./helpers";
import { DataFirstStageTypes } from "./../types";

export const FirstStage = () => {
  const { dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid: formIsValid },
  } = useForm<DataFirstStageTypes>({
    resolver: yupResolver(firstStageValidateSchema),
    mode: "all",
    defaultValues: {
      gender: "",
      weight: 60,
      height: 160,
    },
  });

  const onClickHandler = handleSubmit((data, event) => {
    event.preventDefault();

    if (formIsValid) {
      const bmi = countBMI(data.weight, data.height);
      dispatch({ type: "setBMI", element: bmi });
      // navigate("/diet-form-and-calc-BMI/2");
    }
  });

  // const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const data = {
  //     weight: orderData.weight,
  //     height: orderData.height,
  //     gender: orderData.gender,
  //     born: orderData.born,
  //     activity: orderData.activity,
  //   };

  //   const errors = validateDataFirstStage(data);
  //   setErr({ ...errors });

  //   if (Object.keys(errors).length === 0) {
  //     const { weight, height } = data;
  //     const bmi = countBMI(weight, height);
  //     dispatch({ type: "setBMI", element: bmi });
  //     // navigate("/diet-form-and-calc-BMI/2");
  //   }
  // };

  // const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const data = {
  //     weight: orderData.weight,
  //     height: orderData.height,
  //     gender: orderData.gender,
  //     born: orderData.born,
  //     activity: orderData.activity,
  //   };

  //   const errors = validateDataFirstStage(data);
  //   setErr({ ...errors });
  // };

  return (
    <div>
      <form>
        <FlexContainer>
          <Parameters
            register={register}
            genderError={errors.gender?.message}
            weightError={errors.weight?.message}
            heightError={errors.height?.message}
            bornError={errors.born?.message}
          />
          <Activity register={register} error={errors.activity?.message} />
        </FlexContainer>
        <ButtonBox>
          <Button type="submit" onClick={onClickHandler}>
            Dalej
          </Button>
        </ButtonBox>
      </form>
    </div>
  );
};
