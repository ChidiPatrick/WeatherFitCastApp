import React from "react";
import Header from "../Header/header";
import axios from "axios";
import DayTemp from "../Header/DayTemperature/DayTemperature";
import VideoElement from "../Header/BackgroundVideos/BackgroundVideo";
import MoreDetails from "../MoreDetails/MoreDetails";
import { ImLocation2 } from "react-icons/im";
import Chart from "../Charts/Charts";
import { useNavigate } from "react-router-dom";
import UpdateStyles from "../weatherUpdate/weatherInfo.module.scss";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import WeatherUpdate from "../weatherUpdate/weatherUpdate";
import Spinner from "../LoadingSpinner/LoadingSpinner";
import { useGeolocated } from "react-geolocated";
export let forcastData;

const MyApp = (props) => {
  const {coords,isGeolocationAvailable,isGeolocationEnabled} = useGeolocated({
    positionOptions: {enableHighAccuracy: false},
    userDecisionTimeout: 5000,
  })
  const [cordinates, setCordinates] = useState({
    longitude: null,
    latitude: null,
    city: "Awka",
    country: "Nigeria",
  });
  const [weatherData, setWeatherData] = useState({
    weatherData: null,
    maxTemp: null,
    minTemp: null,
    weatherCode: 3,
    windSpeeds: 145,
    headerTemp: null,
    lessTemp: null,
    temp: null,
    dates: "2022-07-14",
  });
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = useCallback(async () => {
    const geoData = await axios("https://get.geojs.io/v1/ip/geo.json");
    const { longitude, latitude, city, country } = geoData.data;
    const cordsData = {
      longitude: longitude,
      latitude: latitude,
      city: city,
      country: country,
    };
    const cityCordinate = [parseFloat(longitude), parseFloat(latitude)];
    
    return [cityCordinate, cordsData];
  }, []);
  const fetchWeatherData = useCallback(async (longitude, latitude) => {
    const weatherData = await axios(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=UTC&daily=temperature_2m_max,temperature_2m_min&daily=weathercode,windspeed_10m_max,sunrise`
    );
    if (weatherData.status >= 200) {
      setIsLoading(false);
    }
    return weatherData;
  }, []);
  const navigate = useNavigate();
  ////USE EFFECT HOOK///////////////

  useEffect(() => {
    getAllWeatherData();
  }, [getLocation, fetchWeatherData]);
  ///////////////////////////////////

  async function getAllWeatherData() {
    //Get fetched data////
    //////////////////////////
    const cords = await getLocation();
    const weatherData = await fetchWeatherData(cords[0][0], cords[0][1]);
    setCordinates(cords[1]);
    const {
      temperature_2m_max: maxTemp,
      temperature_2m_min: minTemp,
      time: date,
      weathercode,
      windspeed_10m_max: windSpeeds,
    } = weatherData.data.daily;
    ////////////////////////////
    const lessTemp = maxTemp.slice(0, 6);
    const headerTemp = maxTemp[0];
    const temp = lessTemp;
    /////////////////////////////
    //////////////////////////////
    const weatherDataObject = {
      maxTemp: maxTemp,
      minTemp: minTemp,
      dates: date,
      weatherCode: weathercode,
      windSpeeds: windSpeeds,
      temp: temp,
      headerTemp: headerTemp,
      lessTemp: lessTemp,
    };
    forcastData = { ...weatherDataObject };
    ///Update state//////////////
    setWeatherData(weatherDataObject);
  }

  const {
    maxTemp,
    minTemp,
    weatherCode,
    dates,
    windSpeeds,
    headerTemp,
    lessTemp,
    temp,
  } = weatherData;
  const { city } = cordinates;
  const tempMax = maxTemp;
  const tempMin = minTemp;
  let counter = 0;

  /////////////////
  const spinner = <Spinner />;
  const app = (
    <div className="App">
      <Header className="header">
        <VideoElement src="./videos/cloudy.mp4" />
        <DayTemp
          DayTemp={weatherData.headerTemp}
          weatherCode={weatherCode[0]}
        />
        <div className="cityWrapper">
          <div className="city">
            <ImLocation2 /> {cordinates.city} {cordinates.country}
          </div>
        </div>
      </Header>
      <div className={UpdateStyles.weatherUpdateWrapper}>
        {temp ? (
          temp.map((temp, i) => {
            counter++;
            return (
              <WeatherUpdate
                key={counter}
                maxTemp={temp}
                minTemp={tempMin[i]}
                weatherCode={weatherCode[i]}
                dates={dates}
                date={dates[i]}
              />
            );
          })
        ) : (
          <p>Page not loaded!</p>
        )}
      </div>

      {temp ? (
        <Chart maxTemp={maxTemp} minTemp={minTemp} dates={dates} />
      ) : null}
      <MoreDetails windSpeed={windSpeeds} city={city} maxTemp={headerTemp} />
    </div>
  );

  return <div>{isLoading ? <Spinner /> : app}</div>;
};
// console.log(forcastData);
export default MyApp;
