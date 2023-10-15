import React from "react";
import { StyledLabel } from "./Label.styled";
interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}
export const Label = ({ children, htmlFor }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
