import React from "react";
import styles from "@/components/nav/Nav.module.css";
import { categorias } from "@/models/products";
import { Product } from "@/types/types";

export const NavCategorias = () => {
  const products: Product[] = categorias;
  return (
    <div className={styles.cor}>
      <div className={styles.cor}>
        <div className={styles["center"]}>
          {products.length &&
            products.map((e) => {
              return (
                <div className={styles["container-categorias"]}>
                  <span className={styles["categorias"]} key={e.id}>
                    {e.nombre}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};