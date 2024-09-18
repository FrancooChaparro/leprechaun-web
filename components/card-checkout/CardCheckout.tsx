import React from 'react'
import styles from "@/app/(routes)/Contact/contact.module.css"

export const CardCheckout = ( {image, name, price, amount} : {image: string, name: string, price: number, amount: number}) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["container-space"]}>

    <div className={styles["container-img"]}>
      <img
        src={image}
        alt={name}
      />
    </div>
    <div className={styles["container-name"]}>
      {name} x {amount}
    </div>
    </div>

    <div className={styles["container-price"]}>
      {" "}
      <span>$ {price}</span>{" "}
    </div>
  </div>
  )
}
