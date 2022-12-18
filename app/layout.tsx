"use client";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutGroup, motion } from "framer-motion";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <motion.body layout className={`${inter.variable}`}>
        <LayoutGroup>{children}</LayoutGroup>
      </motion.body>
    </html>
  );
}
