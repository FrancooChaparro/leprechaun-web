import React from 'react';
import styles from "../nav/cart-component/cart-component.module.css"

export const BtnCheckout = () => {
  return (
      <div className={styles["checkout-container"]}>
            <div className={styles["checkout-container-total"]}>
              <span>Total:</span>
              <span>$99.089,55</span>
            </div>
            <button className={styles["checkout-container-btn"]}>
              ACCEDER AL CHECKOUT
            </button>
            <div className={styles["checkout-container-footer"]}>
              <p>Ver mas productos</p>
            </div>
          </div> 
  )
}
