import React from 'react';
import styles from "../nav/cart-component/cart-component.module.css"
import { AcordionCart } from '../acordion-cart/Acordion-cart';
import Link from 'next/link';

interface BtnCheckoutProps {
  price: number;
  toggleCart: ()=> void
}

export const BtnCheckout: React.FC<BtnCheckoutProps> = ({ price, toggleCart }) => {
  return (
    <>
    <AcordionCart />
      <div className={styles["checkout-container"]}>
            <div className={styles["checkout-container-total"]}>
              <span>Total:</span>
              <span>${price}</span>
            </div>
            <Link href="/Contact" onClick={toggleCart}><button className={styles["checkout-container-btn"]}>
              ACCEDER AL CHECKOUT
            </button></Link>
            <div className={styles["checkout-container-footer"]} onClick={toggleCart}>
              <p>Ver mas productos</p>
            </div>
          </div> 
          </>
  )
}
