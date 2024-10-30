import { goToWhatsApp } from "@/lib/whatssap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatssapButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsVisible(window.scrollY > heroHeight + 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
      }}
      className="fixed bottom-2 right-2 z-50 rounded-full border border-neutral-800 bg-black/70 p-3 text-neutral-300 backdrop-blur transition-all duration-150 lg:p-4"
      onClick={goToWhatsApp}
    >
      <FaWhatsapp className="h-6 w-6 transition-all duration-150 lg:h-7 lg:w-7" />
    </motion.button>
  );
};

export default WhatssapButton;
