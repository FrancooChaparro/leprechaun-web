"use client"
import React, { useEffect, useState } from "react";
import styles from "./shoop.module.css";
import { ProductCard } from "@/components/product-card/ProductCard";
import { useMyContext } from "@/context/ListContext";
import { FilterIcon } from "@/Icons/CartIcon";

 const Shoop = () => {
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
    
    <div className={styles["container-main-shoop-data"]}>
        <h2>Guantes</h2>
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

export default Shoop;
