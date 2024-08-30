"use client"
import React, { useEffect, useState } from "react";
import styles from "../shoop.module.css";
import { ProductCard } from "@/components/product-card/ProductCard";
import { useMyContext } from "@/context/ListContext";
import { FilterIcon } from "@/Icons/CartIcon";
import { Product } from "@/types/types";
import { useRouter } from "next/router";
import { Loader } from "@/components/loader/Loader";


export default function Page({ params }: { params: { slug: string } }) {
  const [prop, setProp] = useState<string>();

  // Decodificar el slug
  const decodedSlug = decodeURIComponent(params.slug);


  // Aquí puedes usar el `decodedSlug` para lo que necesites
  useEffect(() => {
    setProp(decodedSlug);
  }, [decodedSlug]);


    const { Productos } = useMyContext()
 
  
    
    return (
      <div className={styles["container-main-shoop"] }>
      
      <div className={styles["container-main-shoop-data"]}>
          <h2>{prop}</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            tenetur quibusdam sit.
          </h4>
        </div>
  
  
        <div className={styles["container-main-shoop-actions"]}>
          <div className={styles["filter"]}>
            <FilterIcon />
            <label  htmlFor="">FILTRAR</label></div>
          <div className={styles["order"]}>
            <label htmlFor="" >ORDENAR</label>
            <select name="" id="">
              <option value="name" data-direction="asc">
                Nombre A - Z
              </option>
              <option value="name" data-direction="asc">
                Nombre A - Z
              </option>
              <option value="name" data-direction="asc">
                Nombre A - Z
              </option>
            </select>
          </div>
          </div>
  
  
        <div className={styles["test"]}>
          <div className={styles["container-main-shoop-cards"]}>
          {Productos.length &&
              Productos.map((e) => {
                return (
                  <ProductCard key={e.id} name={e.name} price={e.price} image={e.image} description={e.description} compose={e} />
                );
              })}
          </div>
        </div>
  
  
      </div>
    );
  };
