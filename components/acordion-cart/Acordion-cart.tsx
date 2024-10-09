"use client";
import React, { useState } from "react";
import styles from "@/components/nav/cart-component/cart-component.module.css";
import { DecreaseIcon, IncreaseIcon, ShopIcon } from "@/Icons/CartIcon";
import { lexend } from "@/utils/fonts";

export const AcordionCart = () => {
  const [shopOpen, setShopOpen] = useState<boolean>(false);

  return (
    <div className="w-[100%] mt-2 pt-[0.3rem] border-t-[1px] border-[rgb(211_211_211)]">
      <div
        className="flex justify-between items-center"
        onClick={() => setShopOpen(!shopOpen)}
      >
        <a className="h-8 flex justify-center items-center cursor-pointer">
          <ShopIcon /> <span className="text-sm pl-1">Nuestro Local</span>
        </a>
        <a className={styles["container-icon"]}>
          {shopOpen ? <DecreaseIcon /> : <IncreaseIcon />}
        </a>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 text-[#64748b] text-[0.875rem] ${
          shopOpen ? "grid-rows-[1fr] opacity-100"  : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden flex justify-between bg-customgray p-2">
          <div className="flex gap-2 text-xs text-[black]">
            <span className="h-[25px] w-[25px] flex justify-center items-center">
              <span className="bg-[white] h-[15px] w-[15px] rounded-full flex justify-center items-center border-[1px] border-[rgb(0_0_0)]">
                <span className="bg-[rgb(0_0_0)] h-[5px] w-[5px] rounded-full border-[1px] border-[grey]"></span>
              </span>
            </span>
            <span className={lexend.className}>
              Leprechaun - Av. Hipólito Yrigoyen 11357, Turdera, Buenos Aires,
              Atención de Lunes a Viernes de 8 a 17 hs
            </span>
          </div>
          <div className={`flex justify-center text-center text-[#77b17f] pl-4 ${lexend.className}`}>
            Gratis
          </div>
        </div>
      </div>
    </div>
  );
};
