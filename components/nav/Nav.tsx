"use client"
import React, { useState } from "react";
import styles from "./Nav.module.css";

export const Nav = () => {
  const [showCor, setShowCor] = useState(false);

  const handleMouseEnterCor = () => {
    setShowCor(true);
  };

  const handleMouseLeaveCor = () => {
    setShowCor(false);
  };
  return (
    <div className={styles["container-all"]}> 
      <div>
        <span>LEPRECHAUN</span>
      </div>
      <div className={styles["container-data"]}>
        <span  onMouseEnter={handleMouseEnterCor}>CATEGORIAS</span>
        <div className={showCor ? styles.cor : styles.co}>
            {showCor && (
              <div
                className={styles.cor}
                onMouseEnter={handleMouseEnterCor}
                onMouseLeave={handleMouseLeaveCor}
              >
               
              </div>
            )}
          </div>
        <span  onMouseEnter={handleMouseLeaveCor}>CONTACTO</span>
        <span  onMouseEnter={handleMouseLeaveCor}>CONOCENOS</span>
      </div>
      <div>
        <span>CARRITO</span>
      </div>
    </div>
  );
};
