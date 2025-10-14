import '../App.css';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, tech, link, image }) {
    let Wrapper;

    if (!link) {
        Wrapper = ({ children }) => <>{children}</>;
    } else if (link.startsWith("http")) {
        Wrapper = ({ children }) => (
            <a href={link} target="_blank" rel="noreferrer" className="block w-full h-full">
                {children}
            </a>
        );
    } else {
        Wrapper = ({ children }) => (
            <Link to={link} className="block w-full h-full">
                {children}
            </Link>
        );
    }

    return (
        <div
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ease-out
                        hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[10px_10px_0px_rgba(57,28,135,0.8)]"

        >
            <Wrapper>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                    {title && <h3 className="text-white text-xl font-bold">{title}</h3>}
                    {description && <p className="text-gray-200 text-sm">{description}</p>}
                    {tech && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tech.map((t, idx) => (
                                <span key={idx} className="bg-white/30 px-2 py-1 rounded-full text-xs text-white">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Wrapper>
        </div>
    );
}

export default ProjectCard;
