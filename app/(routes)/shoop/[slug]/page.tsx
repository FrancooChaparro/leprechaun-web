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
  const [ProductsByParams,setProductsByParams] = useState<Product[]>([])
  // Decodificar el slug
  const decodedSlug = decodeURIComponent(params.slug);
  const [showMoreProducts, setShowMoreProducts] = useState<number>(20);


  // Aquí puedes usar el `decodedSlug` para lo que necesites
  useEffect(() => {
    setProp(decodedSlug);
  }, [decodedSlug]);

  const { Productos } = useMyContext();

  useEffect(() => {
    if (Productos) {
      const filteredProducts = Productos.filter((e) => e.description?.toLocaleLowerCase() === decodedSlug.toLocaleLowerCase());
      setProductsByParams(filteredProducts);
    }
  }, [Productos, decodedSlug]);


  console.log(Productos, "productos");
  console.log( ProductsByParams[0]?.subtitle, "decode");
  
  
    return (
      <div className={styles["container-main-shoop"] }>
      
      <div className={styles["container-main-shoop-data"]}>
          <h2>{prop}</h2>
          <h4 style={{textAlign: "center", lineHeight: "1.5"}}>
            {
              ProductsByParams[0]?.subtitle ?  ProductsByParams[0]?.subtitle : ""
            }
          </h4>
        </div>
  
  
        <div className={styles["container-main-shoop-actions"]}>
          <div className={styles["filter"]}>
            <FilterIcon />
            <label  htmlFor="">{ProductsByParams.length} productos encontrados</label></div>
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
          {ProductsByParams.length &&
              ProductsByParams.map((e) => {
                return (
                  <ProductCard key={e.id} amount={e.amount} id={e.id} name={e.name} price={e.price} image={e.image} description={e.description} compose={e} />
                );
              }).slice(0, showMoreProducts)}
          </div>
        </div>
        {showMoreProducts < ProductsByParams.length && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button className={styles["buy-button"]} onClick={() => setShowMoreProducts(showMoreProducts + 20)}>
            Quiero ver más
          </button>
        </div>
      )}
  
      </div>
    );
  };
