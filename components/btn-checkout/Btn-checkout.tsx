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
      <div className="w-[100%] pb-4 transition-all duration-[400]" >
            <div className="w-[100%] flex justify-between pt-[0.4rem] pb-4">
              <span>Total:</span>
              <span>${price}</span>
            </div>
            <Link href="/Contact" onClick={toggleCart}><button className="w-[100%] p-[13px] tracking-[2px] no-underline text-center border-0 cursor-pointer text-[10px] leading-3 bg-[#000] text-primarywhite rounded-[5px] hover:opacity-80 ">
              ACCEDER AL CHECKOUT
            </button></Link>
            <div className="flex p-[13px] justify-center items-center text-sm text-[rgb(71_71_71)] cursor-pointer" onClick={toggleCart}>
              <p>Ver mas productos</p>
            </div>
          </div> 
          </>
  )
}
