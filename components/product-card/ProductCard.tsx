"use client"
import React from 'react';
import styles from "./product-card.module.css";
import { Roboto } from "next/font/google";
import { useRouter } from 'next/navigation';
import { useMyContext } from '@/context/ListContext';
import { ProductCardProps } from '@/types/types';

const inter = Roboto({ weight: ["400"], subsets: ["latin"] });

export const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, price, compose }) => {
    const router = useRouter();
    const { Add } = useMyContext()

  return ( 
    <div className={styles["container-card"]} >
        <div className={styles["container-card-image"]} onClick={()=> router.push(`products/${name}`)}>
            <img src={`${image}`} alt="product" />
        </div>

        <div className={styles["container-card-data"]}>
            <span className={`${styles["name"]} ${inter.className}`}>
                {name}
            </span>
            <span className={`${styles["description"]} ${inter.className}`}>
               {description}
            </span>
            <span className={styles["price"]}>
               ${price}
            </span>
        </div>

        <div className={`${styles["container-btn"]}`}>
            <button className={`${styles["buy-button"]}`} onClick={()=> Add(compose)} >AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}
