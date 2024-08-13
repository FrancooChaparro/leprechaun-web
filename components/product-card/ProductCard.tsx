"use client"
import React from 'react';
import styles from "./product-card.module.css";
import { Roboto } from "next/font/google";
import { useRouter } from 'next/navigation';
import { useMyContext } from '@/context/ListContext';

const inter = Roboto({ weight: ["400"], subsets: ["latin"] });
interface ProductCardProps {
    name: string;
    description: string;
    image: string;
    price: number;
    added: any;
  }

export const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, price, added }) => {
    const router = useRouter();
    const { Add, Discard, Cart } = useMyContext()

    console.log(Cart, "carrito");
    
  return ( 
    <div className={styles["container-card"]} >
        <div className={styles["container-card-image"]} onClick={()=> router.push("/productDetails")}>
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
            <button className={`${styles["buy-button"]}`} onClick={()=> Add(added)} >AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}
