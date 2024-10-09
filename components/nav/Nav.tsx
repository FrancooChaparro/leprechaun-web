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
    <div className={`w-[100vw] h-16 bg-bknav text-[16px] text-navcolor flex justify-between items-center fixed z-[52] select-none shadow-md shadow-black/20 px-[30px] lg:px-16 ${oswald.className}`}>
        <div className="block md:hidden text-[2rem] cursor-pointer lg:hidden">
        <span className="cursor-pointer border-b-[3px] border-bknav font-medium">
          <a className="relative flex justify-center items-center p-[0.5rem] cursor-pointer h-10 w-10 rounded-full" onClick={toggleMenu}>
           <HamburgerMenuIcon /> 
          </a>
          <Filter isOpen={burger} toggleMenu={toggleMenu} />
        </span>
      </div>
      <div>
        <span
          className="cursor-pointer font-medium"
          onClick={() => buttonMain(pathName, router)}
        >
          LEPRECHAUN
        </span>
      </div>

      <div className="hidden md:flex gap-8 place-content-center">
        <span
          className="cursor-pointer font-medium border-b-[3px] border-bknav	 hover:border-b-navcolor"
          onClick={() => router.push("/Contact")}
        >
          CONTACTO
        </span>
        <span className="relative group cursor-pointer border-b-[3px] border-bknav font-medium hover:border-b-navcolor transition-colors duration-300">
          CATEGORIAS
          <NavCategorias router={router}/>
        </span>
        <span className="cursor-pointer border-b-[3px] border-bknav font-medium  hover:border-b-navcolor">CONOCENOS</span>
      </div> 


      <div>
      <span className="cursor-pointer  font-medium flex justify-center items-center">
          <a className="flex justify-center items-center p-2 cursor-pointer h-10 w-10 rounded-full relative" onClick={() => setab(!abier)}> 
            {Cart.length > 0 && (
              <div className="absolute h-[18px] w-[18px] rounded-full bg-[rgb(255_106_26)] text-[white] text-[14px] flex items-center justify-center top-[10%] right-0">{cantidad}</div>
            )}
            <CartIcon />
          </a>
          <CartComponent isOpen={abier} toggleCart={toggleCart} />
    
        </span>
      </div>
      <div
        className={`flex flex-col w-[180px] text-[14px]">
            <div className="w-[cal(100%-20px)] h-[100px] absolute top-[68px] left-2.5 right-2.5 border-[1px] border-black bg-white z-[15000] rounded-[3px] overflow-hidden opacity-0 invisible transition-opacity duration-500 ease-in-out transition-visibility ${modalVisible ? "opacity-100 visible" : ""}`}
      >
        <div className="opacity-90 cursor-pointer" onClick={()=> closedModal()}><ClosedIcon className="1.4rem"/></div>
      <div className="flex gap-[6px] pt-2.5 pr-[30px] pb-2.5 pl-2.5 ">
           <div className="w-[70px] h-[70px] sm:w-[55px] sm:h-[55px] overflow-hidden relative">
            <Image
             src={ModalProduct?.image || "/images/taos.jpg"} 
             alt="modalImageProduct"
             width={55}
             height={55}
            //  style={{objectFit: "cover"}}
            />
           </div>
           <div className="flex flex-col w-[210px] sm:w-[180px] text-[15px] sm:text-[14px]">
              <span>{ModalProduct?.name}</span>
              <span>1 X ${ModalProduct?.pricears}</span>
              <span className="font-bold">¡Agregado al carrito con éxito!</span>
           </div>
        </div>
        </div>

    </div>
  );
};





      //       <div
      //   className={`w-[290px] h-[100px] absolute top-[68px] right-[30px] border-[1px] border-black bg-white z-[15000] rounded-[3px] overflow-hidden opacity-0 invisible transition-opacity duration-500 ease-in-out ${modalVisible ? "opacity-100 visible" : ""}`}
      // >