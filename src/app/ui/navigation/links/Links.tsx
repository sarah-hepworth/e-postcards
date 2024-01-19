import Link from "next/link";
import React, { ReactNode } from "react";

export const Links = (): ReactNode => (
  <div className="flex flex-col w-screen h-screen justify-center items-center">
    <Link href="/product" className="my-3 lg:mx-2 lg:my-0">
      Postcards
    </Link>
    <Link href="/" className="my-3 lg:mx-2 lg:my-0">
      Personalise your own
    </Link>
    <Link href="/" className="my-3 lg:mx-2 lg:my-0">
      Holiday Photobooks
    </Link>
    <Link href="/" className="my-3 lg:mx-2 lg:my-0">
      About us
    </Link>
    <Link href="/" className="my-3 lg:mx-2 lg:my-0">
      Sustainability
    </Link>
    <Link href="/" className="my-3 lg:mx-2 lg:my-0">
      Contact us
    </Link>
  </div>
);
