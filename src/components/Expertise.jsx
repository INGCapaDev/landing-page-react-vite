import { EXPERTISE } from "@/constants";
import { goToWhatsApp } from "@/lib/whatssap";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandshake, FaHandsHelping, FaKey } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";

const ICONS_CLASSES =
  "text-accent-text text-lg md:text-xl xl:text-2xl group-hover:text-accent-text/80 duration-150 transition-all";

const ICONS = {
  "01.": <FaHandsHelping className={ICONS_CLASSES} />,
  "02.": <RiShieldCheckLine className={ICONS_CLASSES} />,
  "03.": <FaKey className={ICONS_CLASSES} />,
  "04.": <BsGraphUpArrow className={ICONS_CLASSES} />,
  "05.": <FaHandshake className={ICONS_CLASSES} />,
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Nuestra experiencia
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {EXPERTISE.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center border-b-4 border-dotted border-neutral-700/40 py-2 md:flex-row"
            variants={itemVariants}
          >
            <div className="hidden flex-shrink-0 pr-8 text-lg md:block md:text-2xl xl:text-3xl">
              {skill.number}
            </div>
            <div className="w-1/3 flex-shrink-0 py-4 xl:w-1/4">
              <div
                className="flex aspect-square h-auto w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl transition-transform duration-200 hover:scale-105"
                onClick={goToWhatsApp}
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="pb-4 md:pb-0 md:pl-8">
              <section className="group mx-auto flex w-fit cursor-pointer items-center gap-2 md:mx-0 md:gap-3">
                <h3
                  className="gap-2 text-center text-lg uppercase tracking-tighter text-accent-text transition-all duration-150 group-hover:text-accent-text/80 md:text-start md:text-2xl xl:text-3xl"
                  onClick={goToWhatsApp}
                >
                  {skill.title}
                </h3>
                {ICONS[skill.number]}
              </section>
              <p className="mt-4 max-w-sm text-center tracking-tighter md:max-w-xl md:text-balance md:text-start md:text-xl xl:max-w-max xl:text-2xl">
                {skill.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
