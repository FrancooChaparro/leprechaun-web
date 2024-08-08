import React from 'react'
import styles from "@/components/nav/cart-component/cart-component.module.css"


export const ComponentCart = () => {
  return (
    <div className={styles["cart-product"]}>
    <div className={styles["cart-product-image"]}>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVMOW5xlKTjbzuze_DmXKvE24mbn0vSRLWEtfDvUxFwmjk1eo6t9OB0bQPUSVxUbzhaHyBFkiiusze5IbuUnXb9X1KaP2xrxRvxCS3ngI52xfOjVUQfT3lI7LAbUFktnCNwXg5ldBHDspSHh_Q47-Z8fZ7GosjvccX_abBzJJI_6GWMLv5rVngBADz/s640/5a2c8f_a38cd96582f0413e868d3843853ba010_mv2.jpg"
        alt="product"
      />
    </div>
    
    <div className={styles["cart-product-info"]}>
      <div className={styles["top"]}>
        <div className={styles["title"]}>
          <a href="">BUZO OVER VALUES</a>
          <small>(Azul oscuro, S)</small>
        </div>
        <div>
          <span className={styles["delete"]}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M17 6h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V3a1 1 0 011-1h8a1 1 0 011 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles["bot"]}>
        <div className={styles["form-quality"]}>
          <span>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
            </svg>
          </span>
          <span>0</span>
          <span>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <defs>
                <style />
              </defs>
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
            </svg>
          </span>
        </div>
        <div>
          <span>$31.600,00</span>
        </div>
      </div>
    </div>

  </div>
  )
}
