import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects } from "./ProjectsArray";
import { ImageTrail } from "./MouseImageTrail";
import InteractiveBackground from "./InteractiveBackground";
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            <InteractiveBackground />
            <ImageTrail />
            <HorizontalScrollCarousel />
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
            <div className="sticky top-0 flex h-screen pt-12 overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8">
                    {projects.map((card, index) => {
                        return <Card card={card} index={index} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

const Card = ({ card, index }) => {
    return (
        <Link to={`/projects/${card.id}`} className="group h-56 flex gap-2 ">
            <motion.div
                layoutId={`project-image-${card.id}`} 
                className="relative h-56 w-56 rounded-full overflow-hidden" 
                style={{
                    borderRadius: '50%'
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                ></div>
              
            </motion.div>
            <div className="w-[13.5rem] h-[13.5rem] flex rounded-full border border-gray-400 border-opacity-50 justify-center items-center relative">
                <div className="absolute group-hover:rotate-90 transition-transform duration-300 w-52 h-52 rounded-full before:w-[2.5px] before:h-[2.5px] before:bg-black before:absolute before:left-[3px] before:top-2/3 before:rounded-full after:h-[2.5px] after:w-[2.5px] after:bg-black after:absolute after:right-[3px] after:top-1/3 after:rounded-full">
                </div>
                <div className="p-3 w-52 h-52 mat-bg self-center rounded-full flex flex-col justify-between items-center group-hover:scale-95 transition-all transition-400">
                    <span className="text-xs">NO. {index + 1}</span>
                    <p className="font-safiro-reg-i text-2xl number">{card.title}</p>
                    <span className="text-xs">2022</span>
                </div>
            </div>
        </Link>
    );
};

export default Projects;
