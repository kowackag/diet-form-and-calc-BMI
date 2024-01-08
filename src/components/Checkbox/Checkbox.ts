import React from "react";
import { StyledCheckbox } from "./Checkbox.styled";

export const Checkbox = ({ name, onClick }) => {
  return (
    <StyledCheckbox checked={true}>
      <input id={name} type="checkbox" name={name} onClick={onClick} />
      <label htmlFor={name} />
    </StyledCheckbox>
  );
};
