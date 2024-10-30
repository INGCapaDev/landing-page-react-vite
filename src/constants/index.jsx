import project1 from "@assets/portoblanco.webp";
import project2 from "@assets/praia.webp";

import project3 from "@assets/sonterra.webp";
import project4 from "@assets/tiburon.webp";

import indian from "../assets/indian.jpeg";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const WHATSAPP_LADA = "52";
export const WHATSAPP_NUMBER = "6694048180";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_LADA}${WHATSAPP_NUMBER}?text=Hola%2C%20estoy%20interesado%20en%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20proyectos%20inmobiliarios.%20%C2%BFPodr%C3%ADan%20enviarme%20detalles%20sobre%20las%20opciones%20disponibles%3F`;

export const LINKS = [
  { text: "Proyectos", targetId: "projects" },
  { text: "Sobre Nosotros", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const PROJECTS = [
  {
    image: project1,
    title: "Porto Blanco",
    description:
      "PORTO BLANCO es un proyecto exclusivo de solo 32 unidades, diseñado para quienes buscan vivir en un espacio único, seguro y tranquilo, con áreas pensadas para el descanso y la comodidad ✨",
  },
  {
    image: project2,
    title: "Praia Malecón",
    description:
      "Invierte inteligentemente en un proyecto de alta plusvalía, ubicado en el corazón del malecón de Mazatlán, justo frente al mar 🌊",
  },
  {
    image: project3,
    title: "Sonterra Residencial",
    description:
      "Hermosa casa disponible en Sonterra 🏡, ubicada en la avenida principal, con fácil acceso y rodeada de todos los servicios esenciales. Ideal para quienes buscan comodidad y un entorno bien conectado.",
  },
  {
    image: project4,
    title: "Torre Tiburón",
    description:
      "¡Tu nuevo departamento en Torre Tiburón desde $2.6 MDP! 🏢 Vive a solo 300 metros del mar, en la exclusiva zona de Sábalo Country, con precios de preventa. ¡Invierte en tu futuro y disfruta de un hogar lleno de comodidades!",
  },
];

export const ABOUT = {
  header: "Espacios únicos, para vidas únicas!",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Paris, France, 345678" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
