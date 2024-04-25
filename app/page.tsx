import { Banner } from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { ProductCard } from "@/components/product-card/ProductCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
 <div className={styles["CategoriesComponent_container-section"]}>
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
      </div> 
      <Footer />
    </main>
  );
}


