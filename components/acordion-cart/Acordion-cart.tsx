"use client";
import React, { useState } from "react";
import styles from "@/components/nav/cart-component/cart-component.module.css";
import { DecreaseIcon, IncreaseIcon, ShopIcon } from "@/Icons/CartIcon";
import { lexend } from "@/utils/fonts";

export const AcordionCart = () => {
  const [shopOpen, setShopOpen] = useState<boolean>(false);

  return (
    <div className={styles["container-shop"]}>
      <div
        className={styles["container-shop-top"]}
        onClick={() => setShopOpen(!shopOpen)}
      >
        <a className={styles["container-icon"]}>
          <ShopIcon /> <span className={styles["local"]}>Nuestro Local</span>
        </a>
        <a className={styles["container-icon"]}>
          {shopOpen ? <DecreaseIcon /> : <IncreaseIcon />}
        </a>
      </div>
      <div
        className={`${styles["container-shop-bot"]} ${
          shopOpen ? styles["accordion-open"] : styles["accordion-closed"]
        }`}
      >
        <div className={styles["container-shop-bot-modal"]}>
          <div className={styles["container-private"]}>
            <span className={styles["container-checked"]}>
              <span className={styles["container-checked-p"]}>
                <span className={styles["container-checked-c"]}></span>
              </span>
            </span>
            <span className={lexend.className}>
              Leprechaun - Av. Hipólito Yrigoyen 11357, Turdera, Buenos Aires,
              Atención de Lunes a Viernes de 8 a 17 hs
            </span>
          </div>
          <div className={`${styles["container-free"]} ${lexend.className}`}>
            Gratis
          </div>
        </div>
      </div>
    </div>
  );
};
