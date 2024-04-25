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
        <span className={styles["btn-cart"]}><a className={styles["ancor"]}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg></a></span>
      </div>
    </div>
  );
};
