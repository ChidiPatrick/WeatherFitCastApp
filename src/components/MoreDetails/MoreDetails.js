import React from "react";
import styles from "./MoreDetails.module.scss";
import { WiCloudyGusts, WiThermometer, WiSunrise } from "react-icons/wi";
import { ImLocation2 } from "react-icons/im";
const MoreDetails = (props) => {
  const { windSpeed, city, maxTemp } = props;
  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>Details</p>
      <div className={styles.innerWrapper}>
        <div className={styles.parameter}>
          <div className={styles.param}>
            <span className={styles.parameterDescptn}>Wind Speed</span>
            <span className={styles.paramData}>
              {props.windSpeed[0]}km/h <WiCloudyGusts className={styles.icon} />
            </span>
          </div>
        </div>
        <div className={styles.parameter}>
          <div className={styles.param}>
            <span className={styles.parameterDescptn}>Max Temperature</span>
            <span className={styles.paramData}>
              {maxTemp}°C <WiThermometer className={styles.icon} />
            </span>
          </div>
        </div>
        <div className={styles.parameter}>
          <div className={styles.param}>
            <span className={styles.parameterDescptn}>City</span>
            <span className={styles.paramData}>
              {city} <ImLocation2 className={styles.icon} />
            </span>
          </div>
        </div>
        <div className={styles.parameter}>
          <div className={styles.param}>
            <span className={styles.parameterDescptn}>Temperature</span>
            <span className={styles.paramData}>
              45 <WiSunrise className={styles.icon} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreDetails;
