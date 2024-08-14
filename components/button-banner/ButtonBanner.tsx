"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import styles from "../banner/banner.module.css";

export const BannerButton = () => {
  const router = useRouter();

  return (
    <button 
      className={styles["btn-banner"]} 
      onClick={() => router.push("/shoop")}
    >
      VER PRODUCTOS
    </button>
  );
};

