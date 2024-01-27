import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "common/components/Button/Button";
import { ButtonBox } from "../../common/components/ButtonBox/ButtonBox";
import { OrderDataContext } from "components/context";
import { useStorage } from "services/useStorage";

import { Text } from "common/components/Text/Text.styled";

const Complete = () => {
  const { dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();
  const [, setItem] = useStorage();

  const reset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "reset" });
    setItem("stage", 4);
    navigate("/diet-form-and-calc-BMI/1");
  };

  return (
    <div>
      <p>Formularz został poprawnie wysłany. </p>
      <Text
        mt="6rem"
        mb="6rem"
        color="rgb(var(--color-contrast))"
        fontStyle="italic"
      >
        Dziękujemy za skorzystanie z naszej oferty
      </Text>
      <ButtonBox>
        <Button onClick={reset}>Uzupełnij ponownie</Button>
      </ButtonBox>
    </div>
  );
};

export default Complete;
