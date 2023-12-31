import React from "react";
import { StyledButton } from "./Button.styled";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button = ({ type, children, variant, onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
