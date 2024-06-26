import React from "react";
import styles from "./grid-layout.module.css";
import Image from "next/image";
import { Catalogue } from "../catalogue/Catalogue";

export const GridLayout = () => {
  const data = [
    {
      url: "/images/3.jpg",
      product: "Guantes",
      variable: "one",
    },
    {
      url: "/images/4.webp",
      product: "Pilchas",
      variable: "two",
    },
    {
      url: "/images/esponjas.jpg",
      product: "Jabon",
      variable: "three",
    },
    {
      url: "/images/3.jpg",
      product: "Guandasdasdastes",
      variable: "four",
    },
  ];

  return (
    <div className={styles["container-all"]}>
      <div className={styles["container-title"]}>
        <h4>Algunos de Nuestras categorias</h4>
      </div>
      <div className={styles["container-layout-images"]}>
        {data.length &&
          data.map((prod, index) => (
            <Catalogue
              product={prod.product}
              url={prod.url}
              key={index}
              variable={prod.variable}
            />
          ))}
      </div>
    </div>
  );
};
