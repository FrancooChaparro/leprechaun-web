import React from "react";
import styles from "./grid-layout.module.css";
import { Catalogue } from "../catalogue/Catalogue";
import { data } from "@/models/products";

export const GridLayout = () => {
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
