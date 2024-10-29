import { WHATSAPP_URL } from "@/constants";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="aspect-square transform rounded-3xl p-2 transition duration-200 hover:scale-105"
        onClick={() => window.open(WHATSAPP_URL, "_blank")}
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
