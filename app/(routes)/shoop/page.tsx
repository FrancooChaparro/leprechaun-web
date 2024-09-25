"use client";
import React, { useEffect, useState } from "react";
import styles from "./shoop.module.css";
import { ProductCard } from "@/components/product-card/ProductCard";
import { useMyContext } from "@/context/ListContext";
import { DownIcon, FilterIcon } from "@/Icons/CartIcon";
import { Product } from "@/types/types";
import { Loader } from "@/components/loader/Loader";

const Shoop = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showMoreProducts, setShowMoreProducts] = useState<number>(20);
  const TOP_OFFSET = 400;
  const { Productos } = useMyContext();
  // const [ko, setKo] = useState<Product[]>(Productos)
 
  // useEffect(()=> {
  //   setKo(Productos)

  // }, [Productos])

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
 
  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedValue = event.target.value;
  //   const selectedOption = event.target.selectedOptions[0];
  //   const dataDirection = selectedOption.getAttribute('data-direction'); 

  //   aplicarFuncion(selectedValue, dataDirection);
  // };



  // const aplicarFuncion = (value: string, direction: string | null) => {
  //   let sortedProducts = [...ko]; 

  //   if (value === 'name') {
  //     sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  //     if (direction === 'desc') {
  //       sortedProducts.reverse(); 
  //     }
  //   } else if (value === 'price') {
  //     sortedProducts.sort((a, b) => a.price - b.price);
  //     if (direction === 'desc') {
  //       sortedProducts.reverse(); 
  //     }
  //   }

  //   setKo(sortedProducts); 
  // };

  return (
    <div className={styles["container-main-shoop"]}>
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
          <label htmlFor="">{Productos.length} productos encontrados</label>
        </div>
        <div className={styles["order"]}>
          <label htmlFor="select-order">ORDENAR</label>
          <select name="ordenar" id="select-order" >
            <option value="name" data-direction="asc">
              Nombre A - Z
            </option>
            <option value="price" data-direction="asc">
              Menor-Mayor
            </option>
            <option value="price" data-direction="desc">
            Mayor-Menor
            </option>
          </select>
        </div>
      </div>

      <div className={styles["test"]}>
        <div className={styles["container-main-shoop-cards"]}>
          {Productos.length === 0 ? <Loader />
           : Productos.map((e) => {
              return (
                <ProductCard
                  key={e.id}
                  amount={e.amount}
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                  description={e.description}
                  compose={e}
                />
              );
            }).slice(0, showMoreProducts) }
        </div>
      </div>
      {showMoreProducts < Productos.length && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button className={styles["buy-button"]} onClick={() => setShowMoreProducts(showMoreProducts + 20)}>
            <a>Quiero ver más <DownIcon /></a>
          </button>
        </div>
      )}
    </div>
    
  );
};

export default Shoop;
