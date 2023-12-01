import { FC, ReactElement } from "react";
import styles from "@/app/styles/hero.module.css";
import Image from "next/image";

export const Hero: FC = (): ReactElement => {
  return (
    <div className={styles.background}>
      <div className={`container mx-auto ${styles.container}`}>
        <Image src="/hero-postcard-stock-image.jpg" alt="Hero stock image" width="1000" height="1000" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Postcards delivered</h1>

          <p className={styles.text}>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec sodales leo. Vivamus pretium velit
            enim, eu aliquet nibh maximus et. Pellentesque in elit nisi. Morbi et sapien a mi finibus luctus. Donec
            maximus orci sit amet pretium maximus. Vestibulum pretium, metus eget rutrum consequat, tortor ex lacinia
            orci, sit amet convallis dui dui vel nulla. I
          </p>

          <button className={styles.button}>Send Now</button>
        </div>
      </div>
    </div>
  );
};
