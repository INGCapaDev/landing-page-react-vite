import { WHATSAPP_URL } from "@/constants";

const ProjectCard = ({ project }) => {
  const goToWhatsApp = () => window.open(WHATSAPP_URL, "_blank");
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="aspect-square transform cursor-pointer rounded-3xl p-2 transition duration-200 hover:scale-105"
        onClick={goToWhatsApp}
      />
      <div className="p-4">
        <h3
          className="hover:text-accent mb-2 w-fit cursor-pointer text-2xl font-bold tracking-tighter transition-colors duration-150"
          onClick={goToWhatsApp}
        >
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
