"use client";
import React, { useEffect, useState } from "react";
import styles from "./product-card.module.css";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";
import { Product, ProductCardProps } from "@/types/types";
import Image from "next/image";
import {
  DecreaseIcon,
  DeleteIcon,
  IncreaseIcon,
  TildeIcon,
} from "@/Icons/CartIcon";

const inter = Roboto({ weight: ["400"], subsets: ["latin"] });

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  price,
  compose,
  id,
  amount,
}) => {
  const router = useRouter();
  const { Add, Cart, Subir, Bajar, Discard } = useMyContext();
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [Producto, setProducto] = useState<Product>();

  useEffect(() => {
    // Verifica si el producto está en el carrito
    const findProduct = Cart.find((item: Product) => item.id === id);

    // Actualiza el estado basado en si el producto está en el carrito

    setIsInCart(!!findProduct);
    setProducto(findProduct);
  }, [Cart, id]); // Asegúrate de que se ejecute cuando el carrito cambie

  const handleAddToCart = () => {
    Add(compose);
    // Espera a que el carrito se actualice y luego actualiza el estado

    const findProduct = Cart.find((item: Product) => item.id === id);
    setIsInCart(true);
  };

  const handleRemove = () => {
    Discard(id, amount);
    setIsInCart(false);
  };

  return (
    <div className={styles["container-card"]}>
      <div
        className={styles["container-card-image"]}
        onClick={() => router.push(`/products/${name.replace(/\s+/g, '-').replace(/"/g, '_').toLowerCase()}`)}
      >
        {/* <Image src={`${image}`} alt="product" fill loading='lazy'/> */}
        <img src={image} alt="image" />
      </div>

      <div className={styles["container-card-data"]}>
        <span className={`${styles["name"]} ${inter.className}`}>{name}</span>
        <span className={`${styles["description"]} ${inter.className}`}>
          {description}
        </span>
        <span className={styles["price"]}>${price}</span>
      </div>

      {isInCart ? (
        <div className={styles["container-modal"]}>
          <div className={styles["container-left"]}>
            <TildeIcon />
            <div>
              <span>En carrito</span>
            </div>
          </div>

          <div className={styles["container-rigth"]}>
            {Producto?.amount === 1 ? (
              <span className={styles["delete"]} onClick={handleRemove}>
                <DeleteIcon />
              </span>
            ) : (
              <span className={styles["delete"]} onClick={() => Bajar(id)}>
                <DecreaseIcon />
              </span>
            )}

            <span>{Producto?.amount}</span>
            <span onClick={() => Subir(id)}>
              <IncreaseIcon />
            </span>
          </div>
        </div>
      ) : (
        <div className={`${styles["container-btn"]}`}>
          <button
            className={`${styles["buy-button"]}`}
            onClick={handleAddToCart}
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      )}
    </div>
  );
};
