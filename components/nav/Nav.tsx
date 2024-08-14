"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { NavCategorias } from "../nav-categorias/NavCategorias";
import Image from "next/image";
import { CartComponent } from "./cart-component/CartComponent";
import { oswald } from "@/utils/fonts";
import { useWindowSize } from "@/utils/size/useWindowsSize";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { usePathname, useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";
import CartIcon from "@/Icons/CartIcon";

export const Nav = () => {
  const router = useRouter();
  const [abier, setab] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { Cart } = useMyContext();
  
  const toggleCart = () => {
    setab(!abier);
  };
  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", abier);
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [abier]);

  // const pathName = usePathname()
  // let pathWithoutSubdirectories = pathName;

  // if (pathName.startsWith("/projects")) {
  //     pathWithoutSubdirectories = pathName.replace(/\/projects\/.*/, "/projects");
  // }

  const { width } = useWindowSize();
  const { isAtTop, showButton } = useScrollPosition();

  const handleIsOpen = (isCLose?: boolean) => {
    if (isCLose) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    if (width > 992) {
      setIsOpen(false);
    }
  }, [width]);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", isOpen);
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className={`${styles["container-all"]} ${oswald.className}`}>
      <div>
        <span
          className={styles["btn-nav-logo"]}
          onClick={() => router.push("/")}
        >
          LEPRECHAUN
        </span>
      </div>

      <div className={styles["container-data"]}>
        <span
          className={styles["btn-nav"]}
          onClick={() => router.push("/Contact")}
        >
          CONTACTO
        </span>
        <span className={styles["btn-nav"]}>
          CATEGORIAS
          <NavCategorias />
        </span>
        <span className={styles["btn-nav"]}>CONOCENOS</span>
      </div>

      <div>
        <span className={styles["btn-cart"]}>
          <a className={styles["ancor"]} onClick={() => setab(!abier)}>
           {Cart.length > 0 && <div className={styles["render"]}>{Cart.length}</div>}
           <CartIcon />
          </a>
          <CartComponent isOpen={abier} toggleCart={toggleCart} />
        </span>
      </div>
    </div>
  );
};
