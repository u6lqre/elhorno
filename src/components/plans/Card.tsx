import localFont from "next/font/local";
import styles from "./plans.module.css";

const socialFont = localFont({
  src: "../../assets/fonts/ABCSocialExtended-Bold.otf",
});

export type CardConfig = {
  label: string;
  timeline: string;
  description: string;
  options?: string[];
  color: string;
};

function Card({ label, timeline, description, options, color }: CardConfig) {
  const accent = `var(--${color})`;

  return (
    <div
      className={styles.card}
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className={socialFont.className}>
        <p className={styles.label}>{label}</p>
        <div className={styles.timeline}>
          <span>{timeline}</span>
          <span>SEMANAS</span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      {options && (
        <ul className={styles.list}>
          {options.map((item, index) => (
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
