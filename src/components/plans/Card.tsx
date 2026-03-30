import localFont from "next/font/local";
import styles from "./plans.module.css";

const socialFont = localFont({
  src: "../../assets/fonts/ABCSocialExtended-Bold.otf",
});

const items = [
  "Montamos tu web desde cero",
  "Diseño totalmente personalizado",
  "Adaptada a móvil y ordenador",
  "Carga rápida y buen funcionamiento",
  "Convierte usuarios en clientes",
  "Preparada para aparecer en Google",
  "Publicación en internet incluida",
];

function Card() {
  return (
    <div className={styles.card}>
      <div className={socialFont.className}>
        <p className={styles.label}>Construcción de páginas web</p>
        <div className={styles.timeline}>
          <span>4</span>
          <span>SEMANAS</span>
        </div>
      </div>
      <p className={styles.description}>
        Creamos tu web completa, lista para conseguir resultados.
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
