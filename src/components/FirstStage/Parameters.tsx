import React, { useContext } from "react";
import { Input } from "common/components/Input/Input";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";
import { Container } from "common/components/Container/Container.styled";
import Search from "../Search/Search";

import { OrderDataContext } from "components/context";

export const Parameters = ({ errors }) => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const { gender, weight, height, born } = orderData;

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "change", element: e.target });
  };

  const chooseElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "choose", element: e.target });
  };

  const fields = [
    {
      label: "Masa ciała",
      type: "number",
      unit: "kg",
      name: "weight",
      value: weight,
      err: errors?.weight,
    },
    {
      label: "Wzrost",
      type: "number",
      unit: "cm",
      name: "height",
      value: height,
      err: errors?.height,
    },
    {
      label: "Data urodzenia",
      type: "date",
      name: "born",
      value: born,
      err: errors?.born,
    },
  ];

  return (
    <Container width="45%">
      <Label>Płeć</Label>
      <Search
        items={["kobieta", "mężczyzna"]}
        name="gender"
        value={gender}
        onChange={changeValue}
        onChoose={chooseElement}
        isMutable={false}
      />
      {errors?.gender && <Error err={errors.gender} />}
      {fields.map(({ label, type, unit, name, value, err }) => (
        <React.Fragment key={name}>
          <Label htmlFor={name}>{label}</Label>
          <Input
            id={name}
            className="form__value"
            type={type}
            unit={unit}
            name={name}
            value={value}
            onChange={changeValue}
          />
          {err && <Error err={err} />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Parameters;
