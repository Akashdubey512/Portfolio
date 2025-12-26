const ProjectCard = ({ project }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col">
      
      {/* Preview Image */}
      <img
        src={project.thumbnail}
        alt={`${project.title} preview`}
        className="h-48 w-full object-cover"
        loading="lazy"
      />

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
