import Card, { CardConfig } from "./Card";
import styles from "./plans.module.css";

const cards: CardConfig[] = [
  {
    label: "Construcción de páginas web",
    timeline: "4",
    description: "Creamos tu web completa, lista para conseguir resultados.",
    options: [
      "Montamos tu web desde cero",
      "Diseño totalmente personalizado",
      "Adaptada a móvil y ordenador",
      "Carga rápida y buen funcionamiento",
      "Convierte usuarios en clientes",
      "Preparada para aparecer en Google",
      "Publicación en internet incluida",
    ],
    color: "blue",
  },
  {
    label: "Custom",
    timeline: "#",
    description: "¿No encuentras lo que buscas? Cuéntanos tu idea.",
    color: "pink",
  },
];

function Plans() {
  return (
    <section className={styles.plans}>
      <p>Todo lo que necesitas para tu producto digital.</p>
      <div className={styles.cards_container}>
        {cards.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            timeline={card.timeline}
            description={card.description}
            options={card.options}
            color={card.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Plans;
