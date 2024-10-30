import reviewIMG from "@assets/yoshi.webp";
import { goToWhatsApp } from "@lib/whatssap";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { REVIEW } from "../constants";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
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
      duration: 0.5,
    },
  },
};

function Review() {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVariants}
          className="mb-10 px-4 text-3xl font-light leading-normal tracking-tighter lg:mx-32 lg:mt-24 lg:text-4xl lg:leading-relaxed lg:tracking-normal"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={reviewIMG}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mt-12 flex w-fit items-center gap-2 rounded-lg border border-accent px-4 py-2 text-neutral-200"
          onClick={goToWhatsApp}
        >
          <FaWhatsapp></FaWhatsapp> Contactar
        </motion.button>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={itemVariants}
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, idx) => (
          <motion.img
            variants={itemVariants}
            key={idx}
            src={customer}
            alt={`customer${idx}`}
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Review;
