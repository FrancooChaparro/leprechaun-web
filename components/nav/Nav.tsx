"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { NavCategorias } from "../nav-categorias/NavCategorias";
import { CartComponent } from "./cart-component/CartComponent";
import { oswald } from "@/utils/fonts";
import { useWindowSize } from "@/utils/size/useWindowsSize";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { usePathname, useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";
import { CartIcon, ClosedIcon, DeleteIcon, HamburgerMenuIcon } from "@/Icons/CartIcon";
import { Filter } from "../filter/Filter";
import { buttonMain } from "@/utils/functions/buttonMain";

export const Nav = () => {
  const router = useRouter();
  const [abier, setab] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { Cart } = useMyContext();
  const pathName = usePathname()
  const { width } = useWindowSize();
  const { isAtTop, showButton } = useScrollPosition();
  const [burger, setBurger] = useState(false);

  const toggleMenu = () => {
    setBurger(!burger);
  };

  const toggleCart = () => {
    setab(!abier);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", abier);
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [abier]);

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

        <div className={styles["hamburger-container"]}>
        <span className={styles["container-icon-btn-nav"]}>
          <a className={styles["ancor"]} style={{zIndex: "15000"}} onClick={toggleMenu}>
           {burger ?  <ClosedIcon /> : <HamburgerMenuIcon /> }
          </a>
          <Filter isOpen={burger} />
        </span>
      </div>

      <div>
        <span
          className={styles["btn-nav-logo"]}
          onClick={() => buttonMain(pathName, router)}
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
      <span className={styles["container-icon-btn-nav"]}>
          <a className={styles["ancor"]} onClick={() => setab(!abier)}> 
            {Cart.length > 0 && (
              <div className={styles["render"]}>{Cart.length}</div>
            )}
            <CartIcon />
          </a>
          <CartComponent isOpen={abier} toggleCart={toggleCart} />
        </span>
      </div>

    </div>
  );
};
