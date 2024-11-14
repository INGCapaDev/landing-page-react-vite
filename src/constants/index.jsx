import project1 from "@assets/portoblanco.webp";
import project2 from "@assets/praia.webp";
import project3 from "@assets/sonterra.webp";
import project4 from "@assets/tiburon.webp";

import skill1 from "@assets/consultory.webp";
import skill3 from "@assets/exclusive-presales.webp";
import skill4 from "@assets/highly-returns.webp";
import skill2 from "@assets/secure-investment.webp";
import skill5 from "@assets/trust.webp";

import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { goToWhatsApp } from "@/lib/whatssap";
import { FaWhatsapp } from "react-icons/fa";

export const WHATSAPP_LADA = "52";
export const WHATSAPP_NUMBER = "6694048180";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_LADA}${WHATSAPP_NUMBER}?text=Hola%2C%20estoy%20interesado%20en%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20proyectos%20inmobiliarios.%20%C2%BFPodr%C3%ADan%20enviarme%20detalles%20sobre%20las%20opciones%20disponibles%3F`;

export const LINKS = [
  { text: "Proyectos", targetId: "projects" },
  { text: "Nosotros", targetId: "about" },
  { text: "Misión", targetId: "mission" },
  { text: "Experiencia", targetId: "expertise" },
  { text: "Inversión", targetId: "review" },
  { text: "Contacto", targetId: "contact" },
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
  "Nuestra misión es guiar a cada cliente en el mercado inmobiliario con transparencia y pasión, maximizando su rentabilidad y cumpliendo sus metas.";

export const EXPERTISE = [
  {
    number: "01.",
    image: skill1,
    title: "El Mejor Asesoramiento",
    description:
      "Nuestro equipo de expertos te acompaña en cada paso, brindándote asesoramiento personalizado para que tomes decisiones informadas y seguras.",
  },
  {
    number: "02.",
    image: skill2,
    title: "Inversiones Seguras",
    description:
      "Ofrecemos proyectos con alta plusvalía y rentabilidad, asegurando que tu inversión esté protegida y crezca con el tiempo.",
  },
  {
    number: "03.",
    image: skill3,
    title: "Preventas Exclusivas",
    description:
      "Accede a nuestras preventas exclusivas y aprovecha oportunidades únicas para invertir en proyectos de alta demanda antes de su lanzamiento.",
  },
  {
    number: "04.",

    image: skill4,
    title: "Alto Retorno de Inversión",
    description:
      "Nuestros desarrollos están ubicados en zonas de alta plusvalía, garantizando un excelente retorno de inversión a mediano y largo plazo.",
  },
  {
    number: "05.",
    image: skill5,
    title: "Confianza y Transparencia",
    description:
      "Tu confianza es nuestra prioridad. Trabajamos con transparencia y compromiso, brindándote una experiencia de inversión sin sorpresas.",
  },
];

export const REVIEW = {
  name: "Carlos Magallanes",
  profession: "Asesor Inmobiliario",
  content:
    '"La inversión en bienes raíces es una de las decisiones más sólidas y seguras. No solo se trata de adquirir propiedades, sino de construir un patrimonio estable que crezca con el tiempo y que puedas transmitir como un legado para el futuro."',
};

const gmaps_link = "https://maps.app.goo.gl/ehfaPAjzospcNHvW9";
export const CONTACT = [
  {
    key: "address",
    value: "Av. Carlos Canseco 6048, Marina Mazatlán, 82103 Mazatlán, Sin.",
    callback: () => window.open(gmaps_link, "_blank"),
  },
  { key: "phone", value: "669-404-8180", callback: goToWhatsApp },
  /* {
    key: "email",
    value: "contact@restaurant.com",
    callback: () => window.open(`mailto:${email}`, "_blank"),
  } */
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61565627799844",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/unicodesarrollosmzt",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: WHATSAPP_URL,
    icon: <FaWhatsapp fontSize={30} className="hover:opacity-80" />,
  },
];
