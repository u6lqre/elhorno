import Hero from "@/components/hero";
import styles from "./page.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}

export default Home;
