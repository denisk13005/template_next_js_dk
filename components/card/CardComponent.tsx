"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function CardComponent() {
  const router = useRouter();
  const redirectToStripe = async () => {
    router.push("https://buy.stripe.com/test_7sI15daPAf2tabucMM");
  };
  return (
    <article className={styles.cardContainer}>
      <h3>title</h3>
      <section>informations</section>{" "}
      <button
        onClick={redirectToStripe}
        className={styles.btn}
        type="submit"
        value={10}
      >
        Buy For Only 10€
      </button>
    </article>
  );
}
