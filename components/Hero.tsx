import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import VerticalName from "./VerticalName";
import HeroScene from "./r3f/HeroScene";
import Link from "next/link";
import { createContext, useState } from "react";
import Navigation from "./Navigation";
import { atom, useAtom } from 'jotai'
import { HeroButton } from "./HeroButton";

export const showNavAtom = atom<boolean>(false)

const Hero = () => {
  const [showNav, setNav] = useAtom(showNavAtom)

  return (
    <main className="w-full min-h-screen bg-black p-4 pt-24 md:pt-4 grid place-items-center overflow-hidden">
      <AnimatePresence>
        {showNav && (
          <div className="absolute inset-0 z-20 ">
            <Navigation setNav={setNav} />
          </div>
        )}
      </AnimatePresence>

      <div className="flex md:grid flex-col justify-around md:place-items-center md:grid-cols-2 md:grid-rows-1 gap-x-2 relative w-full h-full z-0 overflow-hidden">
        <div className="fixed flex items-center gap-x-2 top-4 md:top-4 inset-x-4 md:inset-x-4">
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
        </div>
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
          <HeroButton />
        </div>
      </div>
    </main>
  );
};

export default Hero;
