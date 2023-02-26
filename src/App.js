import logo from "./logo.svg";
import "./App.scss";
import { Link, Route, Routes, Switch, useNavigate } from "react-router-dom";
import FullForcast from "./FullForcast/FullForcast";
import MyApp, { forcastData } from "./components/MyApp/MyApp";
import Spinner from "./components/LoadingSpinner/LoadingSpinner";
const App = (props) => {
  /////Initialize state
  return (
    <MyApp />
  );
  
};

export default App;
