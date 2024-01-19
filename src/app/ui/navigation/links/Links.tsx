import Link from "next/link";
import React, { ReactNode } from "react";

export const Links = (): ReactNode => (
  <>
    <Link href="/product" className="mx-2">
      Postcards
    </Link>
    <Link href="/" className="mx-2">
      Personalise your own
    </Link>
    <Link href="/" className="mx-2">
      Holiday Photobooks
    </Link>
    <Link href="/" className="mx-2">
      About us
    </Link>
    <Link href="/" className="mx-2">
      Sustainability
    </Link>
    <Link href="/" className="mx-2">
      Contact us
    </Link>
  </>
);
