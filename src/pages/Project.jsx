import projects from "../assets/projects";
import ProjectCard from "../components/ProjectCard";
function Project() {
  return (
    <>
     <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-black dark:text-white">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        My Projects 🚀
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
    </>
  );
}

export default Project;