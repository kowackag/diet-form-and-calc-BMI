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
  err: string;
}

export const Parameters = ({
  register,
  genderError,
  weightError,
  heightError,
  bornError,
}) => {
  const { orderData } = useContext(OrderDataContext);
  const { gender } = orderData;

  const fields: FieldsType[] = [
    {
      label: "Masa ciała",
      type: "number",
      unit: "kg",
      name: "weight",
      err: weightError,
    },
    {
      label: "Wzrost",
      type: "number",
      unit: "cm",
      name: "height",
      err: heightError,
    },
    {
      label: "Data urodzenia",
      type: "date",
      name: "born",
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
          isMutable={false}
        />
        {genderError && <Error err={genderError} />}
      </div>
      {fields.map(({ label, type, unit, name, err }) => (
        <React.Fragment key={name}>
          <div>
            <Label htmlFor={name}>{label}</Label>
            <Input
              register={register}
              id={name}
              type={type}
              unit={unit}
              name={name}
            />
            {err && <Error err={err} />}
          </div>
        </React.Fragment>
      ))}
    </FlexContainer>
  );
};

export default Parameters;
