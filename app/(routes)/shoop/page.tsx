"use client"
import React, { useEffect, useState } from "react";
import styles from "./shoop.module.css";
import { ProductCard } from "@/components/product-card/ProductCard";
import { Filter } from "@/components/filter/Filter";
import { products } from "@/models/products";
import { useMyContext } from "@/context/ListContext";


export const Shoop = () => {
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const TOP_OFFSET = 400;
  const { Productos } = useMyContext()


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div className={styles["container-main-shoop"] }>
    
        {/* <Filter isOpen={show} /> */}

    
      <div className={styles["container-main-shoop-data"]}>
        <h2>Guantes</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          tenetur quibusdam sit.
        </h4>
      </div>


      <div className={styles["container-main-shoop-actions"]}>
        <div className={styles["filter"]}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg><label  htmlFor="">FILTRAR</label></div>
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
                <ProductCard key={e.id} name={e.name} price={e.price} image={e.image} description={e.description} />
              );
            })}
        </div>
      </div>


    </div>
  );
};

export default Shoop;
