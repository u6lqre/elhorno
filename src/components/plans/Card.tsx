import localFont from "next/font/local";
import styles from "./plans.module.css";

const socialFont = localFont({
  src: "../../assets/fonts/ABCSocialExtended-Bold.otf",
});

const items = [
  "Convierte usuarios en clientes",
  "Carga rápida y buen funcionamiento",
  "Adaptada a móvil y ordenador",
  "Preparada para aparecer en Google",
  "Diseño totalmente personalizado",
  "Publicación en internet incluida",
];

function Card() {
  return (
    <div className={styles.card}>
      <div className={socialFont.className}>
        <p className={styles.label}>Webs diseñadas para vender</p>
        <div className={styles.timeline}>
          <span>4</span>
          <span>SEMANAS</span>
        </div>
      </div>
      <p className={styles.description}>
        Creamos tu web desde cero, lista para conseguir resultados.
      </p>
      {items && (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li className={styles.list_item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}

      <a href="#" className={styles.cta}>
        Solicitar información
      </a>
    </div>
  );
}

export default Card;
