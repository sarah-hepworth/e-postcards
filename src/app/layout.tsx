import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/app/ui/navigation/Navigation";
import { robotoRegular } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Jellywish",
  description: "Postcards delivered"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoRegular.className} antialiased bg-indigo-50`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
