import { FC, ReactElement } from "react";
import styles from "@/app/navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { robotoBold, robotoRegularItalic } from "@/app/ui/fonts";

export const Navigation: FC = (): ReactElement => {
  return (
    <div className="top-0 w-full bg-indigo-50 mb-4`">
      <div className="flex justify-center items-start flex-col sticky p-8">
        <div className="container mx-auto">
          <div className="flex justify-around mb-4 text-left">
            <div className="flex w-1/4">
              <div className="lg:w-auto">
                <Link href="/">
                  <h1 className={`tracking-wide text-indigo-700	text-3xl py-3 ${robotoBold.className}`}>JellyWish</h1>
                </Link>
                <span className={robotoRegularItalic.className}>Postcards delivered straight to their mailbox</span>
              </div>

              <Image src="/logo.svg" width="100" height="100" alt="JellyWish Logo" />
            </div>

            <div className="flex justify-center items-center">
              <input className="max-w-sm p-3 border border-indigo-700/100 rounded-xl" placeholder="Search..."></input>
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
