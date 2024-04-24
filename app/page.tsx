import { Banner } from "@/components/banner/Banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  );
}
