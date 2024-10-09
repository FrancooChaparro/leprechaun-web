import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"
import { BannerButton }  from '../button-banner/ButtonBanner';

export const Banner = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-repeat bg-center bg-fixed bg-cover relative flex justify-center items-center">
      <video className="w-[100%] h-[100%] object-cover object-center brightness-[110%]" autoPlay muted loop poster="/images/taos.jpg" src="/images/te.mp4"></video>
      <div className="mb-[6rem] absolute bottom-0 left-[50%] top-auto md:mb-16 transform translate-x-[-50%]">
      <BannerButton />
      </div>
    </div>
  )
}
