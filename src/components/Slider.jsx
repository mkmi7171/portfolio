import React, {useRef, useMemo} from "react";
import { motion } from "framer-motion";
import AnimatedWrapper from "./AimatedWrapper";

const Slider = ({ project, positionY, animationDone }) => {
    const containerRef = useRef(null);
    const firstImage = useMemo(() => (
        <motion.div
            layoutId={`project-image-${project.id}`}
            initial={{ y: positionY, borderRadius: "50%" }}
            animate={{ y: 0, borderRadius: "16px" }}
            transition={{ duration: 0.6 }}
            className="w-80 lg:w-full"
        >
            <img
                drag="x"
                src={project.detailedPics[0].src}
                alt={project.title}
                className="w-full object-cover rounded-2xl"
            />
        </motion.div>
    ), [project.detailedPics[0].src, project.id, positionY]);

    return (
        <div
            ref={containerRef}
            className={`my-4 lg:my-0 lg:top-0 lg:w-[39%] lg:pt-24 xl:pt-32 lg:left-[30.5%] relative lg:absolute z-40 slider lg:h-screen pb-8 ${animationDone ? "overflow-y-scroll" : ""
                }`}
        >
            <motion.div
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                dragElastic={0.1}
                // transition={SPRING_OPTIONS}
                className="flex lg:flex-col items-center justify-center gap-5 lg:gap-8 w-max lg:w-full">
                {firstImage}
                {animationDone &&
                    project.detailedPics.slice(1).map((image, index) => (
                       
                            <img
                            src={image.src}
                            alt={image.alt}
                            key={index}
                            drag="x"
                            className="w-80 lg:w-full object-contain object-center rounded-2xl"
                            />

                    ))}
            </motion.div>
        </div>
    );
};

export default Slider;