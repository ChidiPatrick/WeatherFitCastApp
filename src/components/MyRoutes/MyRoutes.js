import React, { Component } from "react";
import styles from "./MyRoutes.module.scss";
import WeatherUpdate from "../weatherUpdate/weatherUpdate";
import FullForcast from "../../FullForcast/FullForcast";
import { Routes, Route } from "react-router";
const FullWeatherInfo = (props) => {
  const { maxTemp } = props;
  console.log(maxTemp);
  return (
    <Routes>
      <Route path="/fullForcast" exact strict element={<FullForcast />} />
    </Routes>
  );
};

export default FullWeatherInfo;
