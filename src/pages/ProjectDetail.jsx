import { motion } from "framer-motion";
import { useParams, Link,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "../components/ProjectsArray";
import InteractiveBackground from "../components/InteractiveBackground";
import { useDarkMode } from "../components/DarkModeContext";
import AnimatedWrapper from "../components/AimatedWrapper";
import Slider from "../components/Slider";

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { positionY = 0 } = location.state || {}; 
  const project = projects.find((p) => p.id === parseInt(id));
  const [animationDone, setAnimationDone] = useState(false);

  const { isDarkMode } = useDarkMode(); 

  if (!project) return <div>Project not found</div>;
  const nextProjectIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const customColors = [
    project.bubbleColor,
    project.bubbleColor,
    project.color
  ];



  const Arrow = ({ className }) => {
    return (
      <div className={`transition-all duration-500 ease-in-out ${className}`}>
        <svg width="20" height="12" viewBox="0 0 18 17" fill="none" className="icon-svg | w-[1.8rem] h-auto">
          <path d="M4.75928 4.96442L13.3288 4.50811L12.5375 12.7426" className="stroke-current"></path>
          <path d="M13.3857 4.39875L4.90039 12.884" className="stroke-current"></path>
        </svg>
      </div>
    );
  };

  return (
    <div className="relative h-screen overflow-hidden" style={{ backgroundColor: isDarkMode ? "#191818" : project.color }}>
      <div className="w-full flex justify-between items-start">
        <InteractiveBackground colors={customColors} />
        <div className="flex-[0.85] h-full pt-20 lg:pt-24 xl:pt-32 px-3 sm:px-8 z-40">
          <AnimatedWrapper duration={1} delay={0.2}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-safiro-reg-i number">{project.title}</h1>
          </AnimatedWrapper>
          <AnimatedWrapper duration={1} delay={0.3}>
            <div dangerouslySetInnerHTML={{ __html: project.description }} className="text-sm sm:text-text-base lg:text-lg py-3 md:py-4 lg:py-6 xl:py-8 tracking-tight" />
          </AnimatedWrapper>
          <AnimatedWrapper duration={1} delay={0.4}>
            <div className="uppercase overflow-hidden relative group border w-28 h-8 border-gray-800 px-2 py-1 rounded-xl">
              <div className="flex items-center">
                <p className="absolute top-2 text-sm group-hover:absolute group-hover:-top-[55%] group-hover:tracking-widest tracking-tighter transition-all duration-300 ease-in-out group-hover:opacity-0">
                  Visit
                </p>
                <Arrow
                  className={`absolute top-2 right-1 group-hover:-top-full group-hover:-right-4 group-hover:scale-50`}
                />
              </div>
              <p className="text-sm absolute -bottom-[50%] group-hover:bottom-1 transition-all tracking-widest group-hover:tracking-tighter duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                visit
              </p>
              <Arrow
                className={
                  "absolute top-full right-4 scale-50 group-hover:top-2 group-hover:right-1 group-hover:scale-100"
                }
              />
            </div>
          </AnimatedWrapper>

        </div>
        {/* **********sliderDesktop*********** */}
        <div className="hidden lg:flex">
          <Slider project={project}
            positionY={positionY}
            animationDone={animationDone} />
        </div>
        {/* **********sliderDesktop*********** */}
        <div className="z-40 flex-[0.85] flex flex-col gap-8 h-full pt-20 lg:pt-24 xl:pt-32 ml-12">
          <AnimatedWrapper duration={1} delay={0.2}>
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight number">0{project.id}</span>
              <div className="w-0.5 mx-4 md:mx-6 xl:mx-8 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 bg-gray-400 rotate-45"></div>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight number">06</span>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper duration={1} delay={0.3}>
            <div className="flex flex-col gap-3">
              <div>
                <p className="number font-bold font-safiro-reg-i">Role</p>
                <span className="text-sm">{project.detailInfo.role}</span>
              </div>
              <div>
                <p className="number font-bold font-safiro-reg-i">Technologies</p>
                <span className="text-sm">{project.detailInfo.techs}</span>
              </div>
              <div>
                <p className="number font-bold font-safiro-reg-i">Year</p>
                <span className="text-sm">{project.detailInfo.year}</span>
              </div>
            </div>
          </AnimatedWrapper>

        </div>
        {animationDone && <Link to={`/projects/${nextProject?.id}`} className=" z-40 absolute right-8 bottom-8">
          <div
            className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:w-48 lg:h-48 xl:h-56 xl:w-56 rounded-full next-project"
            style={{
              backgroundImage: `url(${nextProject?.image || ''})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              layoutId={`project-image-${nextProject?.id}`}
              className="w-full h-full rounded-full overflow-hidden"
              initial={{ borderRadius: "50%" }}
              animate={{ borderRadius: "16px" }}
              transition={{ duration: 0.6 }}
            ></motion.div>
          </div>
        </Link>}
      </div>
      {/* **********sliderMobile*********** */}
      <div className="lg:hidden">
        <Slider project={project}
          positionY={positionY}
          animationDone={animationDone} />
      </div>
      {/* **********sliderMobile*********** */}
   </div>
  );
};

export default ProjectDetail;
