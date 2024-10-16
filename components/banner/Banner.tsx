import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"
import { BannerButton }  from '../button-banner/ButtonBanner';

export const Banner = () => {
  return (
    <div className={styles["container-background"]}>
      <video className={styles["video"]} autoPlay muted loop poster="/images/taos.jpg" src="/images/te.mp4"></video>
      <div className={styles["container-btn"]}>
      <BannerButton />
      </div>
    </div>
  )
}
