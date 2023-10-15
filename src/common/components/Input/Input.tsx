import React from "react";
import { StyledInput, Unit, InputContainer } from "./Input.styled";

interface InputProps {
  id: string;
  type: string;
  unit?: string;
  value: string | number;
  name: string;
  readonly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  //title: string;
}

export const Input = ({
  id,
  type,
  unit,
  value,
  name,
  onChange,
}: InputProps) => {
  return (
    <InputContainer>
      <StyledInput
        unit={unit}
        id={id}
        type={type}
        name={name}
        //title={title}
        value={value}
        onChange={onChange}
      />
      {unit ? <Unit>{unit}</Unit> : null}
    </InputContainer>
  );
};
