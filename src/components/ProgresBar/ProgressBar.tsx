import React from "react";
import { StyledProgressBar } from "./ProgressBar.styled";

interface ProgressBarProps {
  progress: number;
}
const ProgressBar = ({ progress }: ProgressBarProps) => {
  return ( 
    <StyledProgressBar progress={progress}>
      <span></span>
    </StyledProgressBar>
  );
};

export default ProgressBar;
