import { IconX } from "@tabler/icons";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { motion, useMotionValue, Variants } from "framer-motion";
import ContactScene from "./r3f/ContactScene";

const variants: Variants = {
  first: {
    y: "-100%",
  },
  second: {
    y: "0%",
    transition: {
      duration: 0.35,
      delayChildren: 0.2,
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
  third: {
    y: "-100%",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

interface Props {
  setNav: Dispatch<SetStateAction<boolean>>;
}

const Navigation: FC<Props> = ({ setNav }) => {
  const [showBall, setBall] = useState<boolean>(false);

  const xPos = useMotionValue(0);
  const yPos = useMotionValue(0);

  return (
    <motion.div
      variants={variants}
      initial="first"
      animate="second"
      exit="third"
      onMouseEnter={() => {
        setBall(true);
      }}
      onMouseLeave={() => {
        setBall(false);
      }}
      onMouseMove={async (e) => {
        xPos.set(e.clientX);
        yPos.set(e.clientY);
      }}
      className="grid grid-cols-3 bg-whtie h-full relative text-white overflow-hidden"
    >
      <motion.div
        style={{
          x: xPos,
          y: yPos,
        }}
        animate={{
          opacity: showBall ? 1 : 0,
          transition: {
            duration: 2.4,
            ease: "easeOut",
          },
        }}
        className="absolute z-10 flex transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-white blur-[128px] bg-opacity-30 min-w-[128px] min-h-[128px] rounded-full absolute z-10 block transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div
        onClick={() => setNav(false)}
        className="absolute top-4 right-4 z-10 cursor-pointer"
      >
        <IconX />
      </div>
      <motion.div
        variants={variants}
        className="relative grid place-items-center bg-gradient-to-br from-blue-500 to-blue-600"
      >
        <h1 className="text-4xl font-bold">Profile</h1>
      </motion.div>
      <motion.div
        variants={variants}
        className="relative grid place-items-center bg-gradient-to-br from-pink-600 to-pink-900"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </motion.div>
      <motion.div
        variants={variants}
        className="relative grid place-items-center bg-black"
      >
        <div className="absolute inset-0">
          <ContactScene />
        </div>
        <h1 className="text-4xl font-bold relative z-10">Contact</h1>
      </motion.div>
    </motion.div>
  );
};

export default Navigation;
