import React from "react";
import styles from "./DayTemperature.module.scss";
const ShortWeatherSummary = (props) => {
  const { weatherCode } = props;
  if (props.weatherCode >= 0 && props.weatherCode <= 3) {
    return (
      <div className={styles.DayTemp}>
        <span className={styles.headerTemp}>{props.DayTemp}°C</span>

        <span className={styles.weatherCondition}>Cloudy</span>
      </div>
    );
  } else if (props.weatherCode >= 51 && props.weatherCode <= 55) {
    return (
      <div className={styles.DayTemp}>
        <span className={styles.headerTemp}>{props.DayTemp}°C</span>

        <span className={styles.weatherCondition}>Drizzle</span>
      </div>
    );
  } else if (props.weatherCode >= 71 && props.weatherCode <= 75) {
    return (
      <div className={styles.DayTemp}>
        <span className={styles.headerTemp}>{props.DayTemp}°C</span>

        <span className={styles.weatherCondition}>Snow Fall</span>
      </div>
    );
  } else if (props.weatherCode >= 80 && props.weatherCode <= 82) {
    return (
      <div className={styles.DayTemp}>
        <span className={styles.headerTemp}>{props.DayTemp}°C</span>

        <span className={styles.weatherCondition}>Rain Showers</span>
      </div>
    );
  } else if (props.weatherCode >= 95 && props.weatherCode <= 99) {
    return (
      <div className={styles.DayTemp}>
        <span className={styles.headerTemp}>{props.DayTemp}°C</span>

        <span className={styles.weatherCondition}>Thunder storm</span>
      </div>
    );
  } else if (props.weatherCode === 0) {
    return (
      <div className={styles.DayTemp}>
        <span className={styles.headerTemp}>{props.DayTemp}°C</span>

        <span className={styles.weatherCondition}>Clear Sky</span>
      </div>
    );
  }
};
export default ShortWeatherSummary;
