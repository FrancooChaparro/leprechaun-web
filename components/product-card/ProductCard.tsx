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
  }

export const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, price }) => {
    const router = useRouter();
    const { Add, Discard } = useMyContext()

  return ( 
    <div className={styles["container-card"]} onClick={()=> router.push("/productDetails")}>
        <div className={styles["container-card-image"]}>
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
            <button className={`${styles["buy-button"]}`}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}
