import React, { useContext } from "react";

import { Button } from "common/components/Button/Button";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { OrderDataContext } from "components/context";
import { Text } from "common/components/Text/Text.styled";

const Complete = () => {
  const { dispatch } = useContext(OrderDataContext);

  const reset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "reset" });
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
