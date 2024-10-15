"use client"; 
import { useCallback, useState, useEffect } from "react";
import { useMyContext } from "@/context/ListContext";
import styles from "./product-details.module.css";
import { LessIcon } from "@/Icons/CartIcon";
import { Product } from "@/types/types";
import Image from "next/image";

export default function Page({product} : {product : Product}) {
  const { Add, message } = useMyContext();
  const [show, setShow] = useState(true);
  const [ModalActive, setModalActive] = useState(false);
  const [amount, setAmount] = useState(1); // Estado para almacenar la cantidad ingresada

  
  const [userLocation, setUserLocation] = useState<any>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
        }
      );
    } else {
      console.log("La geolocalización no está disponible en este navegador.");
    }
  }, []);


  useEffect(() => {
    if (ModalActive) {
      const timer = setTimeout(() => setModalActive(false), 4800);
      return () => clearTimeout(timer);
    }
  }, [ModalActive]);
  
  const fuc = useCallback((product: Product, cantidad: number) => {
    Add(product, cantidad);
    setModalActive(true);
    setTimeout(() => {
      setModalActive(false);
    }, 4800);
  }, [Add]);
  
  const handleCantidadChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setAmount(value);
    }
  }, []);

  return (
    <div className={styles["container"]}>
       <div className={styles["containera"]}>
        <div className={styles["container-card-product-image"]}>
          <Image
            src={product?.image}
            alt="product"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading="lazy"
            style={{objectFit: "cover", objectPosition: "center", filter: "brightness(110%)"}}
          />
        </div>
      </div>

      <div className={styles["containerb"]}>
        <div className={styles["container-card-product-data"]}>
          <div className={styles["container-card-product-data-top"]}>
            <h2>{product?.name}</h2>
            {product?.subname && (
              <h3>
                {product?.subname}
              </h3>
            )}
            <h5 style={{  }}>
              {product?.description} - {product?.marca}
            </h5>
            <h4>$ {product?.pricears}</h4>
            <div className={styles["container-mount"]}>
              <p>Cantidad</p>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={handleCantidadChange}
              />
            </div>
            <button
              className={styles["btn-detail"]}
              onClick={() => fuc(product, amount)}
            >
              AÑADIR AL CARRITO
            </button>
          </div>
          {ModalActive && <div className={styles["modal-cart-btn"]}>{message}</div>}

          <div className={styles["container-shop"]}>
            <div
              className={styles["container-shop-top"]}
              onClick={() => setShow(!show)}
            >
              <span>DESCRIPCIÓN</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShow(!show)}
              >
                <LessIcon />
              </span>
            </div>
            <div
              className={`${styles["container-shop-bot"]} ${
                show ? styles["accordion-open"] : styles["accordion-closed"]
              }`}
            >
              <div className={styles["container-shop-bot-modal"]}>
                {product?.rubro && product?.rubro.length > 0
                  ? product?.rubro.map((e, index) => <span key={index}>{e}</span>)
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
