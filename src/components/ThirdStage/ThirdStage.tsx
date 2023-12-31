import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Radio } from "common/components/Radio/Radio";
import { Container } from "common/components/Container/Container.styled";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { Button } from "common/components/Button/Button";
import { Label } from "common/components/Label/Label";
import { Error } from "common/components/Error/Error";
import { Search } from "../../common/components/Search/Search";
import Checkbox from "../Checkbox/Checkbox";
import { Subtitle } from "common/components/Subtitle/Subtitle";
//import { loadProductsAPI } from "../DataAPI";

import { validateDataThirdStage } from "components/validateData";
import { OrderDataContext } from "components/context";

import { StyledThirdStage, Form } from "./ThirdStage.styled";

import { RadioInfo } from "common/components/Radio/Radio.styled";
import { Text } from "common/components/Text/Text.styled";

export const ThirdStage = () => {
  const { orderData, dispatch } = useContext(OrderDataContext);
  const navigate = useNavigate();

  const [err, setErr] = useState(null);

  const { diet, excluded1, excluded2 } = orderData;
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   loadProductsAPI()
  //     .then((item) => item)
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  const changeValue = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "change", element: e.target as HTMLInputElement });
  };

  const chooseElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "choose", element: e.target });
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      diet: orderData.diet,
    };

    const errors = validateDataThirdStage(data);
    setErr({ ...errors });
    if (Object.keys(errors).length === 0) {
      navigate("/diet-form-and-calc-BMI/4");
    }
  };

  const radioFields = [
    {
      name: "diet",
      value: "fit",
      label: "Dieta Fit",
      desc: "Odchudzająca. Skuteczna dla osób chcących stracić zbędne kilogramy.",
    },
    {
      name: "diet",
      value: "vegetarian",
      label: "Dieta Wegetariańska",
      desc: "Pyszna dieta wegetariańska zgodna z zaleceniami światowej organizacji zdrowia.",
    },
    {
      name: "diet",
      value: "keto",
      label: "Dieta ketogeniczna",
      desc: "Zwiększenie ilości tłuszczu, ograniczenie węglowodanów oraz umiarkowane spożycie białka.",
    },
    {
      name: "diet",
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
      <Form onSubmit={handleForm}>
        <Container width="45%">
          {radioFields.map(({ name, value, label, desc }) => (
            <Radio
              key={value}
              name={name}
              value={value}
              onClick={changeValue}
              active={diet === value}
            >
              <Text weight="bold"> {label}</Text>
              <RadioInfo>{desc}</RadioInfo>
            </Radio>
          ))}
          {err?.diet && <Error err={err.diet} />}
        </Container>
        <Container width="45%">
          <div className="box">
            <Label>Dieta bezglutenowa?</Label>
            <Checkbox name="gluten" onClick={changeValue} />
          </div>
          <div className="box">
            <Label>Dieta bez laktozy?</Label>
            <Checkbox name="lactosy" onClick={changeValue} />
          </div>
          <Subtitle>Wykluczenia z diety:</Subtitle>
          {searchFields.map(({ name, value, label }) => (
            <React.Fragment key={name}>
              <Label>{label}</Label>
              <Search
                items={products}
                name={name}
                value={value}
                onChange={changeValue}
                onChoose={chooseElement}
                isMutable={true}
              />
            </React.Fragment>
          ))}
        </Container>
        <ButtonBox>
          <Button
            onClick={() => navigate("/diet-form-and-calc-BMI/2")}
            type="button"
          >
            Wstecz
          </Button>
          <Button>Dalej</Button>
        </ButtonBox>
      </Form>
    </StyledThirdStage>
  );
};
