import React from 'react';
import styles from "./cart-component.module.css"

export const CartComponent = ({
    isOpen,
   
}: {
    isOpen: boolean,
}) => {

  return (
    <>
            {isOpen && <div className={styles['overlay-menu-container']} />}
            <section className={`${styles["container-section-burger-menu"]} ${isOpen ? styles["active"] : ""}`}>
                <div className={styles["wraper"]}>
                   <h1>CARRITO</h1>
                </div>
            </section>
        </>
  )
}
