import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "./ProjectsArray";
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 20,
            stiffness: 90,
        },
    },
};
const Projects = () => {
    return (
        <div>
            <div className="flex h-screen items-center justify-center">
                <motion.h1
                    className="text-4xl font-[500] uppercase leading-[0.9]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {Array.from("Projects ").map((char, index) => (
                        <motion.div
                            key={index}
                            variants={letterVariants}
                            className="number font-safiro-reg-i"
                            style={{ display: 'inline-block', }}
                        >
                            {char}
                        </motion.div>
                    ))}
                </motion.h1>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
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

