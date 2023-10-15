import React from "react";
import { StyledButton } from "./Button.styled";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

