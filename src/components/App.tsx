import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import FirstStage from "./FirstStage/FirstStage";
import SecondStage from "./SecondStage/SecondStage";
import ThirdStage from "./ThirdStage/ThirdStage";
import LastStage from "./LastStage/LastStage";
import Complete from "./Complete/Complete";
import ProgressBar from "./ProgresBar/ProgressBar";
import { addOrdersAPI } from "./DataAPI";
import { OrderDataContext } from "./context";
import { useHandler } from "./reducer";
import {
  validateDataFirstStage,
  validateDataSecondStage,
  validateDataThirdStage,
  validateDataLastStage,
} from "./validateData";

import { Wrapper, Title } from "./App.styled";

const App = () => {
  const [orderData, dispatch] = useHandler();
  const [stage, setStage] = useState(1);
  const [bmi, setBMI] = useState("");
  const [err, setErr] = useState({});

  const countBMI = (weight: number, height: number) => {
    const bmi = (weight / Math.pow(height, 2)).toFixed(1);
    return bmi;
  };

  const handleForm = (e) => {
    e.preventDefault();
    let errors = {};
    switch (stage) {
      case 1:
        errors = validateDataFirstStage(orderData);
        break;
      case 2:
        errors = validateDataSecondStage(orderData);
        break;
      case 3:
        errors = validateDataThirdStage(orderData);
        break;
      case 4:
        errors = validateDataLastStage(orderData);
        break;
    }

    setErr({ ...errors });
    if (Object.keys(errors).length === 0) {
      if (stage === 1) {
        const { weight, height } = orderData;
        const bmi = countBMI(Number(weight), Number(height) / 100);
        setBMI(bmi);
      }
      if (stage === 4) {
        addOrdersAPI(orderData);
      }
      setStage((prev) => ++prev);
    }
  };
  console.log(stage);
  const chooseElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "choose", element: e.target });
  };

  const prevForm = (e) => {
    e.preventDefault();
    setStage((prev) => --prev);
  };

  const reset = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStage(1);
    dispatch({ type: "reset" });
  };

  const getProgress = (stage: number) => {
    const progress = 25 * (stage - 1);
    return progress;
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "change", element: e.target });
  };

  console.log(orderData);
  return (
    <OrderDataContext.Provider value={{ orderData, dispatch }}>
      <Wrapper>
        <Title>Konfigurator diety</Title>
        <Routes>
          <Route
            path={"/1"}
            element={
              <FirstStage
                state={orderData}
              />
            }
          />
          <Route
            path={"/2"}
            element={
              <SecondStage
                state={orderData}
                active={stage === 2}
                bmi={orderData.bmi}
                back={prevForm}
                onSubmit={handleForm}
                onChange={changeValue}
                errors={err}
              />
            }
          />
          <Route
            path={"/3"}
            element={
              <ThirdStage
                state={orderData}
                back={prevForm}
                onSubmit={handleForm}
                onChange={changeValue}
                errors={err}
                onChoose={chooseElement}
              />
            }
          />
          <Route
            path={"/4"}
            element={
              <LastStage
                state={orderData}
                active={stage === 4}
                back={prevForm}
                onSubmit={handleForm}
                onChange={changeValue}
                errors={err}
              />
            }
          />
          <Route
            path={"/compleate"}
            element={<Complete active={stage === 5} reset={reset} />}
          />
        </Routes>
        <ProgressBar progress={getProgress(stage)}></ProgressBar>
      </Wrapper>
    </OrderDataContext.Provider>
  );
};

export default App;
