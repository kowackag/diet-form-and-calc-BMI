import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Radio } from "common/components/Radio/Radio";
import { Container } from "common/components/Container/Container.styled";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";
import { Search } from "../../common/components/Search/Search";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Subtitle } from "common/components/Subtitle/Subtitle";
// import { loadProductsAPI } from "../DataAPI";

import { OrderDataContext } from "components/context";
import { DataThirdStageTypes } from "../types";

import { StyledThirdStage, Form } from "./ThirdStage.styled";

import { RadioInfo } from "common/components/Radio/Radio.styled";
import { Text } from "common/components/Text/Text.styled";
import { thirdStageValidateSchema } from "./thirdStageValidationSchema";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";

export const ThirdStage = () => {
  const navigate = useNavigate();
  const [dietType, setDietType] = useState("");
  const { orderData, dispatch } = useContext(OrderDataContext);
  const { diet, lactosy, gluten, excluded1, excluded2 } = orderData;

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   loadProductsAPI()
  //     .then((item) => item)
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  // temporary data

  const products = [
    "pomidor",
    "cebula",
    "kapusta",
    "groch",
    "czosnek",
    "orzechy",
    "wątróbka",
    "suszone owoce",
    "cukinia",
    "szpinak",
    "rukola",
    "grzyby",
    "szczypiorek",
    "brokuł",
    "ser żółty",
    "maślanka",
    "kefir",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid: formIsValid },
  } = useForm<DataThirdStageTypes>({
    resolver: yupResolver(thirdStageValidateSchema),
    mode: "all",
    defaultValues: {
      diet,
      lactosy,
      gluten,
      excluded1,
      excluded2,
    },
  });

  const onClickHandler = handleSubmit((data, event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log(data);
      dispatch({ type: "setFirstStageData", element: data });
      navigate("/diet-form-and-calc-BMI/4");
    }
  });

  const radioFields = [
    {
      value: "fit",
      label: "Dieta Fit",
      desc: "Odchudzająca. Skuteczna dla osób chcących stracić zbędne kilogramy.",
    },
    {
      value: "vegetarian",
      label: "Dieta Wegetariańska",
      desc: "Pyszna dieta wegetariańska zgodna z zaleceniami światowej organizacji zdrowia.",
    },
    {
      value: "keto",
      label: "Dieta ketogeniczna",
      desc: "Zwiększenie ilości tłuszczu, ograniczenie węglowodanów oraz umiarkowane spożycie białka.",
    },
    {
      value: "high-protein",
      label: "Dieta wysokobiałkowa",
      desc: "Urozmaicona dieta, zapewniająca uczucie sytości, dzięki daniom o dużej zawartości białka.",
    },
  ];
  const searchFields = [
    { name: "excluded1", value: excluded1, label: "Składnik 1" },
    { name: "excluded2", value: excluded2, label: "Składnik 2" },
  ];

  return (
    <StyledThirdStage>
      <Form>
        <FlexContainer>
          <Container width="45%">
            {radioFields.map(({ value, label, desc }) => (
              <Radio
                register={register}
                key={value}
                name="diet"
                value={value}
                onClick={() => setDietType(value)}
                active={dietType === value}
              >
                <Text weight="bold"> {label}</Text>
                <RadioInfo>{desc}</RadioInfo>
              </Radio>
            ))}
            {errors?.diet && <Error err={errors.diet?.message} />}
          </Container>
          <Container width="45%">
            <div className="box">
              <Label>Dieta bezglutenowa?</Label>
              <Checkbox name="gluten" onClick={() => console.log(gluten)} />
            </div>
            <div className="box">
              <Label>Dieta bez laktozy?</Label>
              <Checkbox name="lactosy" onClick={() => console.log(lactosy)} />
            </div>
            <Subtitle>Wykluczenia z diety:</Subtitle>
            {searchFields.map(({ name, value, label }) => (
              <React.Fragment key={name}>
                <Label>{label}</Label>
                <Search
                  register={register}
                  items={products}
                  name={name}
                  value={value}
                  isMutable={true}
                />
              </React.Fragment>
            ))}
          </Container>
        </FlexContainer>

        <ButtonBox>
          <Button
            variant="secondary"
            onClick={() => navigate("/diet-form-and-calc-BMI/2")}
          >
            Wstecz
          </Button>
          <Button type="submit" onClick={onClickHandler}>
            Dalej
          </Button>
        </ButtonBox>
      </Form>
    </StyledThirdStage>
  );
};
