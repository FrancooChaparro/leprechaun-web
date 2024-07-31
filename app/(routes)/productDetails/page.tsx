import React from "react";
import styles from "./product-details.module.css";

const ProductDetails = () => {
  return (
    <div className={styles["container"]}>

      <div className={styles["containera"]}>
        <div className={styles["container-card-product-image"]}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XvpMZ2lfOGYwE9v4TerB5W1g6xLLD__61A&s"
            alt="product"
          />
        </div>
      </div>

      <div className={styles["containerb"]}>

        <div className={styles["container-card-product-data"]}>
          <div className={styles["container-card-product-data-top"]}>
            <h2>Falcon PHO Carwash</h2>
            <h4>$15.00</h4>
            <div className={styles["container-select"]}>
            <p>Color: Rosa</p>
            <div className={styles["container-select-color"]}>
                <div className={styles["selector"]}><div></div></div>
                <div className={styles["selector"]}><div></div></div>
                <div className={styles["selector"]}><div></div></div>
            </div>
            </div>
            <div className={styles["container-mount"]}>
            <p>Cantidad</p>
            <input type="text" />
            </div>
            <button>AÑADIR AL CARRITO</button>
          </div>

          <div className={styles["container-card-product-data-description"]}>
            <div className={styles["description"]}>
               <span>DESCRIPCIÓN</span>
               <span>--</span>
            </div>
            <div className={styles["description-info"]}>
               <p>Tamaño: 2x2</p>
               <p>Material: Algondodn</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus quo vel debitis explicabo assumenda libero iure tempora accusantium ru alias.</p>
               <p>dwqdqwdqwdqwdqwdwqdwqdwqwdw</p>
             </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ProductDetails;

{
  /* <div className={styles["container-card-product"]}>
          <div className={styles["container-card-product-image"]}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XvpMZ2lfOGYwE9v4TerB5W1g6xLLD__61A&s" alt="product" />
          </div>
          <div className={styles["container-card-product-data"]}>
              <div className={styles["container-card-product-data-top"]}>
                  <h2>Falcon PHO Carwash</h2>
                  <h4>$15.00</h4>
                  <p>Color: Rosa</p>
                  <p>Cantidad</p>
                  <button>AÑADIR AL CARRITO</button> 
              </div>
          </div>
       </div> */
}
