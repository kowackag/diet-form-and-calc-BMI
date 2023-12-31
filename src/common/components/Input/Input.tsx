import React from "react";
import { StyledInput, Unit, InputContainer } from "./Input.styled";
import { UseFormRegister } from "react-hook-form";
import { DataFirstStageTypes } from "components/types";
interface InputProps {
  register: UseFormRegister<DataFirstStageTypes>;
  id: string;
  type: string;
  unit?: string;
  value: string | number;
  title?: string;
  name: "weight" | "height" | "born";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  id,
  type,
  unit,
  name,
  register,
  title,
}: InputProps) => {
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
