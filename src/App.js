import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import Header from "./components/Header/header";
import Video from "./videos/moving-cloud-anime.mp4";
import listIcon from "./resources/sprite.svg#icon-list";
import WeatherUpdate, {
  MyButton,
} from "./components/weatherUpdate/weatherUpdate";
import axios from "axios";
import styled from "styled-components";
import { styledshowMoreBtn } from "./components/styled/styled.components";
import classnames from "classnames";
import classNames from "classnames";
import styles from "./components/Header/Header.module.scss";
import DayTemp from "./components/Header/DayTemperature/DayTemperature";
import VideoElement from "./components/Header/BackgroundVideos/BackgroundVideo";
import MoreDetails from "./components/MoreDetails/MoreDetails";
import { ImLocation2 } from "react-icons/im";
import Button from "./components/Button/Button";
import Chart from "./components/Charts/Charts";
import FullWeatherInfo from "./components/MyRoutes/MyRoutes";
import { Link, Route, Routes, Switch } from "react-router-dom";
import FullForcast from "./FullForcast/FullForcast";
const MyDiv = styled.div`
  background-color: green;
  height: 100px;
  width: 200px;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      maxTemp: null,
      minTemp: null,
      weathercode: 3,
      windSpeeds: 145,
      longitude: null,
      latitude: null,
      city: "Awka",
      country: "Nigeria",
      date: "2022-07-14",
      classNames: { weatherInfo: true, hidden: false },
      headerTemp: null,
      lessTemp: null,
      temp: null,
      showMore: false,
      showLess: true,
    };
    this.showMore = this.showMore.bind(this);
  }
  render() {
    const {
      maxTemp,
      minTemp,
      weathercode,
      date,
      windSpeeds,
      city,
      headerTemp,
      lessTemp,
      temp,
    } = this.state;

    const tempMax = maxTemp;
    const tempMin = minTemp;
    let classNames = classnames(this.state.classNames);
    let counter = 0;
    const newDate = new Date(date[0]);
    console.log(newDate.toLocaleString());

    return (
      <div className="App">
        <Header className="header">
          <VideoElement src="./videos/cloudy.mp4" />
          <DayTemp
            DayTemp={this.state.headerTemp}
            weatherCode={weathercode[0]}
          />
          <div className="city">
            <ImLocation2 /> {this.state.city}, {this.state.country}
          </div>
        </Header>
        <div className="weather-update-wrapper">
          {temp ? (
            temp.map((temp, i) => {
              counter++;

              return (
                <WeatherUpdate
                  key={counter}
                  className={className}
                  maxTemp={temp}
                  minTemp={tempMin[i]}
                  weatherCode={weathercode[i]}
                  dates={date}
                  date={date[i]}
                />
              );
            })
          ) : (
            <p>Page not loaded!</p>
          )}
        </div>
        {temp ? <Chart maxTemp={maxTemp} minTemp={minTemp} /> : null}
        {/* <FullForcast /> */}
        <Routes>
          <Route
            path="/fullForcast"
            exact
            strict
            element={
              <FullForcast
                maxTemp={maxTemp}
                minTemp={tempMin}
                weatherCode={weathercode}
                dates={date}
                // date={date}
              />
            }
          />
        </Routes>
        <Link to="/fullForcast">Full Forcast</Link>
        <MoreDetails windSpeed={windSpeeds} city={city} maxTemp={headerTemp} />
      </div>
    );
  }

  async getLocation() {
    const geoData = await axios("https://get.geojs.io/v1/ip/geo.json");
    console.log(geoData);
    const { longitude, latitude, city, country } = geoData.data;

    const cityCordinate = [parseFloat(longitude), parseFloat(latitude)];
    this.setState({ city, country });
    return cityCordinate;
  }

  async fetchWeatherData(longitude, latitude) {
    const weatherData = await axios(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=UTC&daily=temperature_2m_max,temperature_2m_min&daily=weathercode,windspeed_10m_max,sunrise`
    );
    return weatherData;
  }
  async componentDidMount() {
    const cords = await this.getLocation();
    console.log();
    const weatherData = await this.fetchWeatherData(cords[0], cords[1]);
    const {
      temperature_2m_max: maxTemp,
      temperature_2m_min: minTemp,
      time: date,
      weathercode,
      windspeed_10m_max: windSpeeds,
      current_weather,
    } = weatherData.data.daily;
    const newTemp = maxTemp.slice(0, 3);
    console.log(newTemp);
    this.setState({
      maxTemp,
      minTemp,
      date,
      weathercode,
      date,
      headerTemp: maxTemp[0],
      windSpeeds,
      lessTemp: newTemp,
      temp: newTemp,
    });
    console.log(weatherData);
    console.log(maxTemp[0]);

    const newDate = new Date(date[0]);
    console.log(newDate.toLocaleDateString());
  }
  setData(data) {
    this.setState({ weatherData: { ...data } });
    console.log(this.state.weatherData);
    // console.log(data);
  }
  showMore() {
    // classNames = classnames("weather-info");
    this.setState({ classNames: { hidden: true } });
  }
}

export default App;
