import React from "react";
import styles from "./nav-checkout.module.css";
import { oswald } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";

export const NavCheckout = () => {
  return (
    <>
    <div className={styles["container-nav-secure"]}>
        <div>
          <span className={styles["buy-secure"]}>COMPRA SEGURA</span>
          <span className={styles["container-img"]}>
            <Image
              src="https://d1zxmlch3z83cq.cloudfront.net/production/2.3.162/_next/server/static/img/safe-shopping.svg" 
              alt="image-secure"
              height={30}
              width={30}
            />
          {/* <img src="https://d1zxmlch3z83cq.cloudfront.net/production/2.3.162/_next/server/static/img/safe-shopping.svg" alt="image-secure" /> */}
        </span>
        <span>100% PROTEGIDO</span>
        </div>
    </div>

    <div className={`${styles["container-all"]}`}>
      <div className={styles["container-secure"]}>
        <span className={styles["container-img"]}>
        <Image
              src="https://d1zxmlch3z83cq.cloudfront.net/production/2.3.162/_next/server/static/img/safe-shopping.svg" 
              alt="image-secure"
              height={30}
              width={30}
            />
          {/* <img src="https://d1zxmlch3z83cq.cloudfront.net/production/2.3.162/_next/server/static/img/safe-shopping.svg" alt="image-secure" /> */}
        </span>
        <span className={styles["container-secure-data"]}>
          <p className={styles["buy-secure"]}>COMPRA SEGURA</p>
          <p>100% PROTEGIDO</p>
        </span>
      </div>
      <Link href={"/"}><span className={oswald.className}>LEPRECHAUN</span></Link>
      
    </div>
    </>
  );
};
