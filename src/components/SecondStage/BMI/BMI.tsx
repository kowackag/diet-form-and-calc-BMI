import React from "react";
import { Text } from "common/components/Text/Text.styled";
import { StyledBMI } from "./BMI.styled";
import { Subtitle } from "../../../common/components/Subtitle/Subtitle";
import { getBmiInfo } from "../helpers";

const BMI = ({ bmi }) => {
  const bmiInfo = getBmiInfo(bmi);
  return (
    <StyledBMI>
      <Subtitle>Twój wskaźnik masy ciała wynosi:</Subtitle>
      <Text
        mt="2rem"
        size="5rem"
        weight="200"
        color="rgb(var(--color-contrast))"
      >
        {bmi}
      </Text>
      <p>Twoje BMI wskazuje na:</p>
      <Text
        mt="2rem"
        weight="600"
        size="1.8rem"
        color="rgb(var(--color-contrast))"
      >
        {bmiInfo}
      </Text>
    </StyledBMI>
  );
};

export default BMI;
