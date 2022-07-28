import styled from "styled-components";
import wrapper from "../styled/styled.components";
import styles from "./weatherInfo.module.scss";
import classnames from "classnames";
// import Images from "./cloudy.png ";

const WeatherUpdate = (props) => {
  const { children, className, maxTemp, minTemp, weatherCode, dates, date } =
    props;
  const classNames = classnames("weather-info");
  const newDate = new Date(date);
  let formatedDate = Intl.DateTimeFormat("en", {
    day: "numeric",
    weekday: "short",
    month: "short",
  }).format(newDate);
  if (weatherCode >= 1 && weatherCode <= 3) {
    return (
      <div className={className}>
        <div className="">
          <figure className="weather-icon">
            <img
              src="./Images/imgs/clouds.gif"
              className={styles.weatherImage}
              alt="weatther image"
            />
          </figure>
          <div>
            {dates.indexOf(date) === 0 ? "Today" : formatedDate}: Cloudy{" "}
            {maxTemp}°C/{minTemp}°C
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 51 && weatherCode <= 55) {
    return (
      <div className={className}>
        <div className="">
          <figure className="weather-icon">
            <img
              src="./Images/imgs/drizzle.gif"
              className={styles.weatherImage}
              alt="weatther image"
            />
          </figure>
          <div>
            {dates.indexOf(date) === 0 ? "Today" : formatedDate}: Drizzle{" "}
            {maxTemp}°C/{minTemp}°C
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 71 && weatherCode <= 75) {
    return (
      <div className={className}>
        <div className="">
          <figure className="weather-icon">
            <img
              src="./Images/imgs/snow.gif"
              className={styles.weatherImage}
              alt="weatther image"
            />
          </figure>
          <div>
            {dates.indexOf(date) === 0 ? "Today" : formatedDate}: Snow Fall{" "}
            {maxTemp}°C/{minTemp}°C
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 80 && weatherCode <= 82) {
    return (
      <div className={className}>
        <div className="">
          <figure className="weather-icon">
            <img
              src="./Images/imgs/rain.gif"
              className={styles.weatherImage}
              alt="weatther image"
            />
          </figure>
          <div>
            {dates.indexOf(date) === 0 ? "Today" : formatedDate}: Rain showers{" "}
            {maxTemp}°C/{minTemp}°C
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    return (
      <div className={className}>
        <div className="">
          <figure className="weather-icon">
            <img
              src="./Images/imgs/thunder.gif"
              className={styles.weatherImage}
              alt="weatther image"
            />
          </figure>
          <div>
            {dates.indexOf(date) === 0 ? "Today" : formatedDate}:Thunder Storm{" "}
            {maxTemp}°C/{minTemp}°C
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  } else if (weatherCode === 0) {
    return (
      <div className={className}>
        <div className="">
          <figure className="weather-icon">
            <img
              src="./Images/imgs/sun.gif"
              className={styles.weatherImage}
              alt="weatther image"
            />
          </figure>
          <div>
            {dates.indexOf(date) === 0 ? "Today" : formatedDate}:Clear sky{" "}
            {maxTemp}°C/{minTemp}°C
          </div>
        </div>
        {/* <wrapper></wrapper> */}
      </div>
    );
  }
};
export const MyButton = styled.button`
  background-color: green;
  color: black;
  width: 200px;
  padding: 20px;
`;
export default WeatherUpdate;
