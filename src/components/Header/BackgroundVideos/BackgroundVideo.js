import React from "react";
import styles from "./BackgroundVideo.module.scss";
const BackgroundVideo = (props) => {
  return (
    <figure className={styles.videoFigure}>
      <img
        src="./Images/weatherHero1.jpg"
        className={styles.heroImage}
        alt="Hero Image"
      />
    </figure>
  );
};
export default BackgroundVideo;
