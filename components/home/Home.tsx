"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function HomeComponent() {
  const { isLoaded, user } = useUser();
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <section>
      <div className={styles.title}>
        <div>
          <span className={styles.span1}>H</span>
          <span className={styles.span2}>O</span>
          <span className={styles.span3}>M</span>
          <span className={styles.span4}>E</span>
        </div>
        <div>
          <span className={styles.span6}>P</span>
          <span className={styles.span7}>A</span>
          <span className={styles.span8}>G</span>
          <span className={styles.span9}>E</span>
        </div>
      </div>

      <div>BONJOUR {isLoaded && user && user.firstName}</div>
    </section>
  );
}
