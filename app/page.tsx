import { Banner } from "@/components/banner/Banner";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div style={{height: "100vh"}}></div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <hr style={{width: "80%"}} />

      </div>
      <Footer />
    </main>
  );
}
