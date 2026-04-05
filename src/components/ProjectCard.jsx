import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-5 rounded-xl shadow-md bg-white dark:bg-gray-800"
    >
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-2 text-sm opacity-80">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 flex gap-4">
        <a href={project.github} target="_blank" className="text-blue-500">
          GitHub
        </a>
        <a href={project.live} target="_blank" className="text-green-500">
          Live
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;