import React from 'react';
import styles from "./bad-request.module.css";
import { EyeIcon } from '@/Icons/CartIcon';

export const BadRequest = () => {
  return (
    <div className={styles["container-bad-request"]}>
        <div className={styles["container"]}>
            <h6>No encontramos el producto que buscás</h6>
                <a className={styles["btn"]} href="/shoop"><EyeIcon />Ver productos</a>
        </div>
    </div>
  )
}
