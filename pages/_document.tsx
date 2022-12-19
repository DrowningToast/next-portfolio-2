import { Html, Head, Main, NextScript } from "next/document";
import { LayoutGroup, motion } from "framer-motion";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <motion.body layout className="bg-black">
        <Main />
        <NextScript />
      </motion.body>
    </Html>
  );
}
