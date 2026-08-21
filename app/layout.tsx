import "./globals.css";
import { ReactNode } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata = {
  title: "Kamesh Burde — Developer Command Center",
  description:
    "Kamesh Burde — Senior Software Engineer, Full Stack & Cloud. Specialist Programmer L3 at Infosys.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="grid-bg">{children}</body>
    </html>
  );
}
