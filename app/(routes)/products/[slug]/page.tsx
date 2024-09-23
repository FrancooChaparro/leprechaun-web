"use client"; // lo sacamos
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";
import styles from "./product-details.module.css";
import { LessIcon } from "@/Icons/CartIcon";
import { Product } from "@/types/types";
import { Loader } from "@/components/loader/Loader";
import Image from "next/image";
import { products } from "@/models/products";
import { AcordionCart } from "@/components/acordion-cart/Acordion-cart";

export default function Page({ params }: { params: { slug: string } }) {
  // params.slug = cepillo
  // const data = await fecth("asdasdasdas/cepillo")

  const router = useRouter();
  const { Productos, Add, message } = useMyContext();
  const [teamID, setTeamID] = useState<Product>();
  const [show, setShow] = useState(true);
  const [selectedColor, setSelectedColor] = useState("Amarillo");
  const [test, setTest] = useState(false);
  const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad ingresada

  const fuc = (teamID: any, cantidad: any) => {
    Add(teamID, cantidad);
    setTest(true);
    setTimeout(() => {
      setTest(false);
    }, 4800);
  };

  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(Number(e.target.value)); // Actualiza el estado con el valor ingresado
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    const param = async () => {
      const team = Productos.find(
        (e) => e.name.toLowerCase() === decodeURI(params.slug.toLowerCase())
      );
      if (team) {
        setTeamID(team);
      } else {
        router.push("/");
      }
    };
    param();
    // eslint-disable-next-line
  }, [params.slug]);

  if (teamID === undefined) {
    return <Loader />;
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["containera"]}>
        <div className={styles["container-card-product-image"]}>
          {/* <Image 
           src={teamID.image}
           alt="product"
           fill
           loading="lazy"
           /> */}
          <img src={teamID.image} alt="product" />
        </div>
      </div>

      <div className={styles["containerb"]}>
        <div className={styles["container-card-product-data"]}>
          <div className={styles["container-card-product-data-top"]}>
            <h2 style={{ color: "#3C3C3B" }}>{teamID.name}</h2>
            {
            teamID?.subname && <h3 style={{ color: "#409735", fontSize: "20px" }}>
              {teamID?.subname}
            </h3> 
            }
            <h5 style={{ color: "#60697b", fontSize: "14px" }}>
              {teamID.description} - {teamID?.marca}
            </h5>
            <h4>${teamID.price}</h4>
            <div className={styles["container-mount"]}>
              <p>Cantidad</p>
              <input
                type="text"
                value={cantidad}
                onChange={handleCantidadChange}
              />
            </div>
            <button
              className={styles["btn-detail"]}
              onClick={() => fuc(teamID, cantidad)}
            >
              AÑADIR AL CARRITO
            </button>
          </div>
          {test && <div className={styles["modal-cart-btn"]}>{message}</div>}

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
                {teamID?.rubro && teamID.rubro.length > 0
                  ? teamID.rubro.map((e, index) => <span key={index}>{e}</span>)
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
