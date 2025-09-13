import '../App.css';

function ProjectCard({ title, description, tech, link, image }) {
    return (
        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-gray-200 text-sm">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tech && tech.map((t, idx) => (
                        <span key={idx} className="bg-white/30 px-2 py-1 rounded-full text-xs text-white">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
