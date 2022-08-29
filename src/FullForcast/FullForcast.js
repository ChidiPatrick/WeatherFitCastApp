import React, { useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./FullForcast.module.scss";
import WeatherUpdate from "../components/weatherUpdate/weatherUpdate";
import DailyForcast from "../DailyForcast/DailyForcast";
import { Routes, Route, Link } from "react-router-dom";

const FullForcast = (props) => {
  const { maxTemp, minTemp, dates, weatherCode } = props;

  return (
    <div className={styles.FullForcast}>
      {console.log(maxTemp)}
      {maxTemp ? (
        maxTemp.map((temp, i) => {
          return (
            <DailyForcast
              maxTemp={maxTemp[i]}
              minTemp={minTemp[i]}
              weatherCode={weatherCode[i]}
              date={dates[i]}
              dates={dates}
              key={i}
            />
          );
        })
      ) : (
        <p>Not rendering for a reason!</p>
      )}
    </div>
  );
};
export default FullForcast;
