import {useRef} from "react";
import { motion } from "framer-motion";
import AnimatedWrapper from "./AimatedWrapper";

const Slider = ({ project, positionY, animationDone }) => {
    const containerRef = useRef(null);
    return (
        <div ref={containerRef}
            className={`z-40 relative slider border border-black lg:h-screen lg:pt-24 xl:pt-32 pb-8 lg:w-[40%] flex-[1.3] ${animationDone ? "overflow-scroll" : ""
                    }`}
            >
            <motion.div drag="x"
                dragConstraints={containerRef}
                dragElastic={0.1}
                dragMomentum={true} className="flex flex-row lg:flex-col gap-5 lg:gap-8 w-max">
                <motion.div className="flex items-center justify-center w-80 h-44 lg:w-[580px] lg:h-[320px]">
                    <motion.div
                        layoutId={`project-image-${project.id}`}
                        className="relative w-80 h-44 lg:w-[580px] lg:h-[320px] overflow-hidden"
                        initial={{ y: positionY, borderRadius: "50%" }}
                        animate={{ y: 0, borderRadius: "16px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={project.detailedPics[0].src}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>

                {animationDone &&
                    project.detailedPics.slice(1).map((image, index) => (
                        <AnimatedWrapper key={index} duration={0.8}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-80 h-44 lg:w-[580px] lg:h-[320px] object-cover object-center rounded-2xl"
                            />
                        </AnimatedWrapper>
                    ))}
        </motion.div>
            </div>

    );
};

export default Slider;
