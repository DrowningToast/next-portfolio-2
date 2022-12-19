import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import LandingLoader from "../components/LandingLoader";

const Index: NextPage = () => {
  // Placeholder true
  const [isLoaded, setLoaded] = useState(false);

  // Simulate loading
  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(simulateLoading);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoaded ? <Hero key="hero" /> : <LandingLoader key="hero-loader" />}
    </AnimatePresence>
  );
};

export default Index;
