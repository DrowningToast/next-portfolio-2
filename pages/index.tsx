import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Hero = dynamic(() => import("../components/Hero"), {
  loading: () => <LandingLoader key="hero-loader" />,
});
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
      console.log("yed hee")
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
