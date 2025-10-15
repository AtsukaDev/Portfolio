import projects from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#F0F2EF]">

      <div className="flex-1 overflow-hidden">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-fr gap-4 p-8 pt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.colSpan || ""} ${project.rowSpan || ""}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
