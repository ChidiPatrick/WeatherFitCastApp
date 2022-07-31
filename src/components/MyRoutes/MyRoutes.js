import React, { Component } from "react";
import styles from "./MyRoutes.module.scss";
import WeatherUpdate from "../weatherUpdate/weatherUpdate";
import FullForcast from "../../FullForcast/FullForcast";
import { Routes, Route } from "react-router";
class FullWeatherInfo extends Component {
  // state = { maxTemp: 30 };
  render() {
    const { maxTemp } = this.props;
    console.log(maxTemp);
    // let counter = 0;
    return (
      <Routes>
        <Route path="/fullForcast" exact strict element={<FullForcast />} />
      </Routes>
    );
  }
}
export default FullWeatherInfo;
