import { projects } from "@/data/projects.data";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <section id= "projects" className="px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
