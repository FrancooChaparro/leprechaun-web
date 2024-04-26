import React from "react";
import styles from "./grid-layout.module.css";
import Image from "next/image";

export const GridLayout = () => {
  return (
    <div className={styles["container-all"]}>
      <div className={styles["container-title"]}>
        <h4>Titulo</h4>
      </div>
      <div className={styles["container-layout-images"]}>
        <div className={styles["one"]}>
          <Image src="/images/3.jpg" alt="image" fill loading="lazy" />
        </div>
        <div className={styles["two"]}>
          <Image src="/images/4.webp" alt="image" fill loading="lazy" />
        </div>
        <div className={styles["three"]}>
          <Image src="/images/esponjas.jpg" alt="image" fill loading="lazy" />
        </div>
        <div className={styles["four"]}>
          <Image src="/images/3.jpg" alt="image" fill loading="lazy" />
        </div>
      </div>
    </div>
  );
};
