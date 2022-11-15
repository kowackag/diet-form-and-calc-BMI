import React from "react";
import StyledBMI from "./BMI.styled";
import Subtitle from "../../Subtitle/Subtitle";

const BMI = ({ className, bmi }) => {
  const ranges = [
    { min: 0, max: 15.9, desc: "wygłodzenie" },
    { min: 16, max: 16.9, desc: "wychudzenie" },
    { min: 17, max: 18.4, desc: "niedowaga" },
    { min: 18.5, max: 24.9, desc: "waga prawidłowa" },
    { min: 25, max: 29.9, desc: "nadwaga" },
    { min: 30, max: 34.9, desc: "otyłość I stopnia" },
    { min: 35, max: 39.9, desc: "otyłość II stopnia" },
    { min: 40, max: 1000, desc: "otyłość III stopnia" },
  ];

  const result = ranges.find(({ min, max }) => bmi >= min && bmi <= max);

  return (
    <StyledBMI className={className}>
      <Subtitle>Twój wskaźnik masy ciała wynosi:</Subtitle>
      <p className="bmi-value">{bmi}</p>
      <p>Twoje BMI wskazuje na:</p>
      <p className="bmi-description">{result && result.desc}</p>
    </StyledBMI>
  );
};

export default BMI;
