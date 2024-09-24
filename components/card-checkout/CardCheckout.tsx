import React from 'react'
import styles from "@/app/(routes)/Contact/contact.module.css"
import Image from 'next/image'

export const CardCheckout = ( {image, name, price, amount} : {image: string, name: string, price: number, amount: number}) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["container-space"]}>

    <div className={styles["container-img"]}>
      {/* <img
        src={image}
        alt={name}
      /> */}
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
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
