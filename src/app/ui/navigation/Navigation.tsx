import { FC, ReactElement } from "react";
import styles from "@/app/navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { robotoBold, robotoRegularItalic } from "@/app/ui/fonts";

export const Navigation: FC = (): ReactElement => {
  return (
    <div className={`${styles.navigation}`}>
      <div className={styles.border}>
        <div className={`container mx-auto`}>
          <div className={styles.titleRow}>
            <div className={styles.logoArea}>
              <div className={styles.titleContainer}>
                <Link href="/">
                  <h1 className={`${styles.title} text-3xl py-3 ${robotoBold.className}`}>Jellywish</h1>
                </Link>
                <span className={robotoRegularItalic.className}>Postcards delivered straight to their mailbox</span>
              </div>

              <Image className={styles.svg} src="/logo.svg" width="100" height="100" alt="Plane icon" />
            </div>

            <div className={styles.searchContainer}>
              <input className={styles.input} placeholder="Search..."></input>
            </div>

            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image className={styles.svg} src="/plane-arrival-solid.svg" width="40" height="40" alt="Plane icon" />
                <span>Next Holiday</span>
              </div>
              <div className={styles.icon}>
                <Image
                  className={styles.svg}
                  src="/basket-shopping-solid.svg"
                  width="40"
                  height="40"
                  alt="Basket icon"
                />
                <span>Basket</span>
              </div>
              <div className={styles.icon}>
                <Image className={styles.svg} src="/user-large-solid.svg" width="40" height="40" alt="Account icon" />
                <span>Account</span>
              </div>
            </div>
          </div>

          <div className={`${styles.items} ${robotoBold.className}`}>
            <Link href="/product" className={styles.item}>
              Postcards
            </Link>
            <Link href="/" className={styles.item}>
              Personalise your own
            </Link>
            <Link href="/" className={styles.item}>
              Holiday photobooks
            </Link>
            <Link href="/" className={styles.item}>
              Group postcards
            </Link>
            <Link href="/" className={styles.item}>
              Sustainability
            </Link>
            <Link href="/" className={styles.item}>
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.banner}>
        <div className={`container mx-auto ${robotoBold.className}`}>
          Buy 2 postcards for the price of 1 with code POST50
        </div>
      </div>
    </div>
  );
};
