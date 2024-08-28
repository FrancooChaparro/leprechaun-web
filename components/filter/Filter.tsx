import React from 'react';
import styles from "./filter.module.css"
import { categorias } from '@/models/products';
import { Categorias } from '@/types/types';

export const Filter = ({ isOpen } : { isOpen: boolean}) => {
  const products: Categorias[] = categorias
  return (
    <>
    {isOpen && <div className={styles['overlay-menu-container']} />}
    <section className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}>
        <div className={styles["wraper"]}>
        {products.length &&
            products.map((e) => {
              return (
                <div className={styles["container-section"]} key={e.id}>
                  <span className={styles["container-section-name"]}>
                    {e.nombre}
                  </span>
                </div>
              );
            })}
        </div>
    </section>
</>
  )
}
