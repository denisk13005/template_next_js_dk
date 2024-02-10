import CardComponent from "@/components/card/CardComponent";
import { Pattaya } from "next/font/google";
import styles from "./styles.module.scss";
const pattaya = Pattaya({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function page() {
  return (
    <section>
      <h1
        className={pattaya.className}
        style={{ fontSize: "34px", textAlign: "center" }}
      >
        NOS OFFRES
      </h1>
      <div className={styles.cardContainer}>
        <CardComponent />
      </div>
    </section>
  );
}
