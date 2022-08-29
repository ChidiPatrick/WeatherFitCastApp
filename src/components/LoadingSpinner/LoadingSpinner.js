import React from "react";
import styles from "./LoadingSpinner.module.scss";
const Spinner = (props) => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.Loader}>Loading</div>
      <p className={styles.paragraph}>Please wait</p>
    </div>
  );
};
export default Spinner;
