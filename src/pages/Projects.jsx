import projects from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">

            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`${project.colSpan || ""} ${project.rowSpan || ""} `}
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
    );
}

export default Projects;
