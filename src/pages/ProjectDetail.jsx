import { motion } from "framer-motion";
import { useParams, Link,useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { projects } from "../components/ProjectsArray";
import InteractiveBackground from "../components/InteractiveBackground";
import { useDarkMode } from "../components/DarkModeContext";
import AnimatedWrapper from "../components/AimatedWrapper";
import {Arrow} from "../components/Arrow";

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { positionY } = location.state || {}; 
  const project = projects.find((p) => p.id === parseInt(id));
  const [animationDone, setAnimationDone] = useState(false);

  const { isDarkMode } = useDarkMode(); 

  if (!project) return <div>Project not found</div>;
  const nextProjectIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const customColors = [
    project.bubbleColor,
    project.bubbleColor,
    project.color
  ];

  return (
    <div className="relative min-h-[100dvh] overflow-hidden pb-4" style={{ backgroundColor: isDarkMode ? "#191818" : project.color }}>
      <div className="w-full flex justify-between items-start">
        <InteractiveBackground colors={customColors} />
        <div className="flex-[1.4] lg:flex-[0.3] h-full pt-20 lg:pt-24 px-3  
        sm:px-5 lg:pr-12 z-40">
          <AnimatedWrapper duration={0.6} delay={0.2}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-safiro-reg-i number">{project.title}</h1>
          </AnimatedWrapper>
          <AnimatedWrapper duration={0.6} delay={0.3}>
            <div dangerouslySetInnerHTML={{ __html: project.description }} className="text-xs sm:text-sm sm:text-base lg:text-[15.5px] xl:leading-6 xl:text-[16px]  xl:leading-5  py-2 lg:py-4 sm:tracking-tight" />
          </AnimatedWrapper>
          <AnimatedWrapper duration={0.6} delay={0.4}>
            <div className={`cursor-pointer overflow-hidden relative group border w-24 h-8 ${isDarkMode ? 'border-gray-100' : 'border-gray-500'} flex items-center rounded-xl`}>
              <a href={project.detailInfo.link} target="_blank" rel="noreferrer" className='w-24 h-6 relative overflow-hidden px-2 py-1'>
                <div className="flex items-center">
                  <p className='absolute top-1 text-xs group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-500 ease-in-out group-hover:opacity-0'>
                    VISIT
                  </p>
                  <Arrow className={`absolute top-1 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`} />
                </div>
                <p className='text-xs absolute -bottom-[60%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
                  VISIT
                </p>
                <Arrow className={'absolute top-full right-4 scale-50 group-hover:top-1 group-hover:right-1 group-hover:scale-100'} />
              </a>
            </div>
          </AnimatedWrapper>

        </div>
        <div className="flex-[0.9] z-40 lg:flex-[0.28] flex flex-col px-2 gap-2 lg:gap-8 h-full pt-20 lg:pt-24 xl:pt-32 ">
          <AnimatedWrapper duration={0.6} delay={0.2}>
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl tracking-tight number">0{project.id}</span>
              <div className="w-0.5 mx-4 md:mx-6 xl:mx-8 h-6 sm:h-8 md:h-10 xl:h-16 bg-gray-400 rotate-45"></div>
              <span className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl tracking-tight number">08</span>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper duration={0.6} delay={0.3}>
            <div className="flex flex-col gap-3">
              <div>
                <p className="number text-sm md:text-base font-bold font-safiro-reg-i">Role</p>
                <span className="text-xs md:text-sm">{project.detailInfo.role}</span>
              </div>
              <div>
                <p className="number font-bold text-sm md:text-base font-safiro-reg-i">Technologies</p>
                <span className="text-xs md:text-sm">{project.detailInfo.techs}</span>
              </div>
              <div>
                <p className="number font-bold text-sm md:text-base font-safiro-reg-i">Year</p>
                <span className="text-xs md:text-sm">{project.detailInfo.year}</span>
              </div>
            </div>
          </AnimatedWrapper>

        </div>
      </div>
      <div
        className={`px-3 sm:px-5 lg:px-0 my-4 lg:my-0 lg:top-0 lg:w-[39%] lg:pt-24 xl:pt-32 lg:left-[31.8%] relative lg:absolute z-40 slider lg:h-screen lg:pb-8 ${animationDone ? "overflow-y-scroll" : ""
          }`}
      >
        <motion.div
          dragConstraints={{
              left: 0,
              right: 0,
          }}
          dragElastic={0.1}
          className="flex lg:flex-col items-center justify-center gap-5 lg:gap-8 w-max lg:w-full">
          <motion.div
            className="flex items-center justify-center w-80 lg:w-full"
          >
            <motion.div
              layoutId={`project-image-${project.id}`}
              className="relative w-full h-[167px] lg:h-[220px] xl:h-[290px] overflow-hidden "
              initial={{ y: positionY, borderRadius: "50%" }}
              animate={{ y: 0, borderRadius: "16px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.detailedPics[0].src}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
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
      
      {animationDone && <Link to={`/projects/${nextProject?.id}`} className="w-full lg:w-auto flex justify-end px-4 z-40 absolute lg:right-4 absolute bottom-2 right-0">
        <span className="text-[0.65rem] md:text-xs font-safiro-reg-i">next</span>
        <div
          className="h-20 w-20 sm:h-28 sm:w-28 lg:w-40 lg:h-40 xl:h-44 xl:w-44 rounded-full next-project"
          style={{
            backgroundImage: `url(${nextProject?.image || ''})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            layoutId={`project-image-${nextProject.id}`}
            className="w-full h-full rounded-full overflow-hidden"
            initial={{borderRadius: "50%" }}
            animate={{ borderRadius: "16px" }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        </div>
      </Link>}
   </div>
  );
};

export default ProjectDetail;
