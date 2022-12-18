import Image from "next/image";
import { motion } from "framer-motion";
import VerticalName from "./VerticalName";
import HeroScene from "./r3f/HeroScene";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="w-full h-screen bg-black p-4 pt-24 md:pt-4 grid place-items-center">
      <div className="flex md:grid flex-col justify-around md:place-items-center md:grid-cols-2 md:grid-rows-1 gap-x-2 relative w-full h-full">
        <nav className="fixed flex items-center gap-x-2 top-4 md:top-4 inset-x-4 md:inset-x-4">
          <Link
            href="https://webring.wonderful.software#supratouch.dev"
            passHref
          >
            <Image
              alt="วงแหวนเว็บ"
              width="32"
              height="32"
              src="https://webring.wonderful.software/webring.white.svg"
            />
          </Link>
          <h1 className="text-white font-bold md:text-xl font-sans">
            Personal Portfolio
          </h1>
        </nav>
        <section className="w-full h-full relative">
          <div className="w-full h-full">
            <HeroScene />
          </div>
          <div className=" absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2">
            <VerticalName className="text-transparent bg-gradient-to-b bg-clip-text from-blue-400 to-blue-700" />
          </div>
        </section>
        <div className="text-sans text-white flex flex-col items-center w-full text-center gap-y-4 row-start-2 md:row-start-1 col-start-1 py-12">
          <span className="inline-block w-full text-center">
            Start Exploring
          </span>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "",
            }}
            className="relative bg-gradient-to-tr rounded-full border-transparent from-blue-400 to-blue-700 p-1 w-48 h-auto focus:ring-0 focus:from-blue-600 focus:to-blue-900"
          >
            <motion.div
              animate={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              className="scale-110 blur-2xl rounded-full from-blue-400 to-blue-700 bg-gradient-to-tr absolute inset-0"
            ></motion.div>
            <div className="rounded-full font-bold bg-black transition-all duration-300 py-2 relative z-10 pointer-events-none">
              {"Let's go"}
            </div>
          </motion.button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
