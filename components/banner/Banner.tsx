import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"
import poster from "@/public/images/ajax_poster.webp";

export const Banner = () => {
  return (
    <div className={styles.ContainerBackground}>
      {/* <Image
        src={poster}
        alt="poster"
        fill
        loading="lazy"
        placeholder="blur" 
        blurDataURL="/images/ajax_poster_blur.webp"
      /> */}
      <img src="https://radiotemuco.com/home/wp-content/uploads/2022/07/Foto1.jpg" alt="alt" />
      <div className={styles["container-btn"]}>
        <button className={styles["btn-banner"]}>VER PRODUCTOS</button>
      </div>
    </div>
  )
}
