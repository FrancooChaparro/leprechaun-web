"use client";
import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { NavCategorias } from "../nav-categorias/NavCategorias";
import { CartComponent } from "./cart-component/CartComponent";
import { oswald } from "@/utils/fonts";
import { useWindowSize } from "@/utils/size/useWindowsSize";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";
import { CartIcon, HamburgerMenuIcon } from "@/Icons/CartIcon";
import { Filter } from "../filter/Filter";

export const Nav = () => {
  const router = useRouter();
  const [abier, setab] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { Cart } = useMyContext();

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

  const { width } = useWindowSize();
  const { isAtTop, showButton } = useScrollPosition();

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
          <button onClick={()=> router.push("/shoop")}>1</button><button onClick={()=> router.push("/")}>2</button><button onClick={()=> router.push("/Contact")}>3</button>
    </div>
  );
};
