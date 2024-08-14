import React from "react";
import styles from "@/components/nav/Nav.module.css";
import { categorias } from "@/models/products";
import { Categorias } from "@/types/types";
import { roboto } from "@/utils/fonts";

export const NavCategorias = () => {
  const products: Categorias[] = categorias;
  return (
    <div className={`${styles["cor"]} ${roboto.className}`}>
      <div className={styles.cor}>
        <div className={styles["center"]}>
          {products.length &&
            products.map((e) => {
              return (
                <div className={styles["container-categorias"]} key={e.id}>
                  <span className={styles["categorias"]}>
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
