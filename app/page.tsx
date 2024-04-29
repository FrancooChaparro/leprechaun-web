import { Banner } from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { GridLayout } from "@/components/grid-layout/GridLayout";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <GridLayout />   
    </main>
  );
}

