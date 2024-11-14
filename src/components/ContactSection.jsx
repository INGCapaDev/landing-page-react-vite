import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { CONTACT } from "../constants";

const ICONS = {
  phone: <FaPhone />,
  email: <FaEnvelope />,
  address: <FaMapMarkerAlt />,
};

const ContactSection = () => {
  return (
    <section className="container mx-auto" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contáctanos</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <div
            key={detail.key}
            className="my-12 flex cursor-pointer items-center justify-center gap-4 border-b-2 border-dotted border-neutral-700 px-4 pb-12 text-center text-2xl tracking-tighter transition-colors duration-150 hover:text-accent-text lg:text-3xl"
            onClick={detail.callback}
          >
            <span className="text-base lg:text-xl"> {ICONS[detail.key]}</span>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
