"use client";

import { motion, Variants } from "framer-motion";

import VerticalName from "./VerticalName";

const variant: Variants = {
  first: {
    opacity: 0,
  },
  second: {
    opacity: 1,
    transition: {
      duration: 0.75,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  third: {
    opacity: 0,
    transition: {
      delay: 1.25,
      duration: 0.8,
    },
  },
};

const LandingLoader = () => {
  return (
    <motion.div
      initial={"first"}
      animate={"second"}
      exit={"third"}
      variants={variant}
      layout
      className="absolute inset-0 w-full h-screen grid place-items-center bg-blue-700"
    >
      <motion.div
        initial={"first"}
        animate={"second"}
        exit={"third"}
        variants={variant}
        layout
        className=" flex flex-col justify-center items-center"
      >
        <VerticalName variant={variant} />
      </motion.div>
    </motion.div>
  );
};

export default LandingLoader;
