import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { robotoBold, robotoRegularItalic } from "@/app/ui/fonts";

export const Navigation: FC = (): ReactElement => {
  return (
    <div className="top-0 w-full bg-indigo-50 mb-4`">
      <div className="flex justify-center items-start flex-col sticky p-4 lg:p-8">
        <div className="container mx-auto">
          <div className="flex justify-between lg:justify-around mb-4 text-left">
            <div className="flex w-1/4">
              <div className="hidden lg:w-auto lg:block">
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

            <div className="hidden lg:flex ml-4">
              <div className="flex flex-col justify-center items-center p-1">
                <div className="w-20 h-20 flex justify-center items-center">
                  <Image src="/plane-arrival-solid.svg" width="40" height="40" alt="Plane icon" />
                </div>

                <span>Next Holiday</span>
              </div>

              <div className="flex flex-col justify-center items-center p-1">
                <div className="w-20 h-20 flex justify-center items-center">
                  <Image src="/basket-shopping-solid.svg" width="40" height="40" alt="Basket icon" />
                </div>

                <span>Basket</span>
              </div>

              <div className="flex flex-col justify-center items-center p-1">
                <div className="w-20 h-20 flex justify-center items-center">
                  <Image src="/user-large-solid.svg" width="40" height="40" alt="Account icon" />
                </div>

                <span>Account</span>
              </div>
            </div>
          </div>

          <div className={`flex justify-center items-center w-full ${robotoBold.className}`}>
            <Link href="/product" className="mx-2">
              Postcards
            </Link>
            <Link href="/" className="mx-2">
              Personalise your own
            </Link>
            <Link href="/" className="mx-2">
              Holiday photobooks
            </Link>
            <Link href="/" className="mx-2">
              Group postcards
            </Link>
            <Link href="/" className="mx-2">
              Sustainability
            </Link>
            <Link href="/" className="mx-2">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="items-center p-3 text-indigo-50 bg-pink-600 text-center">
        <div className={`container mx-auto ${robotoBold.className}`}>
          Buy 2 postcards for the price of 1 with code POST50
        </div>
      </div>
    </div>
  );
};
