import React from 'react'
import styles from "@/components/nav/cart-component/cart-component.module.css"
import { useMyContext } from '@/context/ListContext';
import DeleteIcon from '@/Icons/DeleteIcon';
import IncreaseIcon from '@/Icons/IncreaseIcon';
import DecreaseIcon from '@/Icons/DecreaseIcon';
import { Product } from '@/types/types';

export const ComponentCart:  React.FC<Product> = ({ 
  name, description, image, price, amount, id
}) => {

  const { Discard, Subir, Bajar } = useMyContext()
  
  return (
    <div className={styles["cart-product"]}>
    <div className={styles["cart-product-image"]}>
      <img
        src={image}
        alt="product-image-cart"
      />
    </div>
    
    <div className={styles["cart-product-info"]}>
      <div className={styles["top"]}>
        <div className={styles["title"]}>
          <a href="">{name.toLocaleUpperCase()}</a>
          <small>({description.slice(0,15)})</small>
        </div>
        <div>
          <span className={styles["delete"]} onClick={()=> Discard(id)}>
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
