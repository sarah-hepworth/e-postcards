import { FC, ReactElement } from "react";
import styles from "@/app/navigation.module.css";

export const Navigation: FC = (): ReactElement => {
  return (
    <div className={styles.navigation}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Jellywish</h1>
        <span>Postcards delivered straight to their mailbox</span>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>Postcards</div>
        <div className={styles.item}>Personalise your own</div>
        <div className={styles.item}>Holiday photobooks</div>
        <div className={styles.item}>Group postcards</div>
      </div>
    </div>
  );
};
