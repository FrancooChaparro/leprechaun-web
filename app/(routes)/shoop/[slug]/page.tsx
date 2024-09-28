"use client"
import React, { useEffect, useState } from "react";
import styles from "../shoop.module.css";
import { ProductCard } from "@/components/product-card/ProductCard";
import { useMyContext } from "@/context/ListContext";
import { FilterIcon } from "@/Icons/CartIcon";
import { Product } from "@/types/types";
import { Loader } from "@/components/loader/Loader";


export default function Page({ params }: { params: { slug: string } }) {
  const [ProductsByParams,setProductsByParams] = useState<Product[]>([])
  const [showMoreProducts, setShowMoreProducts] = useState<number>(20);
  const { Productos } = useMyContext();

  useEffect(() => {
    if (Productos) {
      const filteredProducts = Productos.filter((e) => e.urlCategory === params.slug);
      setProductsByParams(filteredProducts);
    }
  }, [Productos]);

  
  const fill = () => {
    if (ProductsByParams.length === 0) {
      return "No se encontraron productos";
    } else if (ProductsByParams.length <= showMoreProducts) {
      return `Mostrando ${ProductsByParams.length} productos`;
    } else {
      return `Mostrando 1-${showMoreProducts} de ${ProductsByParams.length} productos`;
    }
  };
  
  const handleShowMore = () => {
    if (showMoreProducts + 20 > ProductsByParams.length) {
      setShowMoreProducts(ProductsByParams.length); 
    } else {
      setShowMoreProducts(showMoreProducts + 20); 
    }
  };

    return (
      <div className={styles["container-main-shoop"] }>
      
      <div className={styles["container-main-shoop-data"]}>
          <h2>{ProductsByParams[0]?.titleCategory}</h2>
          <h4 style={{textAlign: "center", lineHeight: "1.5"}}> 
            {/* {
              ProductsByParams[0]?.subtitle ?  ProductsByParams[0]?.subtitle : ""
            } */}
            En nuestra tienda encontrarás una selección premium de productos para el cuidado y detailing de autos. Trabajamos con las marcas más reconocidas del mercado como 3D Products, Menzerna, Acrochemical y muchas más, asegurando la mejor calidad para la protección y embellecimiento de tu vehículo. Ya sea que busques pulidores, ceras, limpiadores o accesorios especializados, tenemos todo lo que necesitas para mantener tu auto en perfecto estado.
          </h4>
        </div>
        <div className={styles["container-main-shoop-actions"]}>
          <div className={styles["filter"]}>
            <FilterIcon />
            <label htmlFor="">
            {fill()}
            </label>
           </div>
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
          {ProductsByParams.length === 0 ? <Loader />
            :  ProductsByParams.map((e) => {
                return (
                  <ProductCard key={e.id} amount={e.amount} id={e.id} name={e.name} price={e.price} image={e.image} description={e.description} compose={e} urlProduct={e.urlProduct} pricears={e.pricears}/>
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
          <button className={styles["buy-button"]} onClick={handleShowMore}>
            Quiero ver más
          </button>
        </div>
      )}
  
      </div>
    );
  };
