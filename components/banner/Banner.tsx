import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"

export const Banner = () => {
  return (
    <div className={styles["container-background"]}>
       {/* <Image
        src="https://radiotemuco.com/home/wp-content/uploads/2022/07/Foto1.jpg"
        alt="poster"
        fill
        loading="lazy"
        placeholder="blur" 
        blurDataURL="/images/ajax_poster_blur.webp"
      />  */}
      {/* <img src="https://radiotemuco.co/home/wp-content/uploads/2022/07/Foto1.jpg" alt="alt" /> */}
      <img src="/images/taos.jpg" alt="banner" />
      <div className={styles["container-btn"]}>
        <button className={styles["btn-banner"]}>VER PRODUCTOS</button> 
      </div>
    </div>
  )
}
