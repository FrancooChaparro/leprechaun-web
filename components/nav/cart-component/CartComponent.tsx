"use client"
import React, { useEffect, useRef, useState } from "react";
// import styles from "./cart-component.module.css";
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
          className="absolute top-0 right-0 min-w-[100vw] max-w-[100vw] min-h-[100vh] max-h-[100vh] h-[100vh] bg-[#000] opacity-50 z-[15999] pointer-events-auto cursor-default"
          onClick={toggleCart}
        />
      )}
      <section
        ref={cartRef}
        className={`w-[100%] px-[0-8rem] absolute top-0 -right-[100vw] z-[16000] h-[100vh] opacity-0 flex justify-center min-h-[cal(100vh - 5rem)] text-[black] lg:px-[0.4rem] overflow-y-scroll cursor-default lg:w-[30vw] font-custom transition-all duration-300 bg-bknav ${
          isOpen ? "right-0 opacity-100 transition-all duration-300" : ""
        }`}
      >
        <div className="w-[100%] min-h-[100%]">
          <div className="flex justify-center items-center relatieve border-b-[1px] border-t-[1px] border-[rgb(211_210_210)] w-[100%] h-16 text-[12px] text-center uppercase pt-1 tracking-[1px] cursor-pointer ">
            <span className="absolute left-[50%] transform -translate-x-1/2">
              CARRITO DE COMPRAS
            </span>
            <a className="absolute right-2.5 text-[25px]" onClick={toggleCart}>
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
            <div className="h-[30px] border-[1px] border-[rgb(53_53_53)] rounded-[4px] flex justify-center items-center text-[11px] mt-1 ">
              <span>El carrito de compras está vacío.</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
