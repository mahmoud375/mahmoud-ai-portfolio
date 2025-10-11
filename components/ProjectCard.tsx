import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-primary dark:hover:border-primary transition-colors duration-200">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {project.name}
            </h3>
            <span className="text-sm text-muted dark:text-gray-400 whitespace-nowrap">
              {project.year}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Long Description (if available) */}
        {project.longDescription && project.longDescription.length > 0 && (
          <div className="space-y-2 text-gray-600 dark:text-gray-400 text-[15px]">
            {project.longDescription.map((desc, index) => (
              <p key={index} className="leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1"
            >
              Visit Site
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover font-medium underline underline-offset-2 transition-colors inline-flex items-center gap-1"
            >
              View Code
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
