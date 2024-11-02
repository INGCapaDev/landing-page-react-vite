import { EXPERTISE } from "@/constants";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandshake, FaHandsHelping, FaKey } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";

const ICONS_CLASSES =
  "w-full h-full p-4 md:p-8 lg:p-12 bg-neutral-900/15 text-accent-text";

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
              <div className="flex aspect-square h-auto w-full flex-col items-center justify-center">
                {ICONS[skill.number]}
              </div>
            </div>
            <div className="pb-4 md:pb-0 md:pl-8">
              <h3 className="text-center text-lg uppercase tracking-tighter text-accent-text md:text-start md:text-2xl xl:text-3xl">
                {skill.title}
              </h3>
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
