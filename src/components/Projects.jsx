
import { projects } from "./ProjectsArray";
import ProjectCard from "./ProjectCard";

export default function Projects() {


    return (
        <div className=" h-[50vh] relative mb-32">
            <div className="gradients-container absolute">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>

            </div>
            <h2
                after="Projects"
                className="text-5xl mx-40 mb-24 font-black text-whiteText experties-title after:content-[attr(after)]"
            >
                Projects
            </h2>
            <div className="parent gap-4">
                {projects.map((project, index) => (
                    <div className="absolute bottom-0 right-5">
                        <ProjectCard
                            key={index}
                            color={project.color}
                            title={project.title}
                            image={project.image}
                            index={index}
                            image2={project.image2}
                        />
                 </div>
                ))}
            </div>
        </div>
    );
}
