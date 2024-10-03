"use client";
import React, { useEffect, useMemo, useState } from "react";
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
import { Product } from "@/types/types";
import Image from "next/image";


export const Nav = () => {
  const router = useRouter();
  const [abier, setab] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { Cart, ModalProduct } = useMyContext();
  const pathName = usePathname()
  const { width } = useWindowSize();
  const { isAtTop, showButton } = useScrollPosition();
  const [burger, setBurger] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const closedModal = () => { 
    setModalVisible(false)
  }

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


  // laburo aca
  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", burger);
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [burger]);


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

  useEffect(() => {
    if(pathName === "/") {
      return setModalVisible(false)
    }
    if (ModalProduct) {
      setModalVisible(true); // Mostrar modal
      const timer = setTimeout(() => {
        setModalVisible(false); // Ocultar modal después de 4 segundos
      }, 4000);
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [ModalProduct]);

  const cantidad = useMemo(() => 
    Cart.reduce((total, product) => total + product.amount, 0), 
    [Cart]
  );

  return (
    <div className={`${styles["container-all"]} ${oswald.className}`}>
        <div className={styles["hamburger-container"]}>
        <span className={styles["container-icon-btn-nav"]}>
          <a className={styles["ancor"]} onClick={toggleMenu}>
           <HamburgerMenuIcon /> 
          </a>
          <Filter isOpen={burger} toggleMenu={toggleMenu} />
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
          <NavCategorias router={router}/>
        </span>
        <span className={styles["btn-nav"]}>CONOCENOS</span>
      </div>


      <div>
      <span className={styles["container-icon-btn-nav"]}>
          <a className={styles["ancor"]} onClick={() => setab(!abier)}> 
            {Cart.length > 0 && (
              <div className={styles["render"]}>{cantidad}</div>
            )}
            <CartIcon />
          </a>
          <CartComponent isOpen={abier} toggleCart={toggleCart} />
    
        </span>
      </div>
      <div
        className={`${styles["modal-view"]} ${modalVisible ? styles["show"] : ""}`}
      >
        <div className={styles["modal-btn-closed"]} onClick={()=> closedModal()}><ClosedIcon className="1.4rem"/></div>
      <div className={styles["container-primary"]}>
           <div className={styles["container-img"]}>
            <Image
             src={ModalProduct?.image || "/images/taos.jpg"} 
             alt="modalImageProduct"
             width={55}
             height={55}
            //  style={{objectFit: "cover"}}
            />
           </div>
           <div className={styles["container-data-modal"]}>
              <span>{ModalProduct?.name}</span>
              <span>1 X ${ModalProduct?.pricears}</span>
              <span style={{fontWeight: "bold"}}>¡Agregado al carrito con éxito!</span>
           </div>
        </div>
        </div>

    </div>
  );
};
