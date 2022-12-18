import { FC } from "react";
import { motion, Variants, AnimationProps } from "framer-motion";
import { NAME } from "./constants";

interface Props {
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  variant?: Variants;
  className?: string;
}

const VerticalName: FC<Props> = ({ initial, animate, variant, className }) => {
  return (
    <motion.div layout className=" flex flex-col justify-center items-center">
      {NAME.split("").map((char, index) => (
        <motion.span
          initial={initial ?? undefined}
          animate={animate ?? undefined}
          variants={variant ?? undefined}
          layout
          layoutId={`${char}-${index}`}
          className={`${className} text-white uppercase leading-[1.5] md:leading-[1.3] font-bold text-3xl md:text-5xl font-sans `}
          key={index}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default VerticalName;
