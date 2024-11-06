import { useEffect, useRef, useState } from "react";
import { projects } from "./ProjectsArray";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const [scale, setScale] = useState(1.2); // Start with a zoomed-in scale
    const projectsRef = useRef(null);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (projectsRef.current) {
                const elementTop = projectsRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const maxScale = 1.2;
                const minScale = 1;

                // Calculate scale based on scroll position
                let newScale = maxScale - ((windowHeight - elementTop) / windowHeight) * (maxScale - minScale);
                newScale = Math.max(minScale, Math.min(maxScale, newScale)); // Clamp between minScale and maxScale
                setScale(newScale);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={projectsRef}
        >
            <h2
                after="Selected Projects"
                className="text-5xl m-40 mb-24 font-mark-pro-bold font-black text-whiteText experties-title after:content-[attr(after)]"
            >
                Selected Projects
            </h2>
            <div className="parent gap-4" style={{
                transform: `scale(${scale})`,
                transition: "transform 0.5s ease-out", // Smooth transition effect
            }}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        color={project.color}
                        title={project.title}
                        image={project.image}
                        index={index}
                        image2={project.image2}
                    />
                ))}
            </div>
        </div>
    );
}
