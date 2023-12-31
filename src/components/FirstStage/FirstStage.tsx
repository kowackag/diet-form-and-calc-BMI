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
      console.log(data);
      const copyData = { ...data, bmi };
      dispatch({ type: "setFirstStageData", element: copyData });
      navigate("/diet-form-and-calc-BMI/2");
    }
  });

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
