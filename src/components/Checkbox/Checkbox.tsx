import React from "react";
import { StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = ({ name, register }) => {
  return (
    <StyledCheckbox checked={true}>
      <input {...register(name)} id={name} type="checkbox" name={name} />
      <label htmlFor={name}></label>
    </StyledCheckbox>
  );
};
