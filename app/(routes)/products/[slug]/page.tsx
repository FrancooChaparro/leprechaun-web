"use client"; // lo sacamos
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";
import styles from "./product-details.module.css";
import { LessIcon } from "@/Icons/CartIcon";
import { Product } from "@/types/types";
import Image from "next/image";
import { BadRequest } from "@/components/bad-request/BadRequest";
import { Loader } from "@/components/loader/Loader";



export default function Page({ params }: { params: { slug: string } }) {
  // params.slug = cepillo
  // const data = await fecth("asdasdasdas/cepillo")

  const router = useRouter();
  const { Productos, Add, message } = useMyContext();
  const [teamID, setTeamID] = useState<Product>();
  const [show, setShow] = useState(true);
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

  useEffect(() => {
    const param = () => {
      const team = Productos.find((e) => e.urlProduct === params.slug);
      if (team) {
        setTeamID(team);
      } else {
        return <Loader />;
      }
    };
    param();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug, Productos, teamID]);


  if (!teamID) {
    return <Loader />;
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["containera"]}>
        <div className={styles["container-card-product-image"]}>
          <Image
            src={teamID.image}
            alt="product"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading="lazy"
            //  style={{objectFit: "cover", objectPosition: "center", filter: "brightness(110%)"}}
          />
        </div>
      </div>

      <div className={styles["containerb"]}>
        <div className={styles["container-card-product-data"]}>
          <div className={styles["container-card-product-data-top"]}>
            <h2 style={{ color: "#3C3C3B" }}>{teamID.name}</h2>
            {teamID?.subname && (
              <h3 style={{ color: "#409735", fontSize: "20px" }}>
                {teamID?.subname}
              </h3>
            )}
            <h5 style={{ color: "#60697b", fontSize: "14px" }}>
              {teamID.description} - {teamID?.marca}
            </h5>
            <h4>$ {teamID.pricears}</h4>
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
