"use client";

import "../styles/globals.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Inter, EB_Garamond } from "@next/font/google";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const eb_garamod = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setNav] = useState<boolean>(false);

  return (
    <html lang="en">
      <motion.body
        layout
        className={`${inter.variable} ${eb_garamod.variable} bg-black min-h-screen`}
      >
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {showNav ? (
              <div key="navigation" className="absolute inset-0 z-20 font-sans">
                <Navigation setNav={setNav} />
              </div>
            ) : (
              <>
                <motion.div
                  key="hamburger"
                  onClick={() => setNav(true)}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  className={`absolute top-4 right-4 cursor-pointer`}
                >
                  <IconMenu2 color="white" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {children}
        </LayoutGroup>
      </motion.body>
    </html>
  );
}
