"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function CardComponent() {
  return (
    <article className={styles.cardContainer}>
      <h3>title</h3>
      <section>informations</section>{" "}
      <Link href={"https://buy.stripe.com/test_7sI15daPAf2tabucMM"}>
        <button type="submit" value={10}>
          10€
        </button>
      </Link>
    </article>
  );
}
