import { motion } from "framer-motion";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import Highlight from "./common/Highlight";

function About() {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Sobre nosotros
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img
            src={about}
            alt="About img"
            className="rounded-3xl lg:-rotate-3"
          />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance text-4xl tracking-tighter lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 mt-2 h-2 w-36 bg-accent lg:!-rotate-3"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="m-8 text-pretty text-2xl leading-relaxed tracking-tight lg:max-w-xl"
          >
            En <Highlight>ÚNICO Desarrollos Inmobiliarios</Highlight>, creemos
            que tu hogar no es solo un lugar, es el{" "}
            <Highlight>
              inicio de una historia de bienestar y crecimiento.
            </Highlight>{" "}
            Desde nuestras exclusivas residencias hasta nuestra{" "}
            <Highlight>asesoría personalizada</Highlight>, cada detalle está
            diseñado para asegurar que tu{" "}
            <Highlight>experiencia con nosotros </Highlight>
            sea <Highlight>única</Highlight>. Vive la experiencia ÚNICO donde
            cada inversión es un patrimonio en construcción.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
