import React from 'react'
import styles from "@/components/nav/cart-component/cart-component.module.css"
import { useMyContext } from '@/context/ListContext';
import DeleteIcon from '@/Icons/DeleteIcon';
import IncreaseIcon from '@/Icons/IncreaseIcon';
import DecreaseIcon from '@/Icons/DecreaseIcon';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  comp: any;
  amount: number;
}

export const ComponentCart:  React.FC<ProductCardProps> = ({ 
  name, description, image, price, comp, amount
}) => {

  const { Discard, Cart, Subir, Bajar } = useMyContext()
  
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
          <span className={styles["delete"]} onClick={()=> Discard(comp)}>
            <DeleteIcon />
          </span>
        </div>
      </div>
      <div className={styles["bot"]}>
        <div className={styles["form-quality"]}>
          <span onClick={()=> Bajar(comp.id)}>
          <DecreaseIcon />
          </span>
          <span>{amount}</span>
          <span onClick={()=> Subir(comp.id)}>
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
