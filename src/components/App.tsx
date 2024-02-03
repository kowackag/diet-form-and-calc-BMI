import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { FirstStage } from "./FirstStage/FirstStage";
import { SecondStage } from "./SecondStage/SecondStage";
import { ThirdStage } from "./ThirdStage/ThirdStage";
import LastStage from "./LastStage/LastStage";
import Complete from "./Complete/Complete";
import ProgressBar from "./ProgresBar/ProgressBar";
//import { addOrdersAPI } from "./DataAPI";

import { OrderDataContext } from "./context";
import { useHandler } from "./reducer";
import { useStorage } from "services/useStorage";
import { useLocalStorage } from "services/useLocalStorage";
import { Wrapper, Title } from "./App.styled";

const App: React.FC = () => {
  const [orderData, dispatch] = useHandler();
  const [getStage] = useLocalStorage();
  const [, setOrderLS] = useStorage("order", orderData);

  useEffect(() => {
    setOrderLS(orderData);
  }, [orderData]);

  const getProgress = (stage: number) => {
    const progress = 25 * (stage - 1);
    return progress;
  };
  const stage = getStage("stage");

  return (
    <OrderDataContext.Provider value={{ orderData, dispatch }}>
      <Wrapper>
        <Title>Konfigurator diety</Title>
        <Routes>
          <Route path={"diet-form-and-calc-BMI/1"} element={<FirstStage />} />
          <Route path={"diet-form-and-calc-BMI/2"} element={<SecondStage />} />
          <Route path={"diet-form-and-calc-BMI/3"} element={<ThirdStage />} />
          <Route path={"diet-form-and-calc-BMI/4"} element={<LastStage />} />
          <Route
            path={"diet-form-and-calc-BMI/complete"}
            element={<Complete />}
          />
        </Routes>
        <ProgressBar progress={getProgress(Number(stage))}></ProgressBar>
      </Wrapper>
    </OrderDataContext.Provider>
  );
};

export default App;
