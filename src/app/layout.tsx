import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/app/ui/navigation/Navigation";
import { roboto } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Jellywish",
  description: "Postcards delivered"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
