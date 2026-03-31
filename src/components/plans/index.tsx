import Card from "./Card";
import styles from "./plans.module.css";

function Plans() {
  return (
    <section className={styles.plans}>
      <p>Todo lo que necesitas para tu producto digital.</p>
      <Card />
      <div className={styles.custom_idea_cta}>
        <span>¿Necesitas algo más que una web?</span>
        <a href="#">Cuéntanos tu idea →</a>
      </div>
    </section>
  );
}

export default Plans;
