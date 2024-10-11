"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import styles from "../banner/banner.module.css";
import { Oswald } from 'next/font/google';
import { oswald } from '@/utils/fonts';

export const BannerButton = () => {
  const router = useRouter();

  return (
    <button 
      className={`${styles["btn-banner"]} ${oswald.className}`} 
      onClick={() => router.push("/shoop")}
    >
      VER PRODUCTOS
    </button>
  );
};

