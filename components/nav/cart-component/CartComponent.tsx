import React, { useEffect, useRef } from "react";
import styles from "./cart-component.module.css";
import { ComponentCart } from "@/components/component-cart/ComponentCart";

export const CartComponent = ({
  isOpen,
  toggleCart,
}: {
  isOpen: boolean;
  toggleCart: () => void;
}) => {
  const cartRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      toggleCart();  // Cierra el carrito si se hace clic fuera de él
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && <div className={styles["overlay-menu-container"]} onClick={toggleCart}/>}
      <section
      ref={cartRef}
        className={`${styles["container-section-burger-menu"]} ${
          isOpen ? styles["active"] : ""
        }`}
      >
        <div className={styles["wraper"]}>
            <div className={styles["container-head"]}>
                <span className={styles["container-head-cart"]}>CARRITO DE COMPRAS</span>
                <a className={styles["container-head-x"]} onClick={toggleCart}><svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" />
    </svg></a>
            </div>
     
        <ComponentCart />
      
        


          <div className={styles["checkout-container"]}>
            <div className={styles["checkout-container-total"]}>
                <span>Total:</span><span>$99.089,55</span>
            </div>
            <button className={styles["checkout-container-btn"]}>ACCEDER AL CHECKOUT</button>
            <div className={styles["checkout-container-footer"]}>
                <p>Ver mas productos</p>
            </div>
        </div>
        </div>
        
      </section>
    </>
  );
};
