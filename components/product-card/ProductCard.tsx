import React from 'react';
import styles from "./product-card.module.css";

export const ProductCard = () => {
  return ( <div className={styles["container-card"]}>
  <img className={styles["container-card-image"]} src="https://d33hp2zfrbjrv1.cloudfront.net/8ad51ddcd543928c6496162dc4d066eb_photo.webp" alt="product" />
</div>
    // <div className={styles["container-card"]}>
    //     <div className={styles["container-card-image"]}>
    //         <img src="https://d33hp2zfrbjrv1.cloudfront.net/8ad51ddcd543928c6496162dc4d066eb_photo.webp" alt="product" />
    //     </div>
    //     <div className={styles["container-card-data"]}>
    //         <span className={styles["name"]}>
    //             Cepillo tapizado
    //         </span>
    //         <span className={styles["price"]}>
    //             $3000
    //         </span>
    //     </div>
    // </div>
  )
}
