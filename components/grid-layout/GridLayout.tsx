import React from "react";
import styles from "./grid-layout.module.css";
import { Catalogue } from "../catalogue/Catalogue";
import { data } from "@/models/products";

export const GridLayout = () => {
  return (
    <div className="py-[1.2rem] px-[1.5rem] md:py-8 md:px-12 lg:px-40 lg:pt-16 lg:pb-20 w-[100vw]">
      <div className="py-4">
        <h4 className="text-lg lg:text-[22px] text-[rgb(41_40_40)]" >Algunos de Nuestras categorias</h4>
      </div>
      <div className="grid w-[100%] grid-cols-3 gap-2.5 auto-rows-[minmax(220px,auto)]">
        {data.length &&
          data.map((prod, index) => (
            <Catalogue
              product={prod.product}
              url={prod.url}
              key={index}
              variable={prod.variable}
              urlCategory={prod.urlCategory}
              imageBlur={prod.imageBlur}
            />
          ))}
      </div>
    </div>
  );
};



// export const GridLayout = () => {
//   return (
//     <div className={styles["container-all"]}>
//       <div className={styles["container-title"]}>
//         <h4>Algunos de Nuestras categorias</h4>
//       </div>
//       <div className={styles["container-layout-images"]}>
//         {data.length &&
//           data.map((prod, index) => (
//             <Catalogue
//               product={prod.product}
//               url={prod.url}
//               key={index}
//               variable={prod.variable}
//               urlCategory={prod.urlCategory}
//               imageBlur={prod.imageBlur}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };
