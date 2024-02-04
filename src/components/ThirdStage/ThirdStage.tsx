import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "common/components/Container/Container.styled";
import { FlexContainer } from "common/components/FlexContainer/FlexContainer.styled";
import { ButtonBox } from "common/components/ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";
import { Search } from "common/components/Search/Search";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Radio } from "common/components/Radio/Radio";
import { RadioInfo } from "common/components/Radio/Radio.styled";
import { Text } from "common/components/Text/Text.styled";
import { StyledThirdStage, Form } from "./ThirdStage.styled";
// import { loadProductsAPI } from "../DataAPI";

import { thirdStageValidateSchema } from "./thirdStageValidationSchema";
import { OrderDataContext } from "store/context";
import { useLocalStorage } from "common/hook/useLocalStorage";
import { DataThirdStageTypes } from "common/types";

export const ThirdStage = () => {
  const {
    orderData: { diet, lactosy, gluten, excluded1, excluded2 },
    dispatch,
  } = useContext(OrderDataContext);
  const navigate = useNavigate();
  const [, setStage] = useLocalStorage();

  const [dietType, setDietType] = useState(diet);
  // const [st, setItem] = useStorage("stage", 3);
  // console.log(st);
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
      dispatch({ type: "setFirstStageData", element: data });
      setStage("stage", 4);
      navigate("/diet-form-and-calc-BMI/4");
    }
  });

  const backToPreviousStage = () => {
    setStage("stage", 2);
    navigate("/diet-form-and-calc-BMI/2");
  };

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
          <Container width="45%" position="relative">
            {radioFields.map(({ value, label, desc }) => (
              <Radio
                register={register}
                key={value}
                name="diet"
                value={value}
                onClick={() => setDietType(value)}
                active={dietType === value}
              >
                <Text weight="500" mb="6px">
                  {label}
                </Text>
                <RadioInfo>{desc}</RadioInfo>
              </Radio>
            ))}
            {errors?.diet && <Error err={errors.diet?.message} />}
          </Container>
          <Container width="45%">
            <div className="box">
              <Text weight="500" size="14px" mt="16px">
                Dieta bezglutenowa?
              </Text>
              <Checkbox register={register} name="gluten" />
            </div>
            <div className="box">
              <Text weight="500" size="14px" mt="16px">
                Dieta bez laktozy?
              </Text>
              <Checkbox register={register} name="lactosy" />
            </div>
            <Text weight="500" mt="26px">
              Wykluczenia z diety:
            </Text>
            {searchFields.map(({ name, value, label }) => (
              <React.Fragment key={name}>
                <Label>{label}</Label>
                <Search
                  valid={true}
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
          <Button variant="secondary" onClick={backToPreviousStage}>
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
