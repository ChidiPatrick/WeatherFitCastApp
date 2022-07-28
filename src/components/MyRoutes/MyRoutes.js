import React, { Component } from "react";
import styles from "./MyRoutes.module.scss";
import WeatherUpdate from "../weatherUpdate/weatherUpdate";
class FullWeatherInfo extends Component {
  // const {maxTemp} = this.props
  state = {};
  render() {
    const { maxTemp } = this.props;
    console.log(maxTemp);
    return <div className={styles.FullForcast}></div>;
  }
}
export default FullWeatherInfo;
