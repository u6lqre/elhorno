import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import styles from "./page.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Plans />
      <Footer />
    </main>
  );
}

export default Home;
