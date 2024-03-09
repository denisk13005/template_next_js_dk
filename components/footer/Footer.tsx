import { Acme, Pattaya } from "next/font/google";
import AnimatedLogo from "../animatedLogo/AnimatedLogo";
import styles from "./styles.module.scss";
const pattaya = Pattaya({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const acme = Acme({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerOnBoardLeft}>
        <div className={styles.footerOnBoardLeftInside}>
          <span className={`${pattaya.className}  ${styles.topSpan}`}>
            34 rue Virgile Marron
          </span>
          <br />
          <span className={`${styles.bottomSpan} ${acme.className}`}>
            13005 Marseille
          </span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <AnimatedLogo
          width="160px"
          height="160px"
          fixedText="dk"
          circularText="développement-web "
          fixedTextSize="52px"
          cercleTextSize="22px"
        />
        {/* <Image src={"/logo.svg"} alt="logo" fill />{" "} */}
      </div>
      <div className={styles.footerOnBoardRight}>
        <div className={styles.footerOnBoardRightInside}>
          <span className={`${pattaya.className}  ${styles.topSpan}`}>
            06.24.09.65.48
          </span>
          <br />
          <span className={`${styles.bottomSpan} ${acme.className}`}>
            kirmanndenispro@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
