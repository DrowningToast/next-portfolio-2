import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}
