import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"
import { BannerButton }  from '../button-banner/ButtonBanner';

export const Banner = () => {
  return (
    <div className={styles["container-background"]}>
      <img src="/images/taos.jpg" alt="banner" /> 
      <div className={styles["container-btn"]}>
      <BannerButton />
      </div>
    </div>
  )
}
