import Hero from "@/components/hero";
import styles from "./page.module.css";
import Plans from "@/components/plans";

function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Plans />
    </main>
  );
}

export default Home;
