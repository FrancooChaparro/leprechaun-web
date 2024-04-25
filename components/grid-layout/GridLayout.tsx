import React from "react";
import styles from "./grid-layout.module.css";

export const GridLayout = () => {
  return (
    <div className={styles.containerAll}>
      <div className={styles.containerTitle}>
        <h4>Titulo</h4>
      </div>
      <div className={styles["wl"]}>
        <div className={styles["one"]}>
          <img src="/images/3.jpg" alt="adsa" />
        </div>
        <div className={styles["two"]}>
          <img src="/images/4.webp" alt="as" />
        </div>
        <div className={styles["tres"]}>
          <img src="/images/esponjas.jpg" alt="sss" />
        </div>
        <div className={styles["four"]}>
          <img src="/images/3.jpg" alt="a" />
        </div>
      </div>
    </div>
  );
};
