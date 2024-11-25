import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { projects } from "./ProjectsArray";
import {Link} from 'react-router-dom'
import { ImageTrail } from "./MouseImageTrail";
import InteractiveBackground from "./InteractiveBackground";
import { useDarkMode } from "./DarkModeContext";

const Projects = () => {
    const {isDarkMode} = useDarkMode()
    const customColors = [
        '224, 195, 159',
        '202, 144, 129',
        '#e8e4dc'
    ];
    const targetRef = useRef(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    useEffect(() => {
        const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;

        if (isMobileOrTablet) {
            document.body.style.overflowY = "hidden"; 
        }
    }, []);

    const Card = ({ card, index }) => {
        return (
            <Link to={{
                pathname: `/projects/${card.id}`,
                state: { positionY: window.sliderPosition?.top || 0 }, 
            }} className="group h-56 flex gap-2 ">
                <motion.div
                    layoutId={`project-image-${card.id}`}
                    className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:w-48 lg:h-48 xl:h-56 xl:w-56  rounded-full overflow-hidden"
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
                <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:w-48 lg:h-48 xl:h-56 xl:w-56 flex rounded-full border border-gray-400 border-opacity-50 justify-center items-center relative">
                    <div className={`absolute group-hover:rotate-90 transition-transform duration-300 h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:w-48 lg:h-48 xl:h-56 xl:w-56 rounded-full before:w-[2.5px] before:h-[2.5px] ${isDarkMode ? 'before:bg-white' : 'before:bg-black'} before:absolute before:left-[3px] before:top-2/3 before:rounded-full after:h-[2.5px] after:w-[2.5px] ${isDarkMode ? 'after:bg-white' : 'after:bg-black'} after:absolute after:right-[3px] after:top-1/3 after:rounded-full`}>
                    </div>
                    <div className="p-3 w-[6.5rem] h-[6.5rem] sm:w-[7.5rem] sm:h-[7.5rem] md:w-[9.5rem] md:h-[9.5rem] lg:w-[11.5rem] lg:h-[11.5rem] xl:w-[13.5rem] xl:h-[13.5rem] mat-bg self-center rounded-full flex flex-col justify-between items-center group-hover:scale-95 transition-all transition-400">
                        <span className="text-xs">NO. {index + 1}</span>
                        <p className="font-safiro-reg-i text-sm sm:text-lg md:text-xl lg:text-2xl number">{card.title}</p>
                        <span className="text-xs">2022</span>
                    </div>
                </div>
            </Link>
        );
    };

    return (
            <div ref={targetRef} className="relative h-[300vh]">
                <div ref={containerRef} className="sticky h-screen top-0 flex  flex-col overflow-hidden">
                    <InteractiveBackground colors={customColors} />
                    <ImageTrail />
                    <motion.div
                        drag="x"
                        dragConstraints={containerRef}
                        dragElastic={0.1}
                        dragMomentum={true} style={{ x }} className="flex gap-3 md:gap-4 lg:gap-6 xl:gap-8 w-fit">
                        {projects.map((card, index) => {
                            return <Card card={card} index={index} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            </div>
    );
};



export default Projects;
