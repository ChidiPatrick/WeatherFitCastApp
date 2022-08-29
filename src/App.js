import logo from "./logo.svg";
import "./App.scss";
// import React, { Component, useState } from "react";
// import Header from "./components/Header/header";
// import Video from "./videos/moving-cloud-anime.mp4";
// import listIcon from "./resources/sprite.svg#icon-list";
// import WeatherUpdate, {
//   MyButton,
// } from "./components/weatherUpdate/weatherUpdate";
// import axios from "axios";
// import styled from "styled-components";
// import { styledshowMoreBtn } from "./components/styled/styled.components";
// import classnames from "classnames";
// import classNames from "classnames";
// import styles from "./components/Header/Header.module.scss";
// import DayTemp from "./components/Header/DayTemperature/DayTemperature";
// import VideoElement from "./components/Header/BackgroundVideos/BackgroundVideo";
// import MoreDetails from "./components/MoreDetails/MoreDetails";
// import { ImLocation2 } from "react-icons/im";
// import Button from "./components/Button/Button";
// import Chart from "./components/Charts/Charts";
// import FullWeatherInfo from "./components/MyRoutes/MyRoutes";
import { Link, Route, Routes, Switch, useNavigate } from "react-router-dom";
import FullForcast from "./FullForcast/FullForcast";
// import UpdateStyles from "./components/weatherUpdate/weatherInfo.module.scss";
// import { useState, useEffect } from "react";
// import { useCallback } from "react";
import MyApp, { forcastData } from "./components/MyApp/MyApp";
// const { maxTemp, minTemp, weatherCode, dates } = forcastData;
// console.log(forcastData);
import Spinner from "./components/LoadingSpinner/LoadingSpinner";
const App = (props) => {
  /////Initialize state
  return (
    <MyApp />

    // <Route path="/" exact strict element={} />
  );
  // const [cordinates, setCordinates] = useState({
  //   longitude: null,
  //   latitude: null,
  //   city: "Awka",
  //   country: "Nigeria",
  // });
  // const [weatherData, setWeatherData] = useState({
  //   weatherData: null,
  //   maxTemp: null,
  //   minTemp: null,
  //   weatherCode: 3,
  //   windSpeeds: 145,
  //   headerTemp: null,
  //   lessTemp: null,
  //   temp: null,
  //   date: "2022-07-14",
  // });
  // const getLocation = useCallback(async () => {
  //   const geoData = await axios("https://get.geojs.io/v1/ip/geo.json");
  //   console.log(geoData);
  //   const { longitude, latitude, city, country } = geoData.data;
  //   const cordsData = {
  //     longitude: longitude,
  //     latitude: latitude,
  //     city: city,
  //     country: country,
  //   };
  //   const cityCordinate = [parseFloat(longitude), parseFloat(latitude)];

  //   return [cityCordinate, cordsData];
  // }, []);
  // // async function getLocation() {

  // // }
  // const fetchWeatherData = useCallback(async (longitude, latitude) => {
  //   const weatherData = await axios(
  //     `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=UTC&daily=temperature_2m_max,temperature_2m_min&daily=weathercode,windspeed_10m_max,sunrise`
  //   );
  //   console.log(weatherData);
  //   return weatherData;
  // }, []);
  // const navigate = useNavigate();
  // ////USE EFFECT HOOK///////////////

  // useEffect(() => {
  //   getAllWeatherData();
  // }, [getLocation, fetchWeatherData]);
  // ///////////////////////////////////

  // async function getAllWeatherData() {
  //   //Get fetched data////
  //   //////////////////////////
  //   const cords = await getLocation();
  //   const weatherData = await fetchWeatherData(cords[0][0], cords[0][1]);
  //   setCordinates(cords[1]);
  //   console.log(cords);
  //   //Destructure fetched data///
  //   const {
  //     temperature_2m_max: maxTemp,
  //     temperature_2m_min: minTemp,
  //     time: date,
  //     weathercode,
  //     windspeed_10m_max: windSpeeds,
  //   } = weatherData.data.daily;
  //   console.log(weatherData);
  //   console.log(`Cordinates: ${cords}`);
  //   ////////////////////////////
  //   console.log(weathercode);
  //   const lessTemp = maxTemp.slice(0, 3);
  //   const headerTemp = maxTemp[0];
  //   const temp = lessTemp;
  //   /////////////////////////////
  //   //////////////////////////////
  //   const weatherDataObject = {
  //     maxTemp: maxTemp,
  //     minTemp: minTemp,
  //     date: date,
  //     weatherCode: weathercode,
  //     windSpeeds: windSpeeds,
  //     temp: temp,
  //     headerTemp: headerTemp,
  //     lessTemp: lessTemp,
  //   };
  //   console.log(weatherDataObject);

  //   ///Update state//////////////
  //   setWeatherData(weatherDataObject);
  // }
  // // async function getAllData() {
  // //   const cords = await getLocation();
  // //   const weatherData = await fetchWeatherData(cords[0][0], cords[0][1]);
  // //   const data = { cords, weatherData };
  // //   return data;
  // // }
  // const {
  //   maxTemp,
  //   minTemp,
  //   weatherCode,
  //   date,
  //   windSpeeds,
  //   headerTemp,
  //   lessTemp,
  //   temp,
  // } = weatherData;
  // const { city } = cordinates;
  // console.log(weatherCode);
  // const tempMax = maxTemp;
  // const tempMin = minTemp;

  // let counter = 0;

  // return (
  //   <MyApp className="App">
  //     <Header className="header">
  //       <VideoElement src="./videos/cloudy.mp4" />
  //       <DayTemp
  //         DayTemp={weatherData.headerTemp}
  //         weatherCode={weatherCode[0]}
  //       />
  //       <div className="city">
  //         <ImLocation2 /> {cordinates.city}, {cordinates.country}
  //       </div>
  //     </Header>
  //     <div className={UpdateStyles.weatherUpdateWrapper}>
  //       {temp ? (
  //         temp.map((temp, i) => {
  //           counter++;

  //           return (
  //             <WeatherUpdate
  //               key={counter}
  //               // className={className}
  //               maxTemp={temp}
  //               minTemp={tempMin[i]}
  //               weatherCode={weatherCode[i]}
  //               dates={date}
  //               date={date[i]}
  //             />
  //           );
  //         })
  //       ) : (
  //         <p>Page not loaded!</p>
  //       )}
  //     </div>
  //     {temp ? <Chart maxTemp={maxTemp} minTemp={minTemp} /> : null}
  //     {/* <FullForcast /> */}
  //     <MoreDetails windSpeed={windSpeeds} city={city} maxTemp={headerTemp} />
  //     <Link to="/fullForcast">Full Forcast</Link>
  //     <Link to="/about">about</Link>
  //     <Routes>
  //       <Route
  //         path="/"
  //         exact
  //         strict
  //         element={
  //           <FullForcast
  //             maxTemp={maxTemp}
  //             minTemp={tempMin}
  //             weatherCode={weatherCode}
  //             dates={date}
  //             // date={date}
  //           />
  //         }
  //       />
  //       <Route path="/about" exact strict element={<About />} />
  //       <Route path="/another" element={<Another />} />
  //     </Routes>
  //   </MyApp>
  // );
};

export default App;
