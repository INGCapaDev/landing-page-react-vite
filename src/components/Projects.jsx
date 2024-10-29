import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="container mx-auto py-16" id="projects">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Nuestros Proyectos
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
