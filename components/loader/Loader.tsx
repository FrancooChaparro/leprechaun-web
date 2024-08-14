import React from 'react'
import styles from "@/app/(routes)/productDetails/product-details.module.css"

export const Loader = () => {
  return (
    <div className={styles.containerSpinner}>
    <div className={styles.spinner} />
  </div>
  )
}
