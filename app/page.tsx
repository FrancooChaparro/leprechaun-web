import { Banner } from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { ProductCard } from "@/components/product-card/ProductCard";
import { GridLayout } from "@/components/grid-layout/GridLayout";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <GridLayout />   
      <Contact />
      <Footer />
    </main>
  );
}

{
  /* <div className={styles["CategoriesComponent_container-section"]}>
<div className={styles["CategoriesComponent_header-categories"]}>
  <div>
    <p className={styles["CategoriesComponent_title__noiMO"]}>
      Proyectos
    </p>
    <p className={styles["CategoriesComponent_subtitle__zqBgA"]}>
      Algunas de nuestras categorias
    </p>
  </div>
</div>
<div className={styles["CategoriesComponent_container-categories"]}>
  <ProductCard />
  <ProductCard />
  <ProductCard />
  <ProductCard />
</div>
</div>  */
}


// <div className={styles["container-all"]}>
// <div className={styles["container-title"]}>
//   <h4>Titulo</h4>
// </div>
// <div className={styles["container-layout-images"]}>
//   <div className={styles["one"]}>
//     <img src="/images/3.jpg" alt="adsa" />
//   </div>
//   <div className={styles["two"]}>
//     <img src="/images/4.webp" alt="as" />
//   </div>
//   <div className={styles["three"]}>
//     <img src="/images/esponjas.jpg" alt="sss" />
//   </div>
//   <div className={styles["four"]}>
//     <img src="/images/3.jpg" alt="a" />
//   </div>
// </div>
// </div>