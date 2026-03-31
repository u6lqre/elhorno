import LocalFont from "next/font/local";
import styles from "./hero.module.css";

const cristalFont = LocalFont({
  src: "../../assets/fonts/Cristal-Sans-Black.otf",
});

function Hero({}) {
  return (
    <div className={styles.hero}>
      <div className={styles.announcement_banner}>
        <span className={styles.pulse_dot}></span>
        <span>Plazas disponibles</span>
      </div>
      <h1 className={`${styles.heading} ${cristalFont.className}`}>
        establece <span className={styles.sketchy_underline}>resultados</span>{" "}
        <br /> y deja que <span className={styles.pen_underline}>el horno</span>{" "}
        los cocine
      </h1>
      <p>
        Creamos webs rápidas, optimizadas y con especial cuidado por el detalle
        para convertir visitas en clientes desde el primer día.
      </p>
      <button className={styles.cta}>Hablemos de tu proyecto</button>
    </div>
  );
}

export default Hero;
