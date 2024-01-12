import React from "react";
import { StyledInput, Unit, InputContainer } from "./Input.styled";
import { UseFormRegister } from "react-hook-form";
import { OrderDataTypes } from "components/types";

interface InputProps {
  register: UseFormRegister<Partial<OrderDataTypes>>;
  id: string;
  type: string;
  unit?: string;
  title?: string;
  name:
    | "weight"
    | "height"
    | "born"
    | "targetWeight"
    | "personalData.userInfo"
    | "personalData.userPhone"
    | "personalData.userEmail"
    | "personalData.userName";
}

export const Input = ({
  id,
  type,
  unit,
  name,
  register,
  title,
}: InputProps) => {
  console.log(name);
  return (
    <InputContainer>
      <StyledInput
        {...register(name)}
        unit={unit}
        id={id}
        type={type}
        name={name}
        title={title}
      />
      {unit ? <Unit>{unit}</Unit> : null}
    </InputContainer>
  );
};
