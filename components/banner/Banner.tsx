import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"
import { BannerButton }  from '../button-banner/ButtonBanner';

export const Banner = () => {
  return (
    <div className={styles["container-background"]}>
      {/* <Image 
        src="/images/taos.jpg"
        alt="banner"
        fill
        loading="lazy"
      /> */}
      <video className={styles["video"]} autoPlay muted loop poster="/images/taos.jpg" src="/images/vedeo.mp4"></video>
      <div className={styles["container-btn"]}>
      <BannerButton />
      </div>
    </div>
  )
}
