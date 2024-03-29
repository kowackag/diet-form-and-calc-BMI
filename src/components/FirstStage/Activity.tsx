import React, { useState } from "react";

import { Subtitle } from "common/components/Subtitle/Subtitle";
import { Radio } from "common/components/Radio/Radio";
import { RadioInfo } from "common/components/Radio/Radio.styled";
import { Error } from "common/components/Error/Error";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";

import { Text } from "common/components/Text/Text.styled";
import { Container } from "common/components/Container/Container.styled";

export const Activity = ({ error, register, activity: active }) => {
  const [activity, setActivity] = useState(active);
  const fields = [
    {
      value: "none",
      label: "Brak aktywności",
      desc: "Siedzący tryb życia",
    },
    {
      value: "low",
      label: "Mała aktywność",
      desc: "Sporadyczne treningi",
    },
    {
      value: "med",
      label: "Średnia aktywność",
      desc: "1-3 treningi w tygodniu",
    },
    {
      value: "hight",
      label: "Duża aktywność",
      desc: "Conajmniej 4 treningi w tygodniu",
    },
  ];

  return (
    <FlexContainer direction="column">
      <Container position="relative">
        <Subtitle>Jaka jest twoja aktywność fizyczna?</Subtitle>
        {fields.map(({ value, label, desc }) => (
          <Radio
            register={register}
            key={value}
            name="activity"
            value={value}
            onClick={() => setActivity(value)}
            active={value === activity}
          >
            <Text weight="500" mb="6px">
              {label}
            </Text>
            <RadioInfo>{desc}</RadioInfo>
          </Radio>
        ))}
        {error && <Error err={error} />}
      </Container>
    </FlexContainer>
  );
};
