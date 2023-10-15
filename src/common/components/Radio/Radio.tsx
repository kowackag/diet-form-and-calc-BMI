import React from "react";
import {StyledRadio} from "./Radio.styled";

interface RadioProps {
  name: string;
  value: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  children: React.ReactNode;
}
export const Radio = ({ name, value, active, onClick, children }: RadioProps) => {
  return (
    <StyledRadio active={active}>
      {children}
      <input name={name} value={value} type="radio" onClick={onClick}></input>
    </StyledRadio>
  );
};
