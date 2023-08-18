import React, { useContext } from "react";

import Subtitle from "../Subtitle/Subtitle";
import { Radio } from "common/components/Radio/Radio";
import { Error } from "common/components/Error/Error";
import { Container } from "common/components/Container/Container.styled";

import { OrderDataContext } from "components/context";

export const Activity = ({ activity, error }) => {
  const { dispatch } = useContext(OrderDataContext);

  const fields = [
    {
      name: "activity",
      value: "none",
      label: "Brak aktywności",
      desc: "Siedzący tryb życia",
    },
    {
      name: "activity",
      value: "low",
      label: "Mała aktywność",
      desc: "Sporadyczne treningi",
    },
    {
      name: "activity",
      value: "med",
      label: "Średnia aktywność",
      desc: "1-3 treningi w tygodniu",
    },
    {
      name: "activity",
      value: "hight",
      label: "Duża aktywność",
      desc: "Conajmniej 4 treningi w tygodniu",
    },
  ];

  const changeValue = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "change", element: e.target });
  };

  return (
    <Container width="45%">
      <Subtitle>Jaka jest twoja aktywność fizyczna?</Subtitle>
      {fields.map(({ name, value, label, desc }) => (
        <Radio
          key={value}
          name={name}
          value={value}
          onClick={changeValue}
          active={value === activity}
        >
          <p className="radio__name"> {label}</p>
          <p className="radio__description">{desc}</p>
        </Radio>
      ))}
      <Error err={error} />
    </Container>
  );
};