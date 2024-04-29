import React from 'react';
import styles from "./shoop.module.css";
import { ProductCard } from '@/components/product-card/ProductCard';

export const Shoop = () => {
  return (
    <div className={styles["container-main-shoop"]}>
      <div className={styles["container-main-shoop-data"]}>
          <h4>Guantes</h4>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur quibusdam sit.</h4>
      </div>
      <div className={styles["container-main-shoop-actions"]}>
          <div>FILTRAR</div>
          <div>ORDENAR</div>
      </div>
      <div  className={styles["test"]}>

      <div className={styles["container-main-shoop-cards"]}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
      </div>
    </div>
  )
}


export default Shoop;