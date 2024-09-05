import React from 'react';
import styles from "./filter.module.css"
import { categorias } from '@/models/products';
import { Categorias } from '@/types/types';
import { ClosedIcon } from '@/Icons/CartIcon';
import Link from "next/link"

export const Filter = ({ isOpen, toggleMenu } : { isOpen: boolean, toggleMenu: ()=> void}) => {
  const products: Categorias[] = categorias
  return (
    <>
    {isOpen && <div className={styles['overlay-menu-container']} />}
    <section className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}>
        <div className={styles["wraper"]}>
        <div className={styles["container-head"]}>
            <a className={styles["container-head-x"]} onClick={toggleMenu}>
              <ClosedIcon  className='1.4rem'/>
            </a>
          </div>


    <div className={styles["container-data"]}> 

        {products.length > 0 &&
            products.map((e) => {
              return (
                <div className={styles["container-section"]} key={e.id}>
                  <Link href={`/shoop/${e.nombre}`} onClick={toggleMenu}>
                  <span className={styles["container-section-name"]}>
                    {e.nombre}
                  </span>
                  </Link>
                </div>
              );
            })}
     
     </div> 
        </div>
    </section>
</>
  )
}
