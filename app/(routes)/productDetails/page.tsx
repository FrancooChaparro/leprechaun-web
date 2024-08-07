"use client";
import React from "react";
import styles from "./product-details.module.css";
import { useState } from "react";

const ProductDetails = () => {
  const [show, setShow] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Amarillo");

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["containera"]}>
        <div className={styles["container-card-product-image"]}>
          <img
            src="https://masonlineprod.vtexassets.com/arquivos/ids/173320/Cera-Para-Auto-Autobrillo-Auto-Polish-650-Cc-1-32083.jpg?v=637835148027230000"
            alt="product"
          />
        </div>
      </div>

      <div className={styles["containerb"]}>
        <div className={styles["container-card-product-data"]}>
          <div className={styles["container-card-product-data-top"]}>
            <h2>Falcon PHO Carwash</h2>
            <h4>$15.00</h4>
            <div className={styles["container-select"]}>
              <p>Color: {selectedColor}</p>
              <div className={styles["container-select-color"]}>
                <div
                  className={`${styles["selector"]} ${
                    styles["selector-amarillo"]
                  } ${selectedColor === "Amarillo" ? styles["selected"] : ""}`}
                  onClick={() => handleSelectColor("Amarillo")}
                >
                  <div></div>
                </div>
                <div
                  className={`${styles["selector"]} ${
                    styles["selector-rosa"]
                  } ${selectedColor === "Rosa" ? styles["selected"] : ""}`}
                  onClick={() => handleSelectColor("Rosa")}
                >
                  <div></div>
                </div>
                <div
                  className={`${styles["selector"]} ${
                    styles["selector-verde"]
                  } ${selectedColor === "Verde" ? styles["selected"] : ""}`}
                  onClick={() => handleSelectColor("Verde")}
                >
                  <div></div>
                </div>
              </div>
            </div>
            <div className={styles["container-mount"]}>
              <p>Cantidad</p>
              <input type="text" />
            </div>
            <button className={styles["btn-detail"]}>AÑADIR AL CARRITO</button>
          </div>

          <div className={styles["container-card-product-data-description"]}>
            <div className={styles["description"]}>
              <span>DESCRIPCIÓN</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShow(!show)}
              >
                --
              </span>
            </div>
            {show && (
              <div className={styles["description-info"]}>
                <p>Tamaño: 2x2</p>
                <p>Material: Algondodn</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  temporibus quo vel debitis explicabo assumenda libero iure
                  tempora accusantium ru alias.
                </p>
                <p>dwqdqwdqwdqwdqwdwqdwqdwqwdw</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;