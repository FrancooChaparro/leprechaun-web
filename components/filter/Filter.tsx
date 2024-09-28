import React, { useRef } from 'react';
import styles from "./filter.module.css"
import { categorias } from '@/models/products';
import { Categorias } from '@/types/types';
import { ClosedIcon } from '@/Icons/CartIcon';
import Link from "next/link"

export const Filter = ({ isOpen, toggleMenu } : { isOpen: boolean, toggleMenu: ()=> void}) => {
  const products: Categorias[] = categorias


  const cartRef = useRef(null);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: any) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: any) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  };

  const handleGesture = () => {
    if (touchStartX - touchEndX > 100) {
      return toggleMenu()
    }
  };



  return (
    <>
    {isOpen && <div className={styles['overlay-menu-container']} />}
    <section className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}
     ref={cartRef}
     onTouchStart={handleTouchStart}
     onTouchEnd={handleTouchEnd}
    >
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
                  <Link href={`/shoop/${e.url}`} onClick={toggleMenu}>
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
