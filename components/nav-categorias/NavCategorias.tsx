"use client"
import React from "react";
import styles from "@/components/nav/Nav.module.css";
import { categorias } from "@/models/products";
import { Categorias } from "@/types/types";
import { roboto } from "@/utils/fonts";

export const NavCategorias = ({ router } : { router: any} ) => {
  const products: Categorias[] = categorias;
  
  return (

    <div className={`cor fixed top-[64px] left-0 flex flex-wrap bg-bknav min-h-[255px] w-[100%] font-normal text-navcolor gap-4 justify-center items-center p-12 opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible ${roboto.className}`}>
      <div className={styles.cor}> 
        <div className="grid grid-cols-3 gap-2.5">
         {products.length > 0 &&
            products.map((e) => {
              return (
                <div className="w-[250px]" key={e.id}>
                  <span className="cursor-pointer underline text-primaryblack text-[16px]" onClick={()=> router.push(`/shoop/${e.url}`)}> 
                    {e.nombre}
                  </span>
                </div>
              );
            })} 
        </div>
      </div>
    </div>
  );
};
