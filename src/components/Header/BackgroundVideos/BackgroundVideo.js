import React from "react";
import styles from "./BackgroundVideo.module.scss";
const BackgroundVideo = (props) => {
  return (
    <figure className={styles.videoFigure}>
      <video
        className={styles.videoEl}
        src={props.src}
        width="640"
        height="300"
        autoPlay
        loop
      >
        Your browser does not support HTML5 video
      </video>
    </figure>
  );
};
export default BackgroundVideo;
