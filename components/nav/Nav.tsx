"use client";
import React, { useState } from "react";
import styles from "./Nav.module.css";
import { categorias } from "@/models/products";
import { Product } from "@/types/types";

export const Nav = () => {
  const [showCor, setShowCor] = useState(false);
  const products: Product[] = categorias;

  const handleMouseEnterCor = () => {
    setShowCor(true);
  };

  const handleMouseLeaveCor = () => {
    setShowCor(false);
  };
  return (
    <div className={styles["container-all"]}>
      <div>
        <span className={styles["btn-nav"]}>LEPRECHAUN</span>
      </div>
      <div className={styles["container-data"]}>
      <span className={styles["btn-nav"]} onMouseEnter={handleMouseLeaveCor}>
          CONTACTO
        </span>
        <span className={styles["btn-nav"]} onMouseEnter={handleMouseEnterCor}>
          CATEGORIAS
        </span>
        <div className={showCor ? styles.cor : styles.co}>
          {showCor && (
            <div
              className={styles.cor}
              onMouseEnter={handleMouseEnterCor}
              onMouseLeave={handleMouseLeaveCor}
            >
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
          )}
        </div>
       
        <span className={styles["btn-nav"]} onMouseEnter={handleMouseLeaveCor}>
          CONOCENOS
        </span>
      </div>
      <div>
        <span className={styles["btn-nav"]}>CARRITO</span>
      </div>
    </div>
  );
};
