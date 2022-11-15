import React from "react";
import StyledButton from "./Button.styled";

const Button = ({ type, children, onClick }) => {
  return (
    <StyledButton readOnly type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
