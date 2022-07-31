import React from "react";
import { Routes, Route } from "react-router";
import styles from "./FullForcast.module.scss";
import WeatherUpdate from "../components/weatherUpdate/weatherUpdate";
import DailyForcast from "../DailyForcast/DailyForcast";
const FullForcast = (props) => {
  const { maxTemp, minTemp, dates, weatherCode, date } = props;
  console.log(`Max temp: ${maxTemp}`);
  return (
    <div className={styles.FullForcast}>
      {maxTemp ? (
        maxTemp.map((temp, i) => {
          return (
            <DailyForcast
              maxTemp={maxTemp[i]}
              minTemp={minTemp[i]}
              weatherCode={weatherCode[i]}
              date={dates[i]}
              dates={dates}
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
//  <WeatherUpdate
// dates={dates}
// maxTemp={temp}
// minTemp={maxTemp[i]}
// weatherCode={weatherCode[i]}
// date={dates[i]}
// />
{
  /* // if (weatherCode >= 1 && weatherCode <= 3) { */
  //     return (
  //       <div className={className}>
  //         <div className="">
  //           <figure className="weather-icon">
  //             <img
  //               src="./Images/imgs/clouds.gif"
  //               className={styles.weatherImage}
  //               alt="weatther image"
  //             />
  //           </figure>
  //           <div>
  //             {dates.indexOf(date) === 0 ? "Today" : formatedDate}: Cloudy{" "}
  //             {maxTemp}°C/{minTemp}°C
  //           </div>
  //         </div>
  //         {/* <wrapper></wrapper> */}
  //       </div>
  //     );
}
