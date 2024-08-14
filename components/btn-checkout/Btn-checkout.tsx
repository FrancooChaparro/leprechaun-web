import React from 'react';
import styles from "../nav/cart-component/cart-component.module.css"

interface BtnCheckoutProps {
  price: number;
}

export const BtnCheckout: React.FC<BtnCheckoutProps> = ({ price }) => {
  return (
      <div className={styles["checkout-container"]}>
            <div className={styles["checkout-container-total"]}>
              <span>Total:</span>
              <span>${price}</span>
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