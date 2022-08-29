import React from "react";
import styles from "./DailyForcast.module.scss";
const DailyForcast = (props) => {
  const { maxTemp, minTemp, dates, weatherCode, date, history } = props;
  const newDate = new Date(date);

  let formatedDate = Intl.DateTimeFormat("en", {
    day: "numeric",

    month: "numeric",
  }).format(newDate);
  let weekday = Intl.DateTimeFormat("en", {
    // day: "numeric",
    weekday: "short",
    // month: "short",
  }).format(newDate);

  if (weatherCode >= 1 && weatherCode <= 3) {
    return (
      <div className={styles.dailyForcast}>
        <div className={styles.forcastWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.Date}>
              <span>{weekday}</span>
              <span>
                {" "}
                {dates.indexOf(date) === 0
                  ? `Today ${formatedDate}`
                  : formatedDate}
              </span>
            </div>
            <span className={styles.maxTemperature}> {maxTemp}°C</span>
            <figure className={styles.dailyForcastFigure}>
              <img
                src="./Images/imgs/clouds.gif"
                className={styles.forcastImage}
                alt="weatther image"
              />
            </figure>
            <span className={styles.minTemperature}> {minTemp}°C</span>
          </div>
        </div>
      </div>
    );
  } else if (weatherCode >= 51 && weatherCode <= 55) {
    return (
      <div className={styles.dailyForcast}>
        <div className={styles.forcastWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.Date}>
              <span>{weekday}</span>
              <span>
                {" "}
                {dates.indexOf(date) === 0
                  ? `Today ${formatedDate}`
                  : formatedDate}
              </span>
            </div>
            <span className={styles.maxTemperature}> {maxTemp}°C</span>
            <figure className={styles.dailyForcastFigure}>
              <img
                src="./Images/imgs/drizzle.gif"
                className={styles.forcastImage}
                alt="weatther image"
              />
            </figure>
            <span className={styles.minTemperature}> {minTemp}°C</span>
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 71 && weatherCode <= 75) {
    return (
      <div className={styles.dailyForcast}>
        <div className={styles.forcastWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.Date}>
              <span>{weekday}</span>
              <span>
                {" "}
                {dates.indexOf(date) === 0
                  ? `Today ${formatedDate}`
                  : formatedDate}
              </span>
            </div>
            <span className={styles.maxTemperature}> {maxTemp}°C</span>
            <figure className={styles.dailyForcastFigure}>
              <img
                src="./Images/imgs/snow.gif"
                className={styles.forcastImage}
                alt="weatther image"
              />
            </figure>
            <span className={styles.minTemperature}> {minTemp}°C</span>
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 80 && weatherCode <= 82) {
    return (
      <div className={styles.dailyForcast}>
        <div className={styles.forcastWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.Date}>
              <span>{weekday}</span>
              <span>
                {" "}
                {dates.indexOf(date) === 0
                  ? `Today ${formatedDate}`
                  : formatedDate}
              </span>
            </div>
            <span className={styles.maxTemperature}> {maxTemp}°C</span>
            <figure className={styles.dailyForcastFigure}>
              <img
                src="./Images/imgs/rain.gif"
                className={styles.forcastImage}
                alt="weatther image"
              />
            </figure>
            <span className={styles.minTemperature}> {minTemp}°C</span>
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    return (
      <div className={styles.dailyForcast}>
        <div className={styles.forcastWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.Date}>
              <span>{weekday}</span>
              <span>
                {" "}
                {dates.indexOf(date) === 0
                  ? `Today ${formatedDate}`
                  : formatedDate}
              </span>
            </div>
            <span className={styles.maxTemperature}> {maxTemp}°C</span>
            <figure className={styles.dailyForcastFigure}>
              <img
                src="./Images/imgs/thunder.gif"
                className={styles.forcastImage}
                alt="weatther image"
              />
            </figure>
            <span className={styles.minTemperature}> {minTemp}°C</span>
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode === 0) {
    return (
      <div className={styles.dailyForcast}>
        <div className={styles.forcastWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.Date}>
              <span>{weekday}</span>
              <span>
                {" "}
                {dates.indexOf(date) === 0
                  ? `Today ${formatedDate}`
                  : formatedDate}
              </span>
            </div>
            <span className={styles.maxTemperature}> {maxTemp}°C</span>
            <figure className={styles.dailyForcastFigure}>
              <img
                src="./Images/imgs/sun.gif"
                className={styles.forcastImage}
                alt="weatther image"
              />
            </figure>
            <span className={styles.minTemperature}> {minTemp}°C</span>
          </div>
        </div>
      </div>
    );
  }
};
export default DailyForcast;
