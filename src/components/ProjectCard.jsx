import { goToWhatsApp } from "@lib/whatssap";

const ProjectCard = ({ project }) => {
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
          className="mb-2 w-fit cursor-pointer text-2xl font-bold tracking-tighter transition-colors duration-150 hover:text-accent"
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
