import React, { useContext } from "react";
import { Input } from "common/components/Input/Input";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";
import { Search } from "common/components/Search/Search";

import { OrderDataContext } from "components/context";

interface FieldsType {
  label: string;
  type: string;
  unit?: string;
  name: "weight" | "height" | "born";
  value: number | string;
  err: string;
}

export const Parameters = ({
  register,
  genderError,
  weightError,
  heightError,
  bornError,
}) => {
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

  const fields: FieldsType[] = [
    {
      label: "Masa ciała",
      type: "number",
      unit: "kg",
      name: "weight",
      value: weight,
      err: weightError,
    },
    {
      label: "Wzrost",
      type: "number",
      unit: "cm",
      name: "height",
      value: height,
      err: heightError,
    },
    {
      label: "Data urodzenia",
      type: "date",
      name: "born",
      value: born,
      err: bornError,
    },
  ];

  return (
    <FlexContainer width="45%" direction="column" alignItems="stretch">
      <div>
        <Label>Płeć</Label>
        <Search
          items={["kobieta", "mężczyzna"]}
          name="gender"
          value={gender}
          register={register}
          // onChange={changeValue}
          // onChoose={chooseElement}
          isMutable={false}
        />
        {genderError && <Error err={genderError} />}
      </div>
      {fields.map(({ label, type, unit, name, value, err }) => (
        <React.Fragment key={name}>
          <div>
            <Label htmlFor={name}>{label}</Label>
            <Input
              register={register}
              id={name}
              type={type}
              unit={unit}
              name={name}
              value={value}
              onChange={changeValue}
            />
            {err && <Error err={err} />}
          </div>
        </React.Fragment>
      ))}
    </FlexContainer>
  );
};

export default Parameters;
