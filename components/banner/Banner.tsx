"use client"
import Image from 'next/image'
import React from 'react'
import styles from "./banner.module.css"
import { useRouter } from "next/navigation";


export const Banner = () => {
  const router = useRouter()
 
  return (
    <div className={styles["container-background"]}>
      <img src="/images/taos.jpg" alt="banner" /> 
      <div className={styles["container-btn"]}>
        <button className={styles["btn-banner"]} onClick={()=> router.push("/shoop")}>VER PRODUCTOS</button> 
      </div>
    </div>
  )
}
