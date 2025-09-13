import "../App.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects.json"; 

function Projects() {
    return (
        <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </div>
    );
}

export default Projects;
