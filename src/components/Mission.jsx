import mission from "@assets/mission-video.webm";
import { motion } from "framer-motion";
import missionIMG from "../assets/mission.jpeg";
import { MISSION } from "../constants";

function Mission() {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">Nuestra misión</h2>
        <div className="relative flex items-center justify-center px-6 py-4">
          <motion.video
            src={mission}
            className="aspect-video h-auto w-full rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            autoPlay
            muted
            loop
            playsInline
            poster={missionIMG}
          ></motion.video>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute h-full w-full rounded-3xl bg-black/80"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-8 right-8 mx-auto max-w-2xl text-balance tracking-tighter lg:text-3xl"
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
