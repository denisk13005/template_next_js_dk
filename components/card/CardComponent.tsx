"use client";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function CardComponent() {
  const router = useRouter();
  const sellObject = async () => {
    // router.push("https://buy.stripe.com/test_8wMbJR0aW9I9gzS9AB");
    let data = await fetch("https://api.lemonsqueezy.com/v1/", {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorisation: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
      },
    });
  };
  return (
    <article className={styles.cardContainer}>
      <h3>Site Vitrine</h3>
      <section>Réalisation d&apos;un site vitrine clé en main </section>{" "}
      <button
        onClick={sellObject}
        className={styles.btn}
        type="submit"
        value={10}
      >
        A Partir De 1500€
      </button>
    </article>
  );
}
