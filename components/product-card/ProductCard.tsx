import React from 'react';
import styles from "./product-card.module.css";
import { Roboto } from "next/font/google";

const inter = Roboto({ weight: ["400"], subsets: ["latin"] });

export const ProductCard = () => {
  return ( 
    <div className={styles["container-card"]}>
        <div className={styles["container-card-image"]}>
            <img src="https://t2.uc.ltmcdn.com/es/posts/6/8/6/productos_de_limpieza_caseros_para_el_coche_37686_600.webp" alt="product" />
        </div>

        <div className={styles["container-card-data"]}>
            <span className={`${styles["name"]} ${inter.className}`}>
                Cepillo tapizado
            </span>
            <span className={`${styles["description"]} ${inter.className}`}>
                Description of the product - leprechaunasadsadasdasdasdasd
            </span>
            <span className={styles["price"]}>
                $3000
            </span>
        </div>

        <div className={`${styles["container-btn"]}`}>
            <button className={`${styles["buy-button"]}`}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}
