import React from 'react'
import styles from "../grid-layout/grid-layout.module.css"
import Image from 'next/image'

interface props { 
    url: string;
    product: string;
    variable: string;
}
export const Catalogue: React.FC<props> = ( {
    url, product, variable
}) => {
  return (
    <div className={styles[variable]}>
          <Image src={url} alt="image" fill loading="lazy" />

          <div className={styles["container-overlay"]}>
            <div className={styles["container-overlay-split"]}>
               <div className={styles["container-overlay-split"]}>
              <div className={styles["guantes"]}>
              <p>{product}</p>
              </div>
              <div className={styles["vermas"]}>
              <small>Ver mas</small>
              </div>
            </div>
          </div>
        </div>

        </div>
  )
}
