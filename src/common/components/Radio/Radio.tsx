import React from "react";
import { StyledRadio } from "./Radio.styled";
import { OrderDataTypes } from "common/types";
import { UseFormRegister } from "react-hook-form";

interface RadioProps {
  register: UseFormRegister<Partial<OrderDataTypes>>;
  name: "activity" | "goal" | "diet";
  value: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  children: React.ReactNode;
}
export const Radio = ({
  register,
  name,
  value,
  active,
  onClick,
  children,
}: RadioProps) => {
  return (
    <StyledRadio active={active}>
      {children}
      <input
        {...register(name)}
        value={value}
        type="radio"
        onClick={onClick}
      ></input>
    </StyledRadio>
  );
};
