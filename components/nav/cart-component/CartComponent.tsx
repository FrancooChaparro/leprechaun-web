"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "./cart-component.module.css";
import { ComponentCart } from "@/components/component-cart/ComponentCart";
import { BtnCheckout } from "@/components/btn-checkout/Btn-checkout";
import { useMyContext } from "@/context/ListContext";
import { ClosedIcon } from "@/Icons/CartIcon";
import { formatoContabilidad } from "@/utils/functions/buttonMain";

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
      toggleCart(); // Cierra el carrito si se hace clic fuera de él
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
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const { Cart } = useMyContext();


  const totalPrice = Cart.reduce((total, product) => {
    return total + product.price;
  }, 0);


  return (
    <>
      {isOpen && (
        <div
          className={styles["overlay-menu-container"]}
          onClick={toggleCart}
        />
      )}
      <section
        ref={cartRef}
        className={`${styles["container-section-burger-menu"]} ${
          isOpen ? styles["active"] : ""
        }`}
      >
        <div className={styles["wraper"]}>
          <div className={styles["container-head"]}>
            <span className={styles["container-head-cart"]}>
              CARRITO DE COMPRAS
            </span>
            <a className={styles["container-head-x"]} onClick={toggleCart}>
              <ClosedIcon className="1.4rem"/>
            </a>
          </div>

          {Cart.length > 0 ? (
            <>
              {Cart.map((e) => (
                <ComponentCart
                  key={e.id}
                  name={e.name}
                  description={e.description}
                  price={e.price}
                  image={e.image}
                  amount={e.amount}
                  id={e.id}
                  stock={e.stock}
                  unitPrice={e.unitPrice}
                  subtitle={e.subtitle}
                  urlCategory={e.urlCategory}
                  urlProduct={e.urlProduct}
                  pricears={e.pricears}
                  titleCategory={e.titleCategory}
                />
              ))}
                <BtnCheckout price={formatoContabilidad(totalPrice)} toggleCart={toggleCart}/>
            </>
          ) : (
            <div className={styles["Cart-vacio"]}>
              <span>El carrito de compras está vacío.</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
