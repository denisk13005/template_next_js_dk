"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function CardComponent() {
  const router = useRouter();
  const redirectToStripe = async () => {
    router.push("https://buy.stripe.com/test_8wMbJR0aW9I9gzS9AB");
  };
  return (
    <article className={styles.cardContainer}>
      <h3>Site Vitrine</h3>
      <section>Réalisation d'un site vitrine clé en main </section>{" "}
      <button
        onClick={redirectToStripe}
        className={styles.btn}
        type="submit"
        value={10}
      >
        A Partir De 1500€
      </button>
    </article>
  );
}
