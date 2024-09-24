"use client"
import React, { useState } from 'react'
import styles from "@/components/nav/cart-component/cart-component.module.css"
import { useMyContext } from '@/context/ListContext';
import {DeleteIcon} from '@/Icons/CartIcon';
import {IncreaseIcon} from '@/Icons/CartIcon';;
import {DecreaseIcon} from '@/Icons/CartIcon';;
import { Product } from '@/types/types';
import Image from 'next/image';

export const ComponentCart:  React.FC<Product> = ({ 
  name, description, image, price, amount, id, unitPrice, stock
}) => {

  const { Discard, Subir, Bajar } = useMyContext()
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      Discard(id, amount);
    }, 800); // El tiempo debe coincidir con la duración de la animación
  };
  return (
    <div className={`${styles["cart-product"]} ${isRemoving ? styles["removing"] : ""}`}>
    <div className={styles["cart-product-image"]}>
      <Image 
        src={image}
        alt='product-image-cart'
        loading='lazy'
        fill
        objectFit='cover'
      />
      {/* <img
      src={image}
      alt="product-image-cart"
      loading='lazy'
      /> */}
    </div>
    
    <div className={styles["cart-product-info"]}>
      <div className={styles["top"]}>
        <div className={styles["title"]}>
          <a href="">{name.toLocaleUpperCase()}</a>
          <small>({description.slice(0,15)})</small>
        </div> 
        <div>
          <span className={styles["delete"]} onClick={handleRemove}>
            <DeleteIcon />
          </span>
        </div>
      </div>
      <div className={styles["bot"]}>
        <div className={styles["form-quality"]}>
          <span onClick={()=> Bajar(id)}>
          <DecreaseIcon />
          </span>
          <span>{amount}</span>
          <span onClick={()=> Subir(id)}>
              <IncreaseIcon />
          </span>
        </div>
        <div>
          <span>${price}</span>
        </div>
      </div>
    </div>

  </div>
  )
}
