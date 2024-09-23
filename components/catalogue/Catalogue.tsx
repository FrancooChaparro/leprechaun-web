"use client"
import React from "react";
import styles from "../grid-layout/grid-layout.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  url: string;
  product: string;
  variable: string;
}
export const Catalogue: React.FC<props> = ({ url, product, variable }) => {
  const router = useRouter();
  return (
    <div className={styles[variable]} onClick={()=> router.push("/shoop/" + product)}>
      <Image src={url} alt="image" fill loading="lazy" />

      <div className={styles["container-overlay"]}>
        <div className={styles["container-overlay-split"]}>
          <div className={styles["container-overlay-split"]}>
            <div className={styles["guantes"]}>
              <p>{product}</p>
            </div>
            <div className={styles["vermas"]}>
              <small>Ver mas</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
