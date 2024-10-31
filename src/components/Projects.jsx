import { projects } from "./ProjectsArray";
import ProjectCard from "./ProjectCard"


export default function Projects() {


    return (
        <div className="p-24">
            <h2s className="text-5xl mb-8 font-mark-pro-bold font-black text-whiteText project-title">Selected Projects</h2s>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className={`justify-center h-[90vh] flex items-center`}>
                        <ProjectCard color={project.color} title={project.title} image={project.image} index={index} image2={project.image2} />
                    </div>
                ))}
            </div>
        </div>
    );
}
