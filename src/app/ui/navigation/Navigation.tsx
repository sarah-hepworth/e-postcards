"use client";

import { motion } from "framer-motion";
import React, { FC, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { robotoBold, robotoRegularItalic } from "@/app/ui/fonts";
import { HamburgerMenu } from "@/app/ui/navigation/hamburgerMenu/HamburgerMenu";
import { Links } from "@/app/ui/navigation/links/Links";
import { HamburgerMenuCssAnimationOnly } from "@/app/ui/navigation/hamburgerMenu/HamburgerMenuCssAnimationOnly";

export const Navigation: FC = (): ReactElement => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState<boolean>(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 90% 50px)",
      transition: {
        type: "spring",
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      clipPath: "circle(20px at 90% 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <div className="top-0 w-full bg-indigo-50 mb-4`">
      <div className="flex justify-center items-start flex-col sticky p-4 lg:p-8">
        <div className="container mx-auto">
          <div className="flex justify-between lg:justify-around text-left lg:mb-4">
            <div className="flex w-1/4">
              <div className="hidden lg:w-auto lg:block">
                <Link href="/">
                  <h1 className={`tracking-wide text-indigo-700	text-3xl py-3 ${robotoBold.className}`}>JellyWish</h1>
                </Link>
                <span className={robotoRegularItalic.className}>Postcards delivered straight to their mailbox</span>
              </div>

              <Image src="/logo.svg" width="50" height="50" alt="JellyWish Logo" />
            </div>
            {/*<HamburgerMenuCssAnimationOnly open={openMobileMenu} setOpen={setOpenMobileMenu} />*/}

            <motion.div animate={openMobileMenu ? "open" : "closed"} className="inline-flex items-center lg:hidden">
              <motion.div className="bg-white absolute top-0 left-0 h-screen w-max" variants={variants}>
                <Links />
              </motion.div>

              <HamburgerMenu open={openMobileMenu} setOpen={setOpenMobileMenu} />
            </motion.div>

            <div className="hidden lg:flex justify-center items-center">
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

          <div className={`hidden lg:flex justify-center items-center w-full ${robotoBold.className}`}>
            <Links />
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
