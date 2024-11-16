import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "./ProjectsArray";
import { ImageTrail } from "./MouseImageTrail";
const Projects = () => {
    return (
        <div>
            <ImageTrail />
            <HorizontalScrollCarousel />
            <div className="flex h-24 items-center justify-center">
                <span className="text-sm uppercase">
                    Scroll up
                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <div ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {projects.map((card, index) => {
                        return <Card card={card} key={index} />;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

const Card = ({ card, index }) => {
    return (
        <div
            key={index}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Projects;

