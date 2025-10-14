import projects from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#F0F2EF]">


      <nav className="w-full flex items-center justify-center px-8 ">
        <div className="flex w-64 gap-6 justify-center items-center mt-4 p-2 pb-0">
          <Link to="/" className="bg-[#A69F98] rounded-2xl px-4 py-2 text-white">Projects</Link>
          <Link to="/contact" className="bg-[#A69F98] rounded-2xl px-4 py-2 text-white">Contact</Link>
          </div>
      </nav>

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
