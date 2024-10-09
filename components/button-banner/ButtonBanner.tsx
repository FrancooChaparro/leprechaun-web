"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import styles from "../banner/banner.module.css";
import { oswald } from '@/utils/fonts';

export const BannerButton = () => {
  const router = useRouter();

  return (
    <button 
      className={`bg-bknav text-navcolor text-sm tracking-0 min-h-10 py-[9px] px-[24px] uppercase rounded-[1px] cursor-pointer font-[700] tracking-[0] no-underline hover:opacity-80 outline-outlinebtn  ${oswald.className}`}
      onClick={() => router.push("/shoop")}
    >
      VER PRODUCTOS
    </button>
  );
};

