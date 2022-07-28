import React from "react";
import styles from "./Button.module.scss";
const Button = (props) => {
  return (
    <button className={styles.button}>
      {/* {props.showMore ? "Show More" : "Show Less"} */}
    </button>
  );
};
export default Button;
