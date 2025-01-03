import logo from "@assets/full-logo-hero.webp";
import hero from "@assets/hero-fallback.webp";
import video from "@assets/hero-video.webm";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full bg-black/80"></div>
      <div className="absolute inset-0 -z-30 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end py-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="Logo img"
          className="max-h-[95%] w-full p-4"
        />
        <FaArrowDown className="mx-auto h-6 w-auto animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
