import { projects } from "@/data/projects.data";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useRevel";

const ProjectsPreview = () => {
  const featuredProjects = projects.filter(p => p.featured);
 const { ref, isVisible } = useReveal();
  return (
    <motion.section className="px-6 py-20 border-t border-gray-200 dark:border-gray-800"
    ref={ref}
      id="projects-preview"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.slice(0, 2).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/projects"
          className="inline-block rounded border px-5 py-2"
        >
          View all projects →
        </a>
      </div>
    </motion.section>
  );
};

export default ProjectsPreview;
