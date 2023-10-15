import React from "react";
import { StyledError } from "./Error.styled";

interface ErrorProps {
  err: string;
}

export const Error = ({ err }: ErrorProps) => {
  return <StyledError>{err}</StyledError>;
};
